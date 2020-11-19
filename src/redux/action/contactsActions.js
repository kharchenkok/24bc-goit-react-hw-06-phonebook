import { ADD_CONTACT,GET_DATA,DELETE_CONTACT} from "../constant";

export const addContact = (name,number)=>({
    type:ADD_CONTACT,
    payload:{name,number}
})

export const getData = (getLocalStorageData)=>({
    type:GET_DATA,
    payload:getLocalStorageData
})
export const deleteContact = (id)=>({
    type:DELETE_CONTACT,
    payload:id
})

// export const filterContactByName = (filter)=>({
//     type:FILTER_BY_NAME,
//     payload:filter
// })