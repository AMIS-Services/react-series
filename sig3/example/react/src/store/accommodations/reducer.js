import { RECEIVE_ACCOMMODATIONS, REQUEST_ACCOMMODATIONS, CREATE_ACCOMMODATION, ERROR_ACCOMMODATIONS } from "./actions";

export const accommodationsReducer = (state = [], action = {}) => {
  switch (action.type) {
    case REQUEST_ACCOMMODATIONS:
      return state;
    case RECEIVE_ACCOMMODATIONS:
      return [...action.payload];
    case CREATE_ACCOMMODATION:
      return [{ ...action.payload }];
    case ERROR_ACCOMMODATIONS:
      return state;
    default:
      return state;
  }
};
