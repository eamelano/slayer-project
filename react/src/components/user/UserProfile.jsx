import React from "react";
import { Modal, Button, Tab, Nav } from "react-bootstrap";
import "./userprofile.css";

const UserProfile = ({ user, onHide, show }) => {
  const [activeTab, setActiveTab] = React.useState("Basic Info");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Nav
          variant="tabs"
          activeKey={activeTab}
          onSelect={handleTabChange}
          justify={true}
        >
          <Nav.Item>
            <Nav.Link eventKey="Basic Info">Basic Info</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Appearance">Appearance</Nav.Link>
          </Nav.Item>
        </Nav>
      </Modal.Header>
      <Tab.Content>
        <Modal.Body>
          <Tab.Pane eventKey="Basic Info">
            <h4>Tab 1 Content</h4>
            <p>This is the content for Tab 1.</p>
          </Tab.Pane>
        </Modal.Body>
        <Modal.Body>
          <Tab.Pane eventKey="Appearance">
            <h4>Tab 2 Content</h4>
            <p>This is the content for Tab 2.</p>
          </Tab.Pane>
        </Modal.Body>
      </Tab.Content>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserProfile;
