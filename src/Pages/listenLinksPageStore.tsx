import { TPlatform } from "../types/TPlatform";
import { makeAutoObservable } from "mobx";
import trayStore from "../components/Tray/trayStore";
import PlatformChoiceDialog from "../components/platform-choice-dialog/PlatformChoiceDialog";
import URLs from "../urls";
import getSongIdFromSpotifyUrl from "../utils/getSongIdFromSpotifyURL";
import devLog from "../utils/devLog";
import analytics from "../analytics";

class ListenLinksPageStore {
  constructor() {
    makeAutoObservable(this);
  }

  platformNavigatingTo: TPlatform | null = null;
  adName: string | null = null;
  spotifySongLink: string = URLs.brightsome.radHeroineSpotify;

  setSpotifySongLink = (adName: string | null) => {
    this.adName = adName;
    this.spotifySongLink =
      adName && adName.toLowerCase().includes("tiny")
        ? URLs.brightsome.tinyStreetFeelsSpotify
        : URLs.brightsome.radHeroineSpotify;
  };

  showPlatformChoiceDialog = (from: "cover" | "listen-now-button") => {
    analytics.logEvent("UI", "opened-platforms-menu", `from-${from}`);
    trayStore.showContents(<PlatformChoiceDialog />);
  };

  handleSocialLinkClick = (destination: TPlatform) => {
    if (!!this.platformNavigatingTo) return;
    if (destination === "Facebook")
      analytics.logEvent("social-links", "clicked-facebook-icon");
    else if (destination === "Instagram")
      analytics.logEvent("social-links", "clicked-instagram-icon");

    listenLinksPageStore.platformNavigatingTo = destination;
    this.setNavigatingTo(destination);
  };

  private setNavigatingTo = (destination: TPlatform) => {
    this.platformNavigatingTo = destination;

    setTimeout(() => {
      this.platformNavigatingTo = null;
    }, 2000);
  };

  handleListenLinkClick = (
    destination: TPlatform,
    typeClicked: "button" | "icon" | "cover"
  ) => {
    if (!!this.platformNavigatingTo) return;

    if (destination === "Spotify") {
      const songName = getSongIdFromSpotifyUrl(this.spotifySongLink);
      devLog(this.spotifySongLink, songName);
      analytics.trackFBEvent("ViewContent", "spotify");

      analytics.logEvent(
        "listen-links",
        "chose-spotify",
        songName || `unknown-from-${this.adName}`
      );
    } else {
      // @ts-ignore
      analytics.logEvent("listen-links", `chose-${destination.toLowerCase()}`);
    }

    this.setNavigatingTo(destination);
  };
}

const listenLinksPageStore = new ListenLinksPageStore();

export default listenLinksPageStore;
