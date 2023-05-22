import { Container, Navbar } from "react-bootstrap";

import React from "react";

const SiteNavbar = () => {
  return (
    <Navbar bg="light" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React Bootstrap
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
