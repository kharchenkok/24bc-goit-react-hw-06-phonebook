import { createReducer } from '@reduxjs/toolkit';
import { GET_FILTER_VALUE } from "../constant";

const initialState = "";

const filterReducer=createReducer(initialState,{
  [GET_FILTER_VALUE]:(state, action)=>{
    const {target}=action.payload
    return target.value.toLowerCase()}
})

export default filterReducer;


// const filterReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case GET_FILTER_VALUE:
//       return payload.value.toLowerCase();

//     default:
//       return state;
//   }
// };

