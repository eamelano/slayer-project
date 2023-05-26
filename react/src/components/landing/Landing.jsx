import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Landing = () => {
  return (
    <Container fluid>
      <Row className="d-flex min-vh-100">
        <Col xs={2} sm={2} className="globalBackground text-white text-center">
          {" "}
          Hello hello heloo
        </Col>
        <Col xs={8} sm={8} className="middleCol text-white text-center">
          Hello World
        </Col>
        <Col xs={2} sm={2} className="globalBackground text-white text-center">
          {" "}
          Hello World
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
