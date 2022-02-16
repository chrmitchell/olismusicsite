import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import analytics from "./analytics";
import NoojPage from "./Pages/NoojPage";
import ListenLinksPage from "./Pages/ListenLinksPage";
import Tray from "./components/Tray/Tray";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ListenLinksPage />} />
      <Route path="/nooje" element={<NoojPage />} />
      <Route path="*" element={<UnmatchedRoute />} />
    </Routes>
    <Tray />
  </BrowserRouter>
);

const UnmatchedRoute = () => {
  analytics.logEvent("Redirect from unmatched route", {
    category: "Unmatched Route",
    label: window.location.pathname,
  });

  return <Navigate to="/" />;
};

export default App;
