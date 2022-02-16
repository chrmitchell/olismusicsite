import AlbumInfo from "../components/AlbumInfo";
import { Outlet } from "react-router-dom";
import analytics from "../analytics";
import styles from "./ListenLinksPage.module.scss";

const HomePage = () => {
  analytics.logPageView();

  return (
    <div className={styles.page}>
      <header className={styles.container}>
        <AlbumInfo />
      </header>
      <Outlet />
    </div>
  );
};

export default HomePage;
