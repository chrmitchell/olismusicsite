import listenLinksPageStore from "../../../Pages/listenLinksPageStore";
import { TPlatform } from "../../../types/TPlatform";
import URLs from "../../../urls";
import PlatformLogo from "../../platform-logos/PlatformLogo";
import styles from "./SocialMediaLink.module.scss";

const SocialMediaLink = ({
  platform,
  onClick,
}: {
  platform: TPlatform;
  onClick: (platform: TPlatform, typeClicked: "button" | "icon") => void;
}) => (
  <a
    href={
      platform === "Spotify"
        ? listenLinksPageStore.spotifySongLink
        : URLs.olis.social[platform]
    }
    target="_blank"
    rel="noreferrer"
    onClick={() => onClick(platform, "icon")}
    className={styles.link}
    title={platform}
  >
    <PlatformLogo platform={platform} />
  </a>
);

export default SocialMediaLink;
