import { combineReducers } from "redux"; 
import authReducer from "./authReducer"; 
import errorReducer from "./errorReducer"; 
import contactsReducer from "./contactsReducer";

export default combineReducers({ 
    auth: authReducer, 
    errors: errorReducer,
    contacts: contactsReducer
});