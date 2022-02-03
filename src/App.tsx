import "./App.scss";

import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import analytics from "./analytics";
import NoojPage from "./Pages/NoojPage";
import HomePage from "./Pages/HomePage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/nooje" element={<NoojPage />} />
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

export default App;
