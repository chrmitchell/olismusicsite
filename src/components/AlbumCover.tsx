import classNames from "classnames";
import brightsomeCover from "../Images/brightsome-final-1200w-good.jpg";
import styles from "./AlbumCover.module.scss";

const AlbumCover = ({
  onClick,
  songLink,
}: {
  onClick?: () => void;
  songLink: string | null;
}) => (
  <img
    onClick={onClick}
    src={brightsomeCover}
    className={classNames(styles.albumCover, !!onClick && styles.clickable)}
    alt="Brightsome album cover"
  />
);

export default AlbumCover;
