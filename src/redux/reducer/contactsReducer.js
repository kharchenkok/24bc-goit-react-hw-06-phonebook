
import { ADD_CONTACT, DELETE_CONTACT, GET_DATA } from "../constant";

const initialState = [];

const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload.contact];

    case GET_DATA:
      return JSON.parse(payload);
    case DELETE_CONTACT:
      return [...state.filter((contact) => contact.id !== payload)];
    default:
      return state;
  }
};

export default contactsReducer;


