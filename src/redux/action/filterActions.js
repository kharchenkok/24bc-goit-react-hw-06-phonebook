import {GET_FILTER_VALUE} from "../constant";


export const getFilterValue = ({target})=>({
    type:GET_FILTER_VALUE,
    payload:target
})
// export const filterContactByName = (contacts,filter)=>({
//     type:FILTER_BY_NAME,
//     payload:{
//         array:contacts,value:filter
//     }
// })