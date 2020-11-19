import { ADD_CONTACT,GET_DATA,DELETE_CONTACT} from "../constant";

export const addContact = (userContact)=>({
    type:ADD_CONTACT,
    payload:userContact
})
export const getData = (getLocalStorageData)=>({
    type:GET_DATA,
    payload:getLocalStorageData
})
export const deleteContact = (id)=>({
    type:DELETE_CONTACT,
    payload:id
})