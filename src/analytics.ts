import { useEffect } from "react";
import ReactGA, { OutboundLink } from "react-ga";

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
    ReactGA.pageview(url);
  }, []);
};

const analytics = {
  init: () => {
    if (isInitialized === false) {
      const trackingId = process.env.REACT_APP_ANALYTICS_TRACKING_ID;
      if (!trackingId) {
        console.error(`Analytics id unavailable`, trackingId);
      } else {
        ReactGA.initialize(trackingId, config);
        console.log("analytics intialized");
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
    console.log(`Analytics: Logging event ${eventName}.`, options);
    ReactGA.event({
      action: `${
        process.env.NODE_ENV === "development" ? "dev-" : ""
      }${eventName}`,
      category: options.category,
      label: options.label,
    });
  },
};

export default analytics;
