// import React from 'react';

// function Popup({ selectedProduct, closeModal, convertMoney }) {
//   if (!selectedProduct) {
//     return null;
//   }
//   return (
//     <div
//       className="modal fade show"
//       id={`product_${selectedProduct._id}`}
//       key={selectedProduct._id}
//     >
//       <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
//         <div className="modal-content">
//           <div className="modal-body p-0">
//             <div className="row align-items-stretch">
//               <div className="col-lg-6 p-lg-0">
//                 <img
//                   style={{ width: '100%' }}
//                   className="product-view d-block h-100 bg-cover bg-center"
//                   src={selectedProduct.img1}
//                   data-lightbox={`product_${selectedProduct._id}`}
//                   alt={selectedProduct.name}
//                 />
//                 <img className="d-none" src={selectedProduct.img2} alt={selectedProduct.name} />
//                 <img className="d-none" src={selectedProduct.img3} alt={selectedProduct.name} />
//               </div>
//               <div className="col-lg-6">
//                 <a
//                   className="close p-4"
//                   type="button"
//                   href="#section_product"
//                   data-dismiss="modal"
//                   aria-label="Close"
//                   onClick={closeModal}
//                 >
//                   ×
//                 </a>
//                 <div className="p-5 my-md-4">
//                   <h2 className="h4">{selectedProduct.name}</h2>
//                   <b className="text-muted">{convertMoney(selectedProduct.price)} VND</b>
//                   <br></br>
//                   <p className="text-small mb-4">{selectedProduct.short_desc}</p>
//                   <div className="row align-items-stretch mb-4">
//                     <div className="col-sm-5 pl-sm-0 fix_addwish">
//                       <a
//                         className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0"
//                         href={`/detail/${selectedProduct._id}`}
//                         target="_blank"
//                       >
//                         <i className="fa fa-shopping-cart"></i>
//                         <span className="ml-2">View Detail</span>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Popup;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hidePopup } from '../Redux/Action/ActionPopup';

function Popup({ convertMoney }) {
  const selectedProduct = useSelector(state => state.Popup.product);
  const dispatch = useDispatch();

  if (!selectedProduct) {
    return null;
  }

  return (
    <div
      className="modal fade show"
      id={`product_${selectedProduct._id}`}
      key={selectedProduct._id}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body p-0">
            <div className="row align-items-stretch">
              <div className="col-lg-6 p-lg-0">
                <img
                  style={{ width: '100%' }}
                  className="product-view d-block h-100 bg-cover bg-center"
                  src={selectedProduct.img1}
                  data-lightbox={`product_${selectedProduct._id}`}
                  alt={selectedProduct.name}
                />
                <img className="d-none" src={selectedProduct.img2} alt={selectedProduct.name} />
                <img className="d-none" src={selectedProduct.img3} alt={selectedProduct.name} />
              </div>
              <div className="col-lg-6">
                <a
                  className="close p-4"
                  type="button"
                  href="#section_product"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => dispatch(hidePopup())}
                >
                  ×
                </a>
                <div className="p-5 my-md-4">
                  <h2 className="h4">{selectedProduct.name}</h2>
                  <b className="text-muted">{convertMoney(selectedProduct.price)} VND</b>
                  <br></br>
                  <p className="text-small mb-4">{selectedProduct.short_desc}</p>
                  <div className="row align-items-stretch mb-4">
                    <div className="col-sm-5 pl-sm-0 fix_addwish">
                      <a
                        className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0"
                        href={`/detail/${selectedProduct._id}`}
                        target="_blank"
                      >
                        <i className="fa fa-shopping-cart"></i>
                        <span className="ml-2">View Detail</span>
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

export default Popup;
