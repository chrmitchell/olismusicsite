import brightsomeCover from "../Images/brightsome-final-1200w-good.jpg";
import URLs from "../urls";
import styles from "./AlbumCover.module.scss";
import { TPlatform } from "./AlbumInfo";

const AlbumCover = ({
  onClick,
  songLink,
}: {
  onClick: (destination: TPlatform) => void;
  songLink: string | null;
}) => (
  <a href={songLink || ""} onClick={() => onClick("Spotify")}>
    <img
      src={brightsomeCover}
      className={styles.albumCover}
      alt="Brightsome album cover"
    />
  </a>
);

export default AlbumCover;
