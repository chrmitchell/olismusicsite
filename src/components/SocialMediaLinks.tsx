import classNames from "classnames";
import { TPlatform } from "../types/TPlatform";
import URLs from "../urls";
import PlatformLogo from "./platform-logos/PlatformLogo";
import styles from "./SocialMediaLinks.module.scss";

const SocialMediaLinks = ({
  onLinkClick,
  isNavigatingTo,
  songLink,
}: {
  onLinkClick: (destination: TPlatform) => void;
  isNavigatingTo: TPlatform | null;
  songLink: string;
}) => (
  <div
    className={classNames(styles.links, !!isNavigatingTo && styles.isDisabled)}
  >
    <a
      href={songLink}
      onClick={() => onLinkClick("Spotify")}
      className={styles.link}
      title="Spotify"
    >
      <PlatformLogo platform="Spotify" />
    </a>

    <a
      href={URLs.olis.social.instagram}
      onClick={() => onLinkClick("Instagram")}
      className={styles.link}
      title="Instagram"
    >
      <PlatformLogo platform={"Instagram"} />
    </a>

    <a
      href={URLs.brightsome.youTubePlaylist}
      onClick={() => onLinkClick("YouTube")}
      className={styles.link}
      title="YouTube"
    >
      <PlatformLogo platform={"YouTube"} />
    </a>
    <a
      href={URLs.olis.social.facebook}
      onClick={() => onLinkClick("Facebook")}
      className={styles.link}
      title="Facebook"
    >
      <PlatformLogo platform="Facebook" />
    </a>
  </div>
);

export default SocialMediaLinks;
