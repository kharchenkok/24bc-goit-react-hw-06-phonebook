import { combineReducers} from "redux"

import contactFormSlice from './contactFormSlice'
import contactsSlice from './contactsSlice'
import filterSlice from './filterSlice'


const rootReducer=combineReducers({
    contacts:contactsSlice,
    filter:filterSlice,
    formContact:contactFormSlice
})

export default rootReducer