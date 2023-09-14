import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HeaderShop = () => {
  return (
    <section className="py-5 bg-light">
      <Row className="px-4 px-lg-5 py-lg-4 align-items-center">
        <Col lg={6}>
          <h1 className="h2 text-uppercase mb-0">Shop</h1>
        </Col>
        <Col lg={6} className="text-lg-right">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-lg-end mb-0 px-0">
              <li className="breadcrumb-item active" aria-current="page">
                Shop
              </li>
            </ol>
          </nav>
        </Col>
      </Row>
    </section>
  );
};

export default HeaderShop;
