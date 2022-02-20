import AlbumInfo from "../components/AlbumInfo";
import { Outlet } from "react-router-dom";
import analytics from "../analytics";
import styles from "./ListenLinksPage.module.scss";
import SocialMediaLinks from "../components/SocialMediaLinks/SocialMediaLinks";
import { useEffect } from "react";
import internationalization from "../utils/internationalization";

const HomePage = () => {
  analytics.logPageView();

  useEffect(() => {
    internationalization.detectLanguage();
  }, []);

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
