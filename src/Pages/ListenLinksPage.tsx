import AlbumInfo from "../components/AlbumInfo";
import { Outlet } from "react-router-dom";
import analytics from "../analytics";

const HomePage = () => {
  analytics.logPageView();

  return (
    <div className="App">
      <header className="App-header">
        <AlbumInfo />
      </header>
      <Outlet />
    </div>
  );
};

export default HomePage;
