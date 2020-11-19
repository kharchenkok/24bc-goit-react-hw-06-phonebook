import { GET_FILTER_VALUE } from "../constant";

const initialState = "";

const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_FILTER_VALUE:
      return payload.value.toLowerCase();

    default:
      return state;
  }
};

export default filterReducer;
