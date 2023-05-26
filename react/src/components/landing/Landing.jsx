import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Landing = () => {
  return (
    <Container fluid>
      <Row className="d-flex min-vh-100">
        <Col sm={2} className="globalBackground"></Col>
        <Col sm={8} className="middleCol"></Col>
        <Col sm={2} className="globalBackground"></Col>
      </Row>
    </Container>
  );
};

export default Landing;
