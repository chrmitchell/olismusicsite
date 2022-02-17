import listenLinksPageStore from "../../Pages/listenLinksPageStore";
import { TPlatform } from "../../types/TPlatform";
import URLs from "../../urls";
import PlatformLogo from "../platform-logos/PlatformLogo";
import YouTubePlayer from "../youtube-player/YouTubePlayer";
import styles from "./PlatformChoiceDialog.module.scss";
import isTouchDevice from "../../utils/isTouchDevice";
import analytics from "../../analytics";

const platforms: TPlatform[] = ["Spotify", "YouTube", "Soundcloud", "Bandcamp"];

const PlatformChoiceDialog = () => {
  const onYouTubeVidPlay = () => {
    analytics.logEvent(
      "inline-play",
      "youtube-inline-play",
      isTouchDevice() ? "with-touch" : "without-touch"
    );
  };

  return (
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

      {/* <SpotifyPlayer /> */}
      <YouTubePlayer onPlay={onYouTubeVidPlay} />
      {/* <SoundcloudPlayer /> */}
    </div>
  );
};

export default PlatformChoiceDialog;
