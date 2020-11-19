import contactFormReducer from "./contactFormReducer";
import contactsReducer from "./contactsReducer";
import filterReducer from "./filterReducer";

const { combineReducers } = require("redux");

const rootReducer=combineReducers({
    contacts:contactsReducer,
    filter:filterReducer,
    formContact:contactFormReducer
})

export default rootReducer