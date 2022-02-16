import classNames from "classnames";
import { observer } from "mobx-react";
import listenLinksPageStore from "../../Pages/listenLinksPageStore";
import { TPlatform } from "../../types/TPlatform";
import SocialMediaLink from "./SocialMediaLink/SocialMediaLink";
import styles from "./SocialMediaLinks.module.scss";

const socialPlatforms: TPlatform[] = ["Instagram", "Facebook"];

const SocialMediaLinks = observer(() => (
  <div
    className={classNames(
      styles.links,
      !!listenLinksPageStore.platformNavigatingTo && styles.isDisabled
    )}
  >
    {socialPlatforms.map((platform) => (
      <SocialMediaLink
        key={platform}
        platform={platform}
        onClick={() => listenLinksPageStore.handleSocialLinkClick(platform)}
      />
    ))}
  </div>
));

export default SocialMediaLinks;
