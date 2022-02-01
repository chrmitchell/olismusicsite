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
        target="_blank"
        rel="noreferrer"
      >
        <PlatformLogo platform={"spotify"} />
      </a>

      <a
        href={URLs.brightsome.youTubePlaylist}
        onClick={() => onLinkClick("YouTube")}
        style={{ color: "white" }}
      >
        <PlatformLogo platform={"youtube"} />
      </a>

      <a
        href={URLs.olis.social.instagram}
        onClick={() => onLinkClick("Instagram")}
        style={{ color: "white" }}
      >
        <PlatformLogo platform={"instagram"} />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
