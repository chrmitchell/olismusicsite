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
    eventName: string,
    options: { category: string; label: string }
  ) => {
    devLog(`Analytics: Logging event ${eventName}.`, options);

    ReactGA.event({
      action: prependDevIfNeeded(eventName),
      category: prependDevIfNeeded(options.category),
      label: prependDevIfNeeded(options.label),
    });
  },
};

export default analytics;
