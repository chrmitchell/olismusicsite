import brightsomeCover from "../Images/brightsome-final-1200w-good.jpg";
import { TPlatform } from "../types/TPlatform";
import styles from "./AlbumCover.module.scss";

const AlbumCover = ({
  onClick,
  songLink,
}: {
  onClick: (
    destination: TPlatform,
    typeClicked: "button" | "icon" | "cover"
  ) => void;
  songLink: string | null;
}) => (
  // <a href={songLink || ""} onClick={() => onClick("Spotify", "cover")}>
  <img
    src={brightsomeCover}
    className={styles.albumCover}
    alt="Brightsome album cover"
  />
  // </a>
);

export default AlbumCover;
