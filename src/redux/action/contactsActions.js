import { createAction } from '@reduxjs/toolkit';
import { ADD_CONTACT,GET_DATA,DELETE_CONTACT} from "../constant";
import { v4 as uuidv4 } from "uuid";


export const addContact=createAction(ADD_CONTACT,text=>({
    payload:{
        contact:{...text,id:uuidv4()}
    }
}))
export const getData=createAction(GET_DATA)
export const deleteContact=createAction(DELETE_CONTACT)




// export const addContact = (payload)=>({
//     type:ADD_CONTACT,
//     payload:{
//         contact:{...payload,id:uuidv4()}}
// })

// export const getData = (payload)=>({
//     type:GET_DATA,
//     payload
// })
// export const deleteContact = (payload)=>({
//     type:DELETE_CONTACT,
//     payload
// })

