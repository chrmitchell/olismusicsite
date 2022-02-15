import classNames from "classnames";
import { observer } from "mobx-react";
import analytics from "../../analytics";
import styles from "./Tray.module.scss";
import trayStore from "./trayStore";

const Tray = observer(() => (
  <div className={styles.wrapper}>
    <div className={classNames(styles.tray, trayStore.isOpen && styles.isOpen)}>
      <div
        className={styles.closeButton}
        onClick={() => {
          trayStore.close();
          analytics.logEvent("closed-choice-tray", {
            category: "closed-choice-tray",
            label: "closed-choice-tray",
          });
        }}
      >
        &#10005;
      </div>
      {trayStore.currentContents}
    </div>
  </div>
));

export default Tray;
