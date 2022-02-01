import brightsomeCover from "../Images/brightsome-final-1200w-good.jpg";
import styles from "./AlbumCover.module.scss";

const AlbumCover = () => (
  <img
    src={brightsomeCover}
    className={styles.albumCover}
    alt="Brightsome album cover"
  />
);

export default AlbumCover;
