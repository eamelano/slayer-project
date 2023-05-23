import React from "react";
import { Routes, Route } from "react-router-dom";
import SiteNav from "./components/navbar/SiteNav";

function App() {
  const [defaultUser] = React.useState({
    name: "Slayer",
    isLoggedIn: true,
  });

  return (
    <div className="Global d-flex min-vh-100">
      <Routes>
        <Route path="/*" element={<SiteNav user={defaultUser} />} />
      </Routes>
    </div>
  );
}

export default App;
