import AlbumCover from "./AlbumCover";
import styles from "./AlbumInfo.module.scss";
import SocialMediaLinks from "./SocialMediaLinks/SocialMediaLinks";
import { useEffect } from "react";
import URLs from "../urls";
import useQueryParams from "../utils/hooks/useQueryParams";
import ListenNowButton from "./ListenNowButton";
import listenLinksPageStore from "../Pages/listenLinksPageStore";
import { observer } from "mobx-react";

const AlbumInfo = observer(() => {
  const isNavigatingTo = listenLinksPageStore.platformNavigatingTo;
  const songLink = listenLinksPageStore.spotifySongLink;

  let params = useQueryParams().object;
  const adName: string | null = params["utm_content"];

  useEffect(() => {
    listenLinksPageStore.spotifySongLink =
      adName && adName.toLowerCase().includes("tiny")
        ? URLs.brightsome.tinyStreetFeelsSpotify
        : URLs.brightsome.radHeroineSpotify;
    listenLinksPageStore.adName = adName;
  }, [adName]);

  return (
    <div>
      <AlbumCover
        onClick={listenLinksPageStore.showPlatformChoiceDialog}
        songLink={songLink}
      />
      <div className={styles.deets}>
        <div className={styles.title}>Brightsome</div>
        <div className={styles.artist}>The new full-length album by Olis</div>

        <ListenNowButton
          onClick={listenLinksPageStore.showPlatformChoiceDialog}
        />
        {/* <ListenOnSpotifyButton
          isNavigatingTo={isNavigatingTo}
          onLinkClick={handleLinkClick}
          songLink={songLink}
        />

        <ListenOnYouTubeButton
          isNavigatingTo={isNavigatingTo}
          onLinkClick={handleLinkClick}
        /> */}
      </div>

      <SocialMediaLinks />
    </div>
  );
});

export default AlbumInfo;
