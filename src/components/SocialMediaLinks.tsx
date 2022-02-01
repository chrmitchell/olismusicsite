import analytics from "../analytics";
import URLs from "../urls";
import SpotifyLogo from "./platform-logos/SpotifyLogo";

const SocialMediaLinks = () => {
  const trackSpotifyClick = () => {
    fbq("track", "ViewContent", { content_name: "spotify" });
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <analytics.OutboundLink
        onClick={trackSpotifyClick}
        eventLabel="clicked-spotify-from-socials"
        to={URLs.brightsome.spotify}
        style={{ color: "white" }}
      >
        {/* <a
        onClick={async (e) => {
          e.preventDefault();
          await trackSpotifyClick();
          console.log("to goo");
        }}
        href="http://google.com"
      > */}
        <SpotifyLogo />
        {/* </a> */}
      </analytics.OutboundLink>
    </div>
  );
};
export default SocialMediaLinks;
