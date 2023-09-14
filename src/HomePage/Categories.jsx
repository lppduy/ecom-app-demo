import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Modal, Row, Form, InputGroup } from 'react-bootstrap';

const Categories = ({ Image }) => {
  return (
    <section className="pt-5">
      <header className="text-center">
        <p className="small text-muted small text-uppercase mb-1">Carefully created collections</p>
        <h2 className="h5 text-uppercase mb-4">Browse our categories</h2>
      </header>

      <Container>
        <Row>
          <Col md={12} mb-4>
            <Row className="mb-4">
              <Col md={6} mb-4 mb-md-0>
                <Link className="category-item" to={'/shop?category=iphone'}>
                  <img className="img-fluid" src={Image.img1} alt="" />
                </Link>
              </Col>
              <Col md={6} mb-4 mb-md-0>
                <Link className="category-item" to={'/shop?category=mac'}>
                  <img className="img-fluid" src={Image.img2} alt="" />
                </Link>
              </Col>
            </Row>
          </Col>
          <Col md={12}>
            <Row>
              <Col md={4} mb-4 mb-md-0>
                <Link className="category-item" to={'/shop?category=ipad'}>
                  <img className="img-fluid" src={Image.img3} alt="" />
                </Link>
              </Col>
              <Col md={4} mb-4 mb-md-0>
                <Link className="category-item" to={'/shop?category=watch'}>
                  <img className="img-fluid" src={Image.img4} alt="" />
                </Link>
              </Col>
              <Col md={4} mb-4 mb-md-0>
                <Link className="category-item" to={'/shop?category=airpod'}>
                  <img className="img-fluid" src={Image.img5} alt="" />
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Categories;
