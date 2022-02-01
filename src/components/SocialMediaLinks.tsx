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
        maxWidth: "18rem",
        width: "100%",
        display: "flex",
        margin: ".75rem auto 0",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "opacity .3s",
        opacity: !!isNavigatingTo ? 0.2 : 1,
        pointerEvents: !!isNavigatingTo ? "none" : "auto",
      }}
    >
      <a onClick={() => onLinkClick("Spotify")} style={{ color: "white" }}>
        <PlatformLogo platform={"spotify"} />
      </a>

      <a
        onClick={() => {
          window.open(URLs.brightsome.spotifyDistrokid, "_blank");
        }}
      >
        #2
      </a>

      <div
        onClick={() => {
          window.open(URLs.brightsome.spotifyDistrokid, "_blank");
        }}
      >
        #3
      </div>

      <a href={URLs.brightsome.spotifyDistrokid}>#4</a>

      <a href={URLs.brightsome.spotifyDistrokid} target={"_parent"}>
        #5
      </a>

      <a href={URLs.brightsome.spotifyDistrokid} target={"_blank"}>
        #6
      </a>

      <a href={URLs.brightsome.spotifyURI} target={"_blank"}>
        #7
      </a>

      <a href={URLs.brightsome.spotifyURI}>#8</a>

      <a href={URLs.brightsome.radHeroineSpotify}>#9</a>

      <a href={URLs.brightsome.spotify}>#10</a>
      {/*       
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
      </a> */}
    </div>
  );
};

export default SocialMediaLinks;
