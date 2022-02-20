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
  spotifySongLink: string = URLs.songs.radHeroineBallet.spotify;

  listenLinksClicked = 0;

  setSpotifySongLink = (adName: string | null) => {
    this.adName = adName;
    this.spotifySongLink =
      adName && adName.toLowerCase().includes("tiny")
        ? URLs.songs.tinyStreetFeels.spotify
        : URLs.songs.radHeroineBallet.spotify;
  };

  showPlatformChoiceDialog = (from: "cover" | "listen-now-button") => {
    analytics.logEvent("UI", "opened-platforms-menu", `from-${from}`);
    trayStore.showContents(<PlatformChoiceDialog />, this.onDialogClose);
  };

  onDialogClose = () => {
    analytics.logEvent(
      "UI",
      "closed-platforms-menu",
      this.listenLinksClicked > 0 ? "after-listening" : "without-listening",
      this.listenLinksClicked
    );
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

  handleListenLinkClick = (destination: TPlatform) => {
    if (!!this.platformNavigatingTo) return;

    if (destination === "Spotify") {
      const songName = getSongIdFromSpotifyUrl(this.spotifySongLink);
      devLog(this.spotifySongLink, songName);

      analytics.trackFBConversion("ViewContent", destination);
      analytics.trackFBCustomEvent("listened-on-spotify");

      analytics.logEvent(
        "listen-links",
        this.listenLinksClicked === 0
          ? "chose-spotify-first"
          : "chose-spotify-nonfirst",
        songName || `unknown-from-${this.adName}`
      );
    } else {
      analytics.trackFBConversion("ViewContent", destination);
      //@ts-ignore
      analytics.trackFBCustomEvent(`listened-on-${destination.toLowerCase()}`);
      analytics.logEvent(
        "listen-links",
        //@ts-ignore
        `chose-${destination.toLowerCase()}`,
        `chose-${destination.toLowerCase()}-${
          this.listenLinksClicked === 0 ? "first" : "nonfirst"
        }`
      );
    }

    this.listenLinksClicked = this.listenLinksClicked + 1;
    this.setNavigatingTo(destination);
  };
}

const listenLinksPageStore = new ListenLinksPageStore();

export default listenLinksPageStore;
