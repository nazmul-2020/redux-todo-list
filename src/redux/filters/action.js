import { COLORCHANGED, STATUSCHANGED } from "./actiontype";

export const statusChanged = (status) => {
  return {
    type: STATUSCHANGED,
    payload: status,
  };
};

export const colorChanged = (color, changed) => {
  return {
    type: COLORCHANGED,
    payload: {
      color,
      changed,
    },
  };
};
