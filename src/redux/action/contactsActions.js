import { ADD_CONTACT,GET_DATA,DELETE_CONTACT} from "../constant";
import { v4 as uuidv4 } from "uuid";

export const addContact = (name,number)=>({
    type:ADD_CONTACT,
    payload:{
        contact:{name,number,id:uuidv4()}}
})

export const getData = (getLocalStorageData)=>({
    type:GET_DATA,
    payload:getLocalStorageData
})
export const deleteContact = (id)=>({
    type:DELETE_CONTACT,
    payload:id
})

