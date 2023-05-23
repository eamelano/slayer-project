import React from "react";
import { Modal, Button, ButtonGroup } from "react-bootstrap";
import "./userprofile.css";

const UserProfile = ({ user, onHide, show }) => {
  const [activeButton, setActiveButton] = React.useState(true);

  const tabSwitch = (e) => {
    let buttonClassArr = e.target.classList;

    if (buttonClassArr.contains("btn-warning")) {
    } else {
      setActiveButton((prevState) => !prevState);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <ButtonGroup>
          <Button
            className="mx-auto"
            variant={activeButton ? "warning" : "secondary"}
            onClick={tabSwitch}
          >
            Basic Info
          </Button>
          <Button
            className="mx-auto"
            variant={activeButton ? "secondary" : "warning"}
            onClick={tabSwitch}
          >
            Appearance
          </Button>
        </ButtonGroup>
      </Modal.Header>

      <Modal.Body>
        {activeButton && "This is where the player profile will go"}
        {!activeButton && "This will be for appearance (WIP)"}
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserProfile;
