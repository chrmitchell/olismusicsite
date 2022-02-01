import analytics from "../analytics";
import URLs from "../urls";
import { TPlatform } from "./AlbumInfo";
import PlatformLogo from "./platform-logos/PlatformLogo";

const SocialMediaLinks = ({
  onLinkClick,
  isNavigatingTo,
}: {
  onLinkClick: (destination: TPlatform) => void;
  isNavigatingTo: TPlatform | null;
}) => {
  return (
    <div
      style={{
        width: "10rem",
        display: "flex",
        margin: ".75rem auto 0",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "opacity .3s",
        opacity: !!isNavigatingTo ? 0.2 : 1,
        pointerEvents: !!isNavigatingTo ? "none" : "auto",
      }}
    >
      <a
        href={URLs.brightsome.spotifyDistrokid}
        onClick={() => onLinkClick("Spotify")}
        style={{ color: "white" }}
      >
        <PlatformLogo platform={"spotify"} />
      </a>

      <analytics.OutboundLink
        eventLabel="clicked-youtube-from-socials"
        to={URLs.brightsome.youTubePlaylist}
        style={{ color: "white" }}
        onClick={() => onLinkClick("YouTube")}
      >
        <PlatformLogo platform={"youtube"} />
      </analytics.OutboundLink>

      <analytics.OutboundLink
        eventLabel="clicked-instagram-from-socials"
        to={URLs.olis.social.instagram}
        style={{ color: "white" }}
        onClick={() => onLinkClick("Instagram")}
      >
        <PlatformLogo platform={"instagram"} />
      </analytics.OutboundLink>
    </div>
  );
};

export default SocialMediaLinks;
