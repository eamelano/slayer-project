import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Image,
  Button,
} from "react-bootstrap";
import React from "react";
import "./sitenav.css";
import pfp from "../../assets/images/ProfileAvatar.png";

const SiteNavbar = () => {
  return (
    <>
      <Container fluid className="pt-3">
        <Navbar bg="secondary" variant="dark" expand="lg" sticky="top">
          <div className="profile">
            <Image alt="" src={pfp} fluid thumbnail />{" "}
          </div>
          <Container fluid>
            <Navbar.Brand href="/">Slayer Legend</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="me-auto">
                <Nav.Link>Beginner's Guide</Nav.Link>
                <Nav.Link>Master Optimizer (WIP)</Nav.Link>
                <Nav.Link>Builds</Nav.Link>
                <NavDropdown title="Calculators" menuVariant="dark">
                  <NavDropdown.Item>Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Resources" menuVariant="dark"></NavDropdown>
              </Nav>
              <Nav>
                <Button variant="outline-success" className="me-2">
                  Login
                </Button>
                <Button variant="outline-warning">Sign Up</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default SiteNavbar;
