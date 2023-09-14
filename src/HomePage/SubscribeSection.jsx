import React from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';

function SubscribeSection() {
  return (
    <section className="py-5">
      <Container fluid>
        <Row>
          <Col lg={6} mb={3} mb-lg={0}>
            <h5 className="text-uppercase">Let's be friends!</h5>
          </Col>
          <Col lg={6}>
            <form action="#">
              <InputGroup className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  aria-describedby="button-addon2"
                  className="form-control-lg py-3"
                />
                <div className="input-group-append">
                  <Button variant="dark" id="button-addon2" type="submit" className="btn-block">
                    Subscribe
                  </Button>
                </div>
              </InputGroup>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SubscribeSection;
