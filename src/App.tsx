import logo from "./images/brightsome-fall-25-FINAL-2k-jpg.jpg";
import "./App.css";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/spotify" element={<SpotifyLandingPage />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>
              There's nothing here! <Link to="/">Go Home</Link>
            </p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);

const Home = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="albumCoverLarge" alt="logo" />
    </header>
    <Outlet />
  </div>
);

const SpotifyLandingPage = () => <p>spotify stuff goes here</p>;

export default App;
