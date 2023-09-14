import React from 'react';

import { Col, Row } from 'react-bootstrap';
import Pagination from './Component/Pagination';
import Products from './Component/Products';
import Search from './Component/Search';
import SortProduct from './Component/SortProduct';

const MainContent = ({
  products,
  sort,
  pagination,
  totalPage,
  handlerSearch,
  handlerChangeSort,
  handlerChangePage,
}) => {
  return (
    <Col lg={9} order={1} order-lg={2} className="mb-5 mb-lg-0">
      <Row className="mb-3 align-items-center">
        {/* ... Search and SortProduct components ... */}
        {/* ------------------Search----------------- */}
        <Search handlerSearch={handlerSearch} />
        {/* ------------------Search----------------- */}
        <div className="col-lg-8">
          <ul className="list-inline d-flex align-items-center justify-content-lg-end mb-0">
            <li className="list-inline-item">
              <SortProduct handlerChangeSort={handlerChangeSort} />
            </li>
          </ul>
        </div>
      </Row>
      <Products products={products} sort={sort} />
      <Pagination
        pagination={pagination}
        handlerChangePage={handlerChangePage}
        totalPage={totalPage}
      />
    </Col>
  );
};

export default MainContent;
