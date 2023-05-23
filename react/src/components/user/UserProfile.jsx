import React from "react";
import { Modal, Button, Tab, Tabs } from "react-bootstrap";

const UserProfile = ({ user, onHide, show }) => {
  const [activeTab, setActiveTab] = React.useState("Basic Info");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Modal show={true} onHide={onHide}>
      <Modal.Header closeButton>
        <Tabs defaultActiveKey={activeTab} onSelect={handleTabChange}>
          <Tab title="Basic Info" eventKey="Basic Info" />
          <Tab title="Appearance" eventKey="Appearance" />
        </Tabs>
      </Modal.Header>
      <Modal.Body>
        <Tab.Content>
          <Tab.Pane eventKey="Basic Info">
            <h4>Tab 1 Content</h4>
            <p>This is the content for Tab 1.</p>
          </Tab.Pane>
          <Tab.Pane eventKey="Appearance">
            <h4>Tab 2 Content</h4>
            <p>This is the content for Tab 2.</p>
          </Tab.Pane>
        </Tab.Content>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserProfile;
