import AlbumCover from "./AlbumCover";
import ListenOnSpotifyButton from "./ListenOnSpotifyButton";
import styles from "./AlbumInfo.module.scss";
import SocialMediaLinks from "./SocialMediaLinks";
import { useEffect, useState } from "react";
import trackSpotifyConversion from "../utils/trackSpotifyConversion";
import analytics from "../analytics";
import URLs from "../urls";
import useQueryParams from "../utils/hooks/useQueryParams";

export type TPlatform = "Spotify" | "YouTube" | "Instagram";

const AlbumInfo = () => {
  const [isNavigatingTo, setIsNavigatingTo] = useState<TPlatform | null>(null);
  const [songLink, setSongLink] = useState<string>(
    URLs.brightsome.radHeroineSpotify
  );

  let params = useQueryParams().object;
  const adName: string | undefined = params["utm_content"];

  useEffect(() => {
    setSongLink(
      adName && adName.includes("tiny")
        ? URLs.brightsome.tinyStreetFeelsSpotify
        : URLs.brightsome.radHeroineSpotify
    );
  }, [adName]);

  const handleLinkClick = (destination: TPlatform) => {
    if (!!isNavigatingTo) return;

    if (destination === "Spotify") {
      trackSpotifyConversion();
    }

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
      <AlbumCover onClick={handleLinkClick} songLink={songLink} />
      <div className={styles.deets}>
        <div className={styles.title}>Brightsome</div>
        <div className={styles.artist}>by olis</div>
        <SocialMediaLinks
          onLinkClick={handleLinkClick}
          isNavigatingTo={isNavigatingTo}
          songLink={songLink}
        />
      </div>

      <ListenOnSpotifyButton
        isNavigatingTo={isNavigatingTo}
        onLinkClick={handleLinkClick}
        songLink={songLink}
      />
    </div>
  );
};

export default AlbumInfo;
