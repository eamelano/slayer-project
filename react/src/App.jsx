import React from "react";
import { Routes, Route } from "react-router-dom";
import SiteNav from "./components/navbar/SiteNav";

function App() {
  const [exampleAccount] = React.useState({
    name: "Morretti",
  });

  return (
    <div className="Global d-flex min-vh-100">
      <Routes>
        <Route path="/*" element={<SiteNav user={exampleAccount} />} />
      </Routes>
    </div>
  );
}

export default App;
