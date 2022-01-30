import "./App.css";
import {
  Routes,
  Route,
  Outlet,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import analytics from "./analytics";
import AlbumCover from "./components/AlbumCover";
import ListenLinks from "./components/ListenLinks";
import ListenOnSpotifyButton from "./components/ListenOnSpotifyButton";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<UnmatchedRoute />} />
    </Routes>
  </BrowserRouter>
);

const UnmatchedRoute = () => {
  analytics.logEvent("Redirect from unmatched route", {
    category: "Unmatched Route",
    label: window.location.pathname,
  });

  return <Navigate to="/" />;
};

const Home = () => {
  analytics.logPageView();

  return (
    <div className="App">
      <header className="App-header">
        <AlbumCover />
        <ListenOnSpotifyButton />
      </header>
      <Outlet />
    </div>
  );
};

export default App;
