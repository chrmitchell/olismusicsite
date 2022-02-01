import styles from "./ListenOnSpotifyButton.module.scss";
import RightArrow from "./RightArrow";
import URLs from "../urls";
import trackSpotifyConversion from "../utils/trackSpotifyConversion";
import PlatformLogo from "./platform-logos/PlatformLogo";
import { TPlatform } from "./AlbumInfo";

const ListenOnSpotifyButton = ({
  isNavigatingTo,
  onLinkClick,
}: {
  isNavigatingTo: TPlatform | null;
  onLinkClick: (destination: TPlatform) => void;
}) => {
  return (
    <a
      className={styles.noThanks}
      href={URLs.brightsome.spotifyDistrokid}
      target="_blank"
      rel="noreferrer"
      onClick={() => onLinkClick("Spotify")}
    >
      <div
        className={[
          styles.button,
          !!isNavigatingTo ? styles.isLoading : "",
        ].join(" ")}
      >
        <PlatformLogo platform={"spotify"} />
        <div className={styles.listenWords}>
          {!!isNavigatingTo ? (
            <>Opening {isNavigatingTo}...</>
          ) : (
            <>Listen on Spotify</>
          )}
        </div>
        <RightArrow vNudge={0} />
      </div>
    </a>
  );
};

export default ListenOnSpotifyButton;
