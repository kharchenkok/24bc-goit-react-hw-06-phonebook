import { ADD_CONTACT, DELETE_CONTACT, GET_DATA } from "../constant";
import { v4 as uuidv4 } from "uuid";

const initialState = [];

const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [
        ...state,
        { name: payload.name, number: payload.number, id: uuidv4() },
      ];

    case GET_DATA:
      return JSON.parse(payload);
    case DELETE_CONTACT:
      return state.filter((contact) => contact.id !== payload);
      default:
        return state;
      }
    };
    
    export default contactsReducer;
    
    
        // case FILTER_BY_NAME:
        // return state.filter((elem) => elem.name.toLowerCase().includes(payload))