import analytics from "../analytics";
import styles from "./NoojPage.module.scss";

const NoojPage = () => {
  analytics.logPageView();

  return <div className={styles.noojePage} />;
};

export default NoojPage;
