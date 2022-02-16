import AlbumInfo from "../components/AlbumInfo";
import { Outlet } from "react-router-dom";
import analytics from "../analytics";
import styles from "./ListenLinksPage.module.scss";
import SocialMediaLinks from "../components/SocialMediaLinks/SocialMediaLinks";

const HomePage = () => {
  analytics.logPageView();

  return (
    <div className={styles.page}>
      <header className={styles.container}>
        <AlbumInfo />
        <SocialMediaLinks />
      </header>
      <Outlet />
    </div>
  );
};

export default HomePage;
