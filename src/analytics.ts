import { TSongId } from "./types/TSong";
import { useEffect } from "react";
import ReactGA, { OutboundLink } from "react-ga";
import devLog from "./utils/devLog";

const config: ReactGA.InitializeOptions = {
  debug: false,
  titleCase: true,
};

let isInitialized = false;
let isActive = true;

const usePageView = () => {
  useEffect(() => {
    const url = window.location.pathname + window.location.search;
    console.log(`Analytics: Logging page view for ${url}`);

    // if (
    //   process.env.NODE_ENV !== "development" &&
    //   process.env.NODE_ENV === "test"
    // ) {
    ReactGA.pageview(url);
    // }
  }, []);
};

const prependDevIfNeeded = (s: string) =>
  `${
    process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test"
      ? "dev-"
      : ""
  }${s}`;

const analytics = {
  init: () => {
    if (isInitialized === false) {
      const trackingId = process.env.REACT_APP_ANALYTICS_TRACKING_ID;
      if (!trackingId) {
        console.error(`Analytics id unavailable`, trackingId);
      } else {
        ReactGA.initialize(trackingId, config);
        devLog("analytics intialized");
        isInitialized = true;
      }
    } else {
      console.warn(
        "Attempting to initialize analytics after it has already been initialized."
      );
    }
  },

  logPageView: usePageView,
  OutboundLink: OutboundLink,

  logEvent: (
    category: "listen-links" | "social-links" | "UI" | "warning",
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
      | "redirect-from-unmatched-route",
    label?: TSongId | string
  ) => {
    devLog(
      `Analytics: Logging event ${prependDevIfNeeded(
        category
      )} / ${action} / ${label}.`
    );

    ReactGA.event({
      action: prependDevIfNeeded(action),
      category: prependDevIfNeeded(category),
      label: label ? prependDevIfNeeded(label) : undefined,
    });
  },

  trackFBEvent: (eventName: "ViewContent", contentName: "spotify") => {
    fbq("track", eventName, { content_name: contentName });
  },
};

export default analytics;
