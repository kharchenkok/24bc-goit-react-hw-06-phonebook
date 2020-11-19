import {GET_FILTER_VALUE} from "../constant";


export const getFilterValue = ({target})=>({
    type:GET_FILTER_VALUE,
    payload:target
})
