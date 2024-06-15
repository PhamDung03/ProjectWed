import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { counterReducer } from "./counterReducer";
import showDialogBuyReducer from "./showDialogBuyReducer";
// import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  cart: cartReducer,
  counter: counterReducer,
  showDialogBuy: showDialogBuyReducer,
});

export default rootReducer;

// const store = configureStore({
//   reducer: {
//     test: UserPage2,
//   },
// });

// export default store;
