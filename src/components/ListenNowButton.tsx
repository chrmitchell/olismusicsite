import styles from "./ListenNowButton.module.scss";
import RightArrow from "./RightArrow";
import listenLinksPageStore from "../Pages/listenLinksPageStore";
import { observer } from "mobx-react";

const ListenNowButton = observer(({ onClick }: { onClick: () => void }) => {
  const navTo = listenLinksPageStore.platformNavigatingTo;

  return (
    <div
      className={[
        styles.button,
        !!navTo ? styles.isLoading : "",
        !!navTo && navTo !== "Spotify" && styles.isDisabled,
      ].join(" ")}
      onClick={onClick}
    >
      <div />
      <div className={styles.listenWords}>
        {!!navTo ? <>Opening {navTo}...</> : <>Listen now</>}
      </div>
      <RightArrow vNudge={0} />
    </div>
  );
});

export default ListenNowButton;
