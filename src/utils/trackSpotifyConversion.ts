const trackSpotifyConversion = () => {
  fbq("track", "ViewContent", { content_name: "spotify" });
};

export default trackSpotifyConversion;
