import { Container, Navbar } from "react-bootstrap";

import React from "react";

const SiteNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Project Slayer
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
