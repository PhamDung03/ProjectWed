import { ADD_ITEM, COUNT_DOWN } from "../actions/actionTypes";
import { COUNT_UP, REMOVE_ITEM } from "../actions/actionTypes";

const cartStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const intialState = {
  cart: cartStorage,
};

export const cartReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      let newItem = action?.payload;
      let isExits =
        state?.cart.findIndex(
          (item) => item?.productId === newItem?.productId
        ) > -1;

      if (isExits) {
        const newState = {
          ...state,
          cart: state.cart.map((item) => {
            if (item?.productId === newItem?.productId) {
              return { ...item, quantity: item?.quantity + 1 };
            }
            return item;
          }),
        };
        localStorage.setItem("cart", JSON.stringify(newState.cart));
        return newState;
      } else {
        newItem.quantity = 1;
        const newState = {
          ...state,
          cart: state.cart.concat(newItem),
        };
        localStorage.setItem("cart", JSON.stringify(newState.cart));
        return newState;
      }
    }

    case REMOVE_ITEM: {
      let itemRemove = action?.payload;
      const newState = {
        ...state,
        cart: state.cart?.filter(
          (item) => item?.productId !== itemRemove?.productId
        ),
      };
      localStorage.setItem("cart", JSON.stringify(newState.cart));
      return newState;
    }

    case COUNT_UP: {
      const id = action.payload;
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.productId === id) {
            item.quantity += 1;
          }
          return item;
        }),
      };
    }
    case COUNT_DOWN: {
      const id = action.payload;
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.productId === id && item.quantity !== 1) {
            item.quantity -= 1;
          }
          return item;
        }),
      };
    }

    default:
      return state;
  }
};
