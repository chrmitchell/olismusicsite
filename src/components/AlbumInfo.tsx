import AlbumCover from "./AlbumCover";
import ListenOnSpotifyButton from "./ListenOnSpotifyButton";
import styles from "./AlbumInfo.module.scss";
import SocialMediaLinks from "./SocialMediaLinks";

const AlbumInfo = () => (
  <div>
    <AlbumCover />
    <div className={styles.deets}>
      <div className={styles.title}>Brightsome</div>
      <div className={styles.artist}>by olis</div>
      <SocialMediaLinks />
    </div>

    <ListenOnSpotifyButton />
  </div>
);

export default AlbumInfo;
