import logo from "./Images/brightsome-fall-25-FINAL-2k-jpg.jpg";
import "./App.css";
import { HashRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import analytics from "./analytics";

console.log("hashin");

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/spotify" element={<SpotifyLandingPage />} />
      <Route path="*" element={<UnmatchedRoute />} />
    </Routes>
  </HashRouter>
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
  return <p>spotify stuff goes here</p>;
};

export default App;
