import { TSongId } from "./types/TSong";
import { useEffect } from "react";
import ReactGA from "react-ga";
import devLog from "./utils/devLog";

const config: ReactGA.InitializeOptions = {
  debug: false,
  titleCase: true,
};

let isInitialized = false;
const sendEventsDuringDev = false;
const isLocalEnv =
  process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test";

const usePageView = () => {
  useEffect(() => {
    const url = window.location.pathname + window.location.search;
    devLog(`Analytics - Logging page view for ${url}`);

    if (isInitialized) {
      ReactGA.pageview(url);
    }
  }, []);
};

const prependDevIfNeeded = (s: string) => `${isLocalEnv ? "dev-" : ""}${s}`;

const analytics = {
  init: () => {
    if (isLocalEnv && !sendEventsDuringDev) return;

    if (isInitialized === false) {
      const trackingId = process.env.REACT_APP_ANALYTICS_TRACKING_ID;
      if (!trackingId) {
        console.error(`Analytics id unavailable`, trackingId);
      } else {
        ReactGA.initialize(trackingId, config);
        devLog("Analytics - intialized");
        isInitialized = true;
      }
    } else {
      console.warn(
        "Attempting to initialize analytics after it has already been initialized."
      );
    }
  },

  logPageView: usePageView,

  logEvent: (
    category:
      | "listen-links"
      | "social-links"
      | "UI"
      | "warning"
      | "inline-play",
    action:
      | "chose-spotify"
      | "chose-youtube"
      | "chose-soundcloud"
      | "chose-bandcamp"
      | "clicked-instagram-icon"
      | "clicked-facebook-icon"
      | "clicked-cover"
      | "clicked-listen-now"
      | "opened-platforms-menu"
      | "closed-platforms-menu"
      | "closed-platforms-menu-without-listening"
      | "redirect-from-unmatched-route"
      | "youtube-inline-play",
    label?: TSongId | string,
    value?: number
  ) => {
    devLog(
      `Analytics - Logging event: ${prependDevIfNeeded(category)} / ${action}${
        label !== undefined ? ` / ${label}` : ""
      }${value !== undefined ? ` / ${value}` : ""}`
    );

    if (isInitialized) {
      ReactGA.event({
        action: prependDevIfNeeded(action),
        category: prependDevIfNeeded(category),
        label: label ? prependDevIfNeeded(label) : undefined,
        value: value ?? undefined,
      });
    }
  },

  trackFBEvent: (eventName: "ViewContent", contentName: "spotify") => {
    fbq("track", eventName, { content_name: contentName });
  },
};

export default analytics;
