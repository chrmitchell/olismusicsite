import logo from "./Images/brightsome-fall-25-FINAL-2k-jpg.jpg";
import "./App.css";
import {
  Routes,
  Route,
  Outlet,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import analytics from "./analytics";
import URLs from "./urls";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/spotify" element={<SpotifyLandingPage />} />
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
        <img src={logo} className="albumCoverLarge" alt="logo" />
      </header>
      <Outlet />
    </div>
  );
};

const SpotifyLandingPage = () => {
  analytics.logPageView();
  return (
    <div style={{ padding: "2rem" }}>
      <a
        style={{ color: "white" }}
        href={URLs.brightsome.spotify}
        target="_blank"
        rel="noreferrer"
      >
        Listen on Spotify
      </a>
    </div>
  );
};

export default App;
