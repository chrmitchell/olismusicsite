import { TPlatform } from "../types/TPlatform";
import { makeAutoObservable } from "mobx";
import trayStore from "../components/Tray/trayStore";
import PlatformChoiceDialog from "../components/platform-choice-dialog/PlatformChoiceDialog";
import URLs from "../urls";
import getSongNameFromSpotifyUrl from "../utils/getSongNameFromSpotifyURL";
import devLog from "../utils/devLog";
import analytics from "../analytics";

class ListenLinksPageStore {
  constructor() {
    makeAutoObservable(this);
  }

  platformNavigatingTo: TPlatform | null = null;
  adName: string | null = null;
  spotifySongLink: string = URLs.brightsome.radHeroineSpotify;

  showPlatformChoiceDialog = (from: "cover" | "listen-now-button") => {
    analytics.logEvent("opened-choice-tray", {
      category: "opened-choice-tray",
      label: `from-${from}`,
    });
    trayStore.showContents(<PlatformChoiceDialog />);
  };

  handleListenLinkClick = (
    destination: TPlatform,
    typeClicked: "button" | "icon" | "cover"
  ) => {
    if (!!this.platformNavigatingTo) return;

    if (destination === "Spotify") {
      const songName = getSongNameFromSpotifyUrl(this.spotifySongLink);
      devLog(this.spotifySongLink, songName);

      analytics.trackFBEvent("ViewContent", "spotify");

      analytics.logEvent(`spotify-listen`, {
        category: songName || `unknown-from-${this.adName}`,
        label: songName || `unknown-from-${this.adName}`,
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

    listenLinksPageStore.platformNavigatingTo = destination;

    setTimeout(() => {
      listenLinksPageStore.platformNavigatingTo = null;
    }, 2000);
  };
}

const listenLinksPageStore = new ListenLinksPageStore();

export default listenLinksPageStore;
