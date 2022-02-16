import { useRef, useState } from "react";
import analytics from "../../analytics";
import { TSongId } from "../../types/TSong";
import devLog from "../../utils/devLog";
import isTouchDevice from "../../utils/isTouchDevice";
import styles from "./YouTubePlayer.module.scss";

const YouTubePlayer = ({ onClick }: { onClick: () => void }) => {
  const [hasPlayed, setHasPlayed] = useState(false);
  const countingRef = useRef<number | null>(null);

  const onMouseEnter = () => {
    devLog("start");
    countingRef.current = setTimeout(() => {
      devLog("boom", countingRef.current);
      if (countingRef.current) onPlay();
    }, 2000) as unknown as number;
  };

  const onMouseExit = () => {
    devLog("stop");
    if (countingRef.current) {
      clearTimeout(countingRef.current);
      countingRef.current = null;
    }
  };

  const onPlay = () => {
    if (!hasPlayed) {
      devLog("played");
      setHasPlayed(true);
      analytics.logEvent(
        "inline-play",
        "youtube-inline-play",
        isTouchDevice() ? "with-touch" : "without-touch"
      );
    }
  };

  return (
    <div
      onMouseEnter={isTouchDevice() ? onPlay : onMouseEnter}
      onMouseLeave={isTouchDevice() ? undefined : onMouseExit}
    >
      <iframe
        style={{ width: "100%" }}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/videoseries?list=PLN3CphWGoGqG9F6Ork2DTLTMHCvtyjtsd"
        // src="https://www.youtube.com/embed/Fl_1fCurgKM"
        title="Brightsome by Olis - YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubePlayer;
