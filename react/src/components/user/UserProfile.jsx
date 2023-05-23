import React from "react";
import { Modal, Button, Tab, Nav, Tabs } from "react-bootstrap";
import "./userprofile.css";

const UserProfile = ({ user, onHide, show }) => {
  const [activeTab, setActiveTab] = React.useState("Basic Info");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Tabs activeKey={activeTab} onSelect={handleTabChange} fill justify>
          <Tab eventKey="Basic Info" title="Basic Info" />
          <Tab eventKey="Appearance" title="Appearance" />
        </Tabs>
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
