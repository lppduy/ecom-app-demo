import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function FeatureSection() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="text-center">
          <Col lg={4} mb-3 mb-lg-0>
            <div className="d-inline-block">
              <div className="media align-items-end">
                <svg className="svg-icon svg-icon-big svg-icon-light">
                  <use xlinkHref="#delivery-time-1"></use>
                </svg>
                <div className="media-body text-left ml-3">
                  <h6 className="text-uppercase mb-1">Free shipping</h6>
                  <p className="text-small mb-0 text-muted">Free shipping worlwide</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} mb-3 mb-lg-0>
            <div className="d-inline-block">
              <div className="media align-items-end">
                <svg className="svg-icon svg-icon-big svg-icon-light">
                  <use xlinkHref="#helpline-24h-1"> </use>
                </svg>
                <div className="media-body text-left ml-3">
                  <h6 className="text-uppercase mb-1">24 x 7 service</h6>
                  <p className="text-small mb-0 text-muted">Free shipping worlwide</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="d-inline-block">
              <div className="media align-items-end">
                <svg className="svg-icon svg-icon-big svg-icon-light">
                  <use xlinkHref="#label-tag-1"> </use>
                </svg>
                <div className="media-body text-left ml-3">
                  <h6 className="text-uppercase mb-1">Festival offer</h6>
                  <p className="text-small mb-0 text-muted">Free shipping worlwide</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FeatureSection;
