import { COUNT_UP, COUNT_DOWN } from "./actionTypes";

export const onCountUp = (data) => {
  return { type: COUNT_UP, payload: data };
};

export const onCountDown = (data) => {
  return { type: COUNT_DOWN, payload: data };
};
