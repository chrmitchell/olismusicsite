import AlbumCover from "./AlbumCover";
import ListenOnSpotifyButton from "./ListenOnSpotifyButton";
import styles from "./AlbumInfo.module.scss";
import SocialMediaLinks from "./SocialMediaLinks/SocialMediaLinks";
import { useEffect, useState } from "react";
import trackSpotifyConversion from "../utils/trackSpotifyConversion";
import analytics from "../analytics";
import URLs from "../urls";
import useQueryParams from "../utils/hooks/useQueryParams";
import { TPlatform } from "../types/TPlatform";
import getSongNameFromSpotifyUrl from "../utils/getSongNameFromSpotifyURL";
import ListenOnYouTubeButton from "./ListenOnYouTubeButton";
import devLog from "../utils/devLog";

const AlbumInfo = () => {
  const [isNavigatingTo, setIsNavigatingTo] = useState<TPlatform | null>(null);
  const [songLink, setSongLink] = useState<string>(
    URLs.brightsome.radHeroineSpotify
  );

  let params = useQueryParams().object;
  const adName: string | undefined = params["utm_content"];

  useEffect(() => {
    setSongLink(
      adName && adName.toLowerCase().includes("tiny")
        ? URLs.brightsome.tinyStreetFeelsSpotify
        : URLs.brightsome.radHeroineSpotify
    );
  }, [adName]);

  const handleLinkClick = (
    destination: TPlatform,
    typeClicked: "button" | "icon" | "cover"
  ) => {
    if (!!isNavigatingTo) return;

    if (destination === "Spotify") {
      const songName = getSongNameFromSpotifyUrl(songLink);
      devLog(songLink, songName);

      trackSpotifyConversion();

      analytics.logEvent(`spotify-listen`, {
        category: songName || `unknown-from-${adName}`,
        label: songName || `unknown-from-${adName}`,
      });

      analytics.logEvent(
        `clicked-${destination.toLowerCase()}-${typeClicked}`,
        {
          category: "clicked",
          label: destination.toLowerCase(),
        }
      );
    } else {
      analytics.logEvent(
        `clicked-${destination.toLowerCase()}-${typeClicked}`,
        {
          category: "clicked",
          label: destination.toLowerCase(),
        }
      );
    }

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

      <ListenOnYouTubeButton
        isNavigatingTo={isNavigatingTo}
        onLinkClick={handleLinkClick}
      />
    </div>
  );
};

export default AlbumInfo;
