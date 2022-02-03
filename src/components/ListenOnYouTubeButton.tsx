import styles from "./ListenOnSpotifyButton.module.scss";
import RightArrow from "./RightArrow";
import PlatformLogo from "./platform-logos/PlatformLogo";
import { TPlatform } from "../types/TPlatform";
import URLs from "../urls";

const ListenOnYouTubeButton = ({
  isNavigatingTo,
  onLinkClick,
}: {
  isNavigatingTo: TPlatform | null;
  onLinkClick: (destination: TPlatform, typeClicked: "button" | "icon") => void;
}) => (
  <a
    className={styles.noThanks}
    href={URLs.brightsome.youTubePlaylist}
    onClick={() => onLinkClick("YouTube", "button")}
  >
    <div
      className={[
        styles.button,
        isNavigatingTo === "YouTube" ? styles.isLoading : "",
        !!isNavigatingTo && isNavigatingTo !== "YouTube" && styles.isDisabled,
      ].join(" ")}
    >
      <PlatformLogo platform={"YouTube"} />
      <div className={styles.listenWords}>
        {isNavigatingTo === "YouTube" ? (
          <>Opening {isNavigatingTo}...</>
        ) : (
          <>Listen on YouTube</>
        )}
      </div>
      <RightArrow vNudge={0} />
    </div>
  </a>
);

export default ListenOnYouTubeButton;
