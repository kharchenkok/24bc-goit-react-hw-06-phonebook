import {createSlice} from '@reduxjs/toolkit'


const initialState = ''

  const filterSlice=createSlice({
      name:'filter',
      initialState,
      reducers:{
        getFilterValue(state,action){
            const {target}=action.payload
            return target.value.toLowerCase()
        },
        
      }
  })

const {actions,reducer} = filterSlice
export const{getFilterValue}=actions

export default reducer





// const initialState = "";

// const filterReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case GET_FILTER_VALUE:
//       return payload.value.toLowerCase();

//     default:
//       return state;
//   }
// };

// export default filterReducer;