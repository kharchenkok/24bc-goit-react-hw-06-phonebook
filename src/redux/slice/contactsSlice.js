import {createSlice} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from "uuid";

const initialState = []

  const contactsSlice=createSlice({
      name:'contacts',
      initialState,
      reducers:{
        addContact(state,action){
            const contact={...action.payload,id:uuidv4()}
            return [...state, contact]
        },
        getData(state,action){
            return JSON.parse(action.payload)
        },
        deleteContact(state,action){
            return [...state.filter((contact) => contact.id !== action.payload)]
        }
      }
  })

const {actions,reducer} = contactsSlice
export const{addContact,getData,deleteContact}=actions

export default reducer

// payload:{
//     contact:{...payload,id:uuidv4()}}
// case ADD_CONTACT:
//     return [...state, payload.contact];

//   case GET_DATA:
//     return JSON.parse(payload);
//   case DELETE_CONTACT:
//     return [...state.filter((contact) => contact.id !== payload)];