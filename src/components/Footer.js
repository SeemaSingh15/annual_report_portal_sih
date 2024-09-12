// src/components/Footer.js
// src/components/Footer.js
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-3">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 Annual Report Portal. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
