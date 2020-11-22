import { createReducer } from '@reduxjs/toolkit';
import { ADD_CONTACT, DELETE_CONTACT, GET_DATA } from "../constant";

const initialState = [];

const contactsReducer=createReducer(initialState,{
  [ADD_CONTACT]:(state,action)=>[...state, action.payload.contact],
  [GET_DATA]:(state,action)=>JSON.parse(action.payload),
  [DELETE_CONTACT]:(state,action)=>[...state.filter((contact) => contact.id !== action.payload)]
})

export default contactsReducer;


// const contactsReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACT:
//       return [...state, payload.contact];

//     case GET_DATA:
//       return JSON.parse(payload);
//     case DELETE_CONTACT:
//       return [...state.filter((contact) => contact.id !== payload)];
//     default:
//       return state;
//   }
// };



