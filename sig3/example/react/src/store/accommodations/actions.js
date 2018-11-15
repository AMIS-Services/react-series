import { fetch } from "../../common/fetch";

export const REQUEST_ACCOMMODATIONS = "REQUEST_ACCOMMODATIONS";
export const RECEIVE_ACCOMMODATIONS = "RECEIVE_ACCOMMODATIONS";

export const getAllAccommodations = () => {
  return async dispatch => {
    dispatch({ type: REQUEST_ACCOMMODATIONS });

    const result = await fetch("accommodations");
    dispatch({ type: RECEIVE_ACCOMMODATIONS, payload: result });
  };
};
