import React from 'react';
import { Button, Col, Container, Modal, Row, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeroComponent = ({ Image }) => {
  return (
    <section
      className="hero pb-3 bg-cover bg-center d-flex align-items-center"
      style={{ backgroundImage: `url(${Image.banner})` }}
    >
      <Container>
        <Row className="px-4 px-lg-5">
          <Col lg={6}>
            <p className="text-muted small text-uppercase mb-2">New Inspiration 2020</p>
            <h1 className="h2 text-uppercase mb-3">20% off on new season</h1>
            <Link className="btn btn-dark" to="./shop">
              Browse collections
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroComponent;
