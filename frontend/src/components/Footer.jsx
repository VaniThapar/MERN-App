import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <h6>CarMart &copy; {currentYear}</h6>
            <h6>Contact: +919217253000 </h6>

          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
