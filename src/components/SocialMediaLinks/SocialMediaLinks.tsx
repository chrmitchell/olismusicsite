import classNames from "classnames";
import listenLinksPageStore from "../../Pages/listenLinksPageStore";
import { TPlatform } from "../../types/TPlatform";
import SocialMediaLink from "./SocialMediaLink/SocialMediaLink";
import styles from "./SocialMediaLinks.module.scss";

const platforms: TPlatform[] = [
  // "Spotify",
  "Instagram",
  // "YouTube",
  "Facebook",
];

const SocialMediaLinks = () => (
  <div
    className={classNames(
      styles.links,
      !!listenLinksPageStore.platformNavigatingTo && styles.isDisabled
    )}
  >
    {platforms.map((platform) => (
      <SocialMediaLink
        key={platform}
        platform={platform}
        onClick={() =>
          listenLinksPageStore.handleListenLinkClick(platform, "icon")
        }
      />
    ))}
  </div>
);

export default SocialMediaLinks;
