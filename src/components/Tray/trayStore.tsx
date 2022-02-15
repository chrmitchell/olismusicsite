import { makeAutoObservable } from "mobx";

class TrayStore {
  isOpen = false;
  currentContents: React.ReactElement | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  showContents = (contents: React.ReactElement) => {
    this.currentContents = contents;
    this.isOpen = true;
  };

  close = () => {
    this.isOpen = false;
    this.currentContents = null;
  };
}

const trayStore = new TrayStore();

export default trayStore;
