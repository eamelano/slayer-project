import React from "react";
import { Routes, Route } from "react-router-dom";
import SiteNav from "./components/navbar/SiteNav";
import Landing from "./components/landing/Landing";
import { Container, Row } from "react-bootstrap";

function App() {
  const [defaultUser] = React.useState({
    name: "Slayer",
    isLoggedIn: true,
  });

  return (
    <>
      <SiteNav user={defaultUser} />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
