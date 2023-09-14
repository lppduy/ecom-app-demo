const initialState = {
  product: null, // Sản phẩm hiện tại sẽ là null khi không có Popup
};

const ReducerPopup = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_POPUP':
      return {
        ...state,
        product: action.payload, // Cập nhật thông tin sản phẩm trong state
      };
    case 'HIDE_POPUP':
      return {
        ...state,
        product: null, // Ẩn Popup bằng cách đặt sản phẩm thành null
      };
    default:
      return state;
  }
};

export default ReducerPopup;
