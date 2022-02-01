import AlbumCover from "./AlbumCover";
import ListenOnSpotifyButton from "./ListenOnSpotifyButton";
import styles from "./AlbumInfo.module.scss";
import SocialMediaLinks from "./SocialMediaLinks";
import { useState } from "react";
import trackSpotifyConversion from "../utils/trackSpotifyConversion";
import analytics from "../analytics";

export type TPlatform = "Spotify" | "YouTube" | "Instagram";

const AlbumInfo = () => {
  const [isNavigatingTo, setIsNavigatingTo] = useState<TPlatform | null>(null);

  const handleLinkClick = (destination: TPlatform) => {
    if (!!isNavigatingTo) return;

    if (destination === "Spotify") trackSpotifyConversion();
    analytics.logEvent(`clicked-${destination.toLowerCase()}`, {
      category: "clicked",
      label: destination.toLowerCase(),
    });
    setIsNavigatingTo(destination);
    setTimeout(() => {
      setIsNavigatingTo(null);
    }, 3000);
  };

  return (
    <div>
      <AlbumCover />
      <div className={styles.deets}>
        <div className={styles.title}>Brightsome</div>
        <div className={styles.artist}>by olis</div>
        <SocialMediaLinks
          onLinkClick={handleLinkClick}
          isNavigatingTo={isNavigatingTo}
        />
      </div>

      <ListenOnSpotifyButton
        isNavigatingTo={isNavigatingTo}
        onLinkClick={handleLinkClick}
      />
    </div>
  );
};

export default AlbumInfo;
