const intialState = {
  showDialogBuy: false,
  productDetail: {},
};

const showDialogBuyReducer = (state = intialState, action) => {
  switch (action.type) {
    case "showDialog":
      return { ...state, showDialogBuy: true };
    case "setProductDetail":
      return { ...state, productDetail: action.payload };
    default:
      return state;
  }
};

export default showDialogBuyReducer;
