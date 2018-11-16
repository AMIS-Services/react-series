import { fetch } from "../../common/fetch";

export const REQUEST_ACCOMMODATIONS = "REQUEST_ACCOMMODATIONS";
export const RECEIVE_ACCOMMODATIONS = "RECEIVE_ACCOMMODATIONS";
export const CREATE_ACCOMMODATION = "CREATE_ACCOMMODATION";
export const ERROR_ACCOMMODATIONS = "ERROR_ACCOMMODATIONS";

export const getAllAccommodations = () => {
  return async dispatch => {
    dispatch({ type: REQUEST_ACCOMMODATIONS });

    const result = await fetch("accommodations");
    dispatch({ type: RECEIVE_ACCOMMODATIONS, payload: result });
  };
};

export const createAccommodation = accommodation => {
  return async dispatch => {
    dispatch({ type: REQUEST_ACCOMMODATIONS });

    const result = await fetch("accommodations", { method: "POST", body: accommodation });
    console.log(result);
    if (!result) {
      dispatch({ type: ERROR_ACCOMMODATIONS });
    } else {
      dispatch({ type: CREATE_ACCOMMODATION, payload: result });
    }
  };
};
