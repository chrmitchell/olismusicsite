import analytics from "../analytics";
import URLs from "../urls";
import PlatformLogo from "./platform-logos/PlatformLogo";

const SocialMediaLinks = () => {
  const trackConversion = () => {
    fbq("track", "ViewContent", { content_name: "spotify" });
  };

  return (
    <div
      style={{
        width: "10rem",
        display: "flex",
        margin: ".75rem auto 0",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <analytics.OutboundLink
        onClick={trackConversion}
        eventLabel="clicked-spotify-from-socials"
        to={URLs.brightsome.spotify}
        style={{ color: "white" }}
      >
        <PlatformLogo platform={"spotify"} />
      </analytics.OutboundLink>

      <analytics.OutboundLink
        eventLabel="clicked-youtube-from-socials"
        to={URLs.brightsome.youTubePlaylist}
        style={{ color: "white" }}
      >
        <PlatformLogo platform={"youtube"} />
      </analytics.OutboundLink>

      <analytics.OutboundLink
        eventLabel="clicked-instagram-from-socials"
        to={URLs.olis.social.instagram}
        style={{ color: "white" }}
      >
        <PlatformLogo platform={"instagram"} />
      </analytics.OutboundLink>
    </div>
  );
};

export default SocialMediaLinks;
