import listenLinksPageStore from "../../Pages/listenLinksPageStore";
import { TPlatform } from "../../types/TPlatform";
import URLs from "../../urls";
import PlatformLogo from "../platform-logos/PlatformLogo";
import SoundcloudPlayer from "../soundcloud-player/SoundcloudPlayer";
import styles from "./PlatformChoiceDialog.module.scss";

const platforms: TPlatform[] = ["Spotify", "YouTube", "Soundcloud", "Bandcamp"];

const PlatformChoiceDialog = () => (
  <div className={styles.container}>
    <p className={styles.question}>Where would you like to listen?</p>

    <div className={styles.choices}>
      {platforms.map((platform) => (
        <a
          className={styles.choice}
          key={platform}
          target="_blank"
          rel="noreferrer"
          onClick={() => listenLinksPageStore.handleListenLinkClick(platform)}
          href={
            platform === "Spotify"
              ? listenLinksPageStore.spotifySongLink
              : URLs.olis.social[platform]
          }
        >
          <PlatformLogo platform={platform} />
          {platform}
        </a>
      ))}
    </div>
    <SoundcloudPlayer />
  </div>
);

export default PlatformChoiceDialog;
