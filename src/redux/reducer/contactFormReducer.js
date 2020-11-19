import { CLEAR_FORM, GET_FORM_VALUE } from "../constant"

const initialState={
    name: "",
  number: "",
}

const contactFormReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_FORM_VALUE:
            return {...state,[payload.name]:payload.value}
        case CLEAR_FORM:
            return initialState
      
        default:
            return state
    }
}


export default contactFormReducer