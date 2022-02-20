import AlbumCover from "./AlbumCover";
import styles from "./AlbumInfo.module.scss";
import { useEffect } from "react";
import useQueryParams from "../utils/hooks/useQueryParams";
import ListenNowButton from "./ListenNowButton";
import listenLinksPageStore from "../Pages/listenLinksPageStore";
import { observer } from "mobx-react";

const AlbumInfo = observer(() => {
  const songLink = listenLinksPageStore.spotifySongLink;

  let params = useQueryParams().object;
  const adName: string | null = params["utm_content"];
  const campaignName: string | null = params["utm_campaign"];
  const adSetName: string | null = params["utm_source"];
  const placement: string | null = params["utm_medium"];

  useEffect(() => {
    listenLinksPageStore.setSpotifySongLink(adName);
  }, [adName]);

  return (
    <div>
      <AlbumCover
        onClick={() => listenLinksPageStore.showPlatformChoiceDialog("cover")}
        songLink={songLink}
      />
      <div className={styles.deets}>
        <div className={styles.title}>Brightsome</div>
        <div className={styles.artist}>The new full-length album by Olis</div>
      </div>

      <ListenNowButton
        onClick={() =>
          listenLinksPageStore.showPlatformChoiceDialog("listen-now-button")
        }
      />
    </div>
  );
});

export default AlbumInfo;
