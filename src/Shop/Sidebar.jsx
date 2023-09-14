import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Sidebar({ handlerCategory }) {
  return (
    <Col lg={3} order={2} order-lg={1}>
      <h5 className="text-uppercase mb-4">Categories</h5>
      {/* Tùy chọn "All" */}
      <div className="py-2 px-4 bg-dark text-white mb-3">
        <strong className="small text-uppercase font-weight-bold">
          <Link className="reset-anchor" to="#" onClick={() => handlerCategory('all')}>
            All
          </Link>
        </strong>
      </div>
      {/* Các danh mục sản phẩm khác */}
      <div className="py-2 px-4 bg-light mb-3">
        <strong className="small text-uppercase font-weight-bold">Apple</strong>
      </div>
      <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
        <li className="mb-2">
          <Link className="reset-anchor" to="#" onClick={() => handlerCategory('iphone')}>
            IPhone
          </Link>
        </li>
        <li className="mb-2">
          <Link className="reset-anchor" to="#" onClick={() => handlerCategory('ipad')}>
            Ipad
          </Link>
        </li>
        <li className="mb-2">
          <Link className="reset-anchor" to="#" onClick={() => handlerCategory('macbook')}>
            Macbook
          </Link>
        </li>
      </ul>
      <div className="py-2 px-4 bg-light mb-3">
        <strong className="small text-uppercase font-weight-bold">Wireless</strong>
      </div>
      <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
        <li className="mb-2">
          <Link className="reset-anchor" to="#" onClick={() => handlerCategory('airpod')}>
            Airpod
          </Link>
        </li>
        <li className="mb-2">
          <Link className="reset-anchor" to="#" onClick={() => handlerCategory('watch')}>
            Watch
          </Link>
        </li>
      </ul>
      <div className="py-2 px-4 bg-light mb-3">
        <strong className="small text-uppercase font-weight-bold">Other</strong>
      </div>
      <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal mb-5">
        <li className="mb-2">
          <Link className="reset-anchor" to="#" onClick={() => handlerCategory('mouse')}>
            Mouse
          </Link>
        </li>
        <li className="mb-2">
          <Link className="reset-anchor" to="#" onClick={() => handlerCategory('keyboard')}>
            Keyboard
          </Link>
        </li>
        <li className="mb-2">
          <Link className="reset-anchor" to="#" onClick={() => handlerCategory('other')}>
            Other
          </Link>
        </li>
      </ul>
    </Col>
  );
}

export default Sidebar;
