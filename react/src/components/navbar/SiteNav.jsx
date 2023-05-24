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
import UserProfile from "../user/UserProfile";
import "../user/userprofile.css";

const SiteNavbar = ({ user }) => {
  //#region State
  const [modalVis, setModalVis] = React.useState(false);
  //#endregion

  const hideModal = () => {
    setModalVis(false);
  };

  const showModal = () => {
    setModalVis(true);
  };

  return (
    <>
      {modalVis && (
        <UserProfile show={modalVis} user={user} onHide={hideModal} />
      )}
      <Container fluid>
        <Navbar variant="dark" expand="lg" sticky="top">
          <Container className="navContainer shadow">
            <Image
              alt="User Avatar"
              src={pfp}
              thumbnail
              className="pfp me-3"
              onClick={showModal}
            />
            <Navbar.Brand href="/" className="float-start">
              {user.name}'s Legend
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="me-auto text-white">
                <Nav.Link>Beginner's Guide</Nav.Link>
                <Nav.Link>Master Optimizer</Nav.Link>
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
                <NavDropdown title="Resources" menuVariant="dark">
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
