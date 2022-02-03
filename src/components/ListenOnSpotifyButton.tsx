import styles from "./ListenOnSpotifyButton.module.scss";
import RightArrow from "./RightArrow";
import PlatformLogo from "./platform-logos/PlatformLogo";
import { TPlatform } from "../types/TPlatform";

const ListenOnSpotifyButton = ({
  isNavigatingTo,
  onLinkClick,
  songLink,
}: {
  isNavigatingTo: TPlatform | null;
  onLinkClick: (destination: TPlatform, typeClicked: "button" | "icon") => void;
  songLink: string;
}) => (
  <a
    className={styles.noThanks}
    href={songLink}
    onClick={() => onLinkClick("Spotify", "button")}
  >
    <div
      className={[
        styles.button,
        !!isNavigatingTo ? styles.isLoading : "",
        !!isNavigatingTo && isNavigatingTo !== "Spotify" && styles.isDisabled,
      ].join(" ")}
    >
      <PlatformLogo platform={"Spotify"} />
      <div className={styles.listenWords}>
        {isNavigatingTo === "Spotify" ? (
          <>Opening {isNavigatingTo}...</>
        ) : (
          <>Listen on Spotify</>
        )}
      </div>
      <RightArrow vNudge={0} />
    </div>
  </a>
);

export default ListenOnSpotifyButton;
