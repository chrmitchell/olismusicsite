import { TPlatform } from "../types/TPlatform";
import URLs from "../urls";
import PlatformLogo from "./platform-logos/PlatformLogo";
import styles from "./SocialMediaLinks.module.scss";

const SocialMediaLinks = ({
  onLinkClick,
  isNavigatingTo,
}: {
  onLinkClick: (destination: TPlatform) => void;
  isNavigatingTo: TPlatform | null;
}) => {
  return (
    <div className={styles.links}>
      <a onClick={() => onLinkClick("Spotify")} style={{ color: "white" }}>
        {/* <PlatformLogo platform={"spotify"} /> */}
        #1
      </a>
      {/* <a
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
      </a> */}
      {/* <a href={URLs.brightsome.spotifyDistrokid} target={"_blank"}>
        #6
      </a> */}
      {/* works */}
      {/* <a href={URLs.brightsome.spotifyURI} target={"_blank"}> */}
      #7
      {/* </a> */}
      {/* works */}
      {/* <a href={URLs.brightsome.spotifyURI}>#8</a> */}
      {/* works AND PLAYS */}
      <a href={URLs.brightsome.radHeroineSpotify}>#9</a>
      {/* works */}
      {/* <a href={URLs.brightsome.spotify}>#10</a> */}
      {/* works */}
      {/* <a href={URLs.brightsome.spotify} target="_blank"> */}
      {/* #11 */}
      {/* </a> */}
      {/* more */}
      {/* // <a href={URLs.brightsome.radHeroineSpotify}>#12</a> */}
      {/* // <a href={URLs.brightsome.radHeroineSpotify} target="_blank"> */}
      {/* //   #13 */}
      {/* // </a> */}
      {/* // <a href={URLs.brightsome.radHeroineSpotify} target="_parent"> */}
      {/* //   #14 */}
      {/* // </a> */}
      {/* // <a href={URLs.brightsome.radHeroineSpotify} target="_self"> */}
      {/* //   #15 */}
      {/* // </a> */}
      {/* // <a href={URLs.brightsome.radHeroineSpotify} target="_top"> */}
      {/* //   #16 */}
      {/* // </a> */}
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
