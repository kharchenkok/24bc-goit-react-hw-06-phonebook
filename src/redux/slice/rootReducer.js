import { combineReducers} from "redux"

import contactFormSlice from './contactFormSlice'
import contactsSlice from './contactsSlice'
import filterSlice from './filterSlice'

// import contactFormReducer from "./contactFormReducer";
// import contactsReducer from "./contactsReducer";
// import filterReducer from "./filterReducer";



const rootReducer=combineReducers({
    contacts:contactsSlice,
    filter:filterSlice,
    formContact:contactFormSlice
})

export default rootReducer