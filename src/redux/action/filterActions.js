import { createAction } from '@reduxjs/toolkit';
import {GET_FILTER_VALUE} from "../constant";


export const getFilterValue=createAction(GET_FILTER_VALUE)


// export const getFilterValue = ({target})=>({
//     type:GET_FILTER_VALUE,
//     payload:target
// })
