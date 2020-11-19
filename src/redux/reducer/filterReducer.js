import { GET_FILTER_VALUE } from "../constant";

const initialState = "";

const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_FILTER_VALUE:
      return payload.value.toLowerCase();
    // case FILTER_BY_NAME:
    //     return payload.array.filter((elem) => elem.name.toLowerCase().includes(payload.value))
    default:
      return state;
  }
};

export default filterReducer;
