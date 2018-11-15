export const REQUEST_ACCOMMODATIONS = "REQUEST_ACCOMMODATIONS";
export const RECEIVE_ACCOMMODATIONS = "RECEIVE_ACCOMMODATIONS";

export const getAllAccommodations = () => {
  return async dispatch => {
    dispatch({ type: REQUEST_ACCOMMODATIONS });

    const result = await fetch("accommodations");
    dispatch({ type: REQUEST_ACCOMMODATIONS, payload: result });
  };
};
