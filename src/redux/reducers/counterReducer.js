import { COUNT_DOWN, COUNT_UP } from "../actions/actionTypes";

const intialState = {
  counter: 0,
};

export const counterReducer = (state = intialState, action) => {
  switch (action.type) {
    case COUNT_UP:
        return {...state, counter: state.counter + 1}
    case COUNT_DOWN:
        return {...state, counter: state.counter - 1}
    default:
      return state;
  }
};


