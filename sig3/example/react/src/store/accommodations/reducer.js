import { RECEIVE_ACCOMMODATIONS, REQUEST_ACCOMMODATIONS } from "./actions";

export const accommodationsReducer = (state = [], action = {}) => {
  switch (action.type) {
    case REQUEST_ACCOMMODATIONS:
      return state;
    case RECEIVE_ACCOMMODATIONS:
      return [...action.payload];
    default:
      return state;
  }
};
