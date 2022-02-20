import analytics from "../analytics";

const translation = {
  detectLanguage: () => {
    const preferredLanguages = navigator.languages;
    console.log(preferredLanguages);
    if (!preferredLanguages) {
      analytics.logEvent(
        "internationalization",
        "language-detection-fail",
        "no prefs"
      );
    }

    analytics.logEvent(
      "internationalization",
      "language-detection-success",
      preferredLanguages.join(", ")
    );
  },
};

export default translation;
