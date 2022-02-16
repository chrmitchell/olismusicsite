import { makeAutoObservable } from "mobx";

class TrayStore {
  isOpen = false;
  currentContents: React.ReactElement | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  private onClose: (() => void) | null = null;

  showContents = (contents: React.ReactElement, onClose: () => void) => {
    this.currentContents = contents;
    this.onClose = onClose ?? null;
    this.isOpen = true;
  };

  close = () => {
    this.onClose?.();
    this.isOpen = false;
    this.currentContents = null;
  };
}

const trayStore = new TrayStore();

export default trayStore;
