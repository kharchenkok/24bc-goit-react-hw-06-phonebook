import { createReducer } from '@reduxjs/toolkit';
import { CLEAR_FORM, GET_FORM_VALUE } from "../constant";

const initialState = {
  name: "",
  number: "",
};

const contactFormReducer=createReducer(initialState,{
  [GET_FORM_VALUE]:(state,action)=>({ ...state, [action.payload.name]: action.payload.value }),
  [CLEAR_FORM]:(state,action)=>initialState,

})

export default contactFormReducer;



// const contactFormReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case GET_FORM_VALUE:
//       return { ...state, [payload.name]: payload.value };
//     case CLEAR_FORM:
//       return initialState;

//     default:
//       return state;
//   }
// };

