import analytics from "../analytics";

const trackSpotifyConversion = () => {
  fbq("track", "ViewContent", { content_name: "spotify" });
};

export default trackSpotifyConversion;
