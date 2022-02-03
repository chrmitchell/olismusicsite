import classNames from "classnames";
import { TPlatform } from "../../types/TPlatform";
import SocialMediaLink from "./SocialMediaLink/SocialMediaLink";
import styles from "./SocialMediaLinks.module.scss";

const platforms: TPlatform[] = ["Spotify", "Instagram", "YouTube", "Facebook"];

const SocialMediaLinks = ({
  onLinkClick,
  isNavigatingTo,
  songLink,
}: {
  onLinkClick: (
    destination: TPlatform,
    typeClicked: "button" | "icon" | "cover"
  ) => void;
  isNavigatingTo: TPlatform | null;
  songLink: string;
}) => (
  <div
    className={classNames(styles.links, !!isNavigatingTo && styles.isDisabled)}
  >
    {platforms.map((platform) => (
      <SocialMediaLink
        key={platform}
        platform={platform}
        spotifySongLink={songLink}
        onClick={onLinkClick}
      />
    ))}
  </div>
);

export default SocialMediaLinks;
