import styles from "./SoundcloudPlayer.module.scss";

const SoundcloudPlayer = () => (
  <div>
    <iframe
      width="100%"
      height="300"
      scrolling="no"
      title="Brightsome"
      frameBorder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1361185684&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    ></iframe>
    <div className={styles.area}>
      <a
        href="https://soundcloud.com/olismusic"
        title="Olis"
        target="_blank"
        rel="noreferrer"
        style={{ color: "#cccccc", textDecoration: "none" }}
      >
        Olis
      </a>{" "}
      ·{" "}
      <a
        href="https://soundcloud.com/olismusic/sets/brightsome-1"
        title="Brightsome"
        target="_blank"
        rel="noreferrer"
        style={{ color: "#cccccc", textDecoration: "none" }}
      >
        Brightsome
      </a>
    </div>
  </div>
);

export default SoundcloudPlayer;
