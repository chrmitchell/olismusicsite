import { TPlatform } from "../../../types/TPlatform";
import URLs from "../../../urls";
import PlatformLogo from "../../platform-logos/PlatformLogo";
import styles from "./SocialMediaLink.module.scss";

const SocialMediaLink = ({
  spotifySongLink,
  platform,
  onClick,
}: {
  spotifySongLink: string;
  platform: TPlatform;
  onClick: (platform: TPlatform) => void;
}) => (
  <a
    href={platform === "Spotify" ? spotifySongLink : URLs.olis.social[platform]}
    onClick={() => onClick(platform)}
    className={styles.link}
    title={platform}
  >
    <PlatformLogo platform={platform} />
  </a>
);

export default SocialMediaLink;
