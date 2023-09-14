import React from 'react';

function ProductList({ product, convertMoney }) {
  return (
    <div className="modal fade show" id={`product_${product._id}`}>
      <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body p-0">
            <div className="row align-items-stretch">
              <div className="col-lg-6 p-lg-0">
                <img
                  style={{ width: '100%' }}
                  className="product-view d-block h-100 bg-cover bg-center"
                  src={product.img1}
                  data-lightbox={`product_${product._id}`}
                />
                <img className="d-none" href={product.img2} />
                <img className="d-none" href={product.img3} />
              </div>
              <div className="col-lg-6">
                <a
                  className="close p-4"
                  type="button"
                  href="#section_product"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  ×
                </a>
                <div className="p-5 my-md-4">
                  <ul className="list-inline mb-2">
                    <li className="list-inline-item m-0">
                      <i className="fas fa-star small text-warning"></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i className="fas fa-star small text-warning"></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i className="fas fa-star small text-warning"></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i className="fas fa-star small text-warning"></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i className="fas fa-star small text-warning"></i>
                    </li>
                  </ul>
                  <h2 className="h4">{product.name}</h2>
                  <p className="text-muted">{convertMoney(product.price)} VND</p>
                  <p className="text-small mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo,
                    eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes
                    nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.
                  </p>
                  <div className="row align-items-stretch mb-4">
                    <div className="col-sm-5 pl-sm-0 fix_addwish">
                      <a className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0">
                        <i className="far fa-heart mr-2"></i>
                        Add To Wish List
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
