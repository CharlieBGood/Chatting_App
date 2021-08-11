import { combineReducers } from "redux"; 
import authReducer from "./authReducer"; 
import errorReducer from "./errorReducer"; 
import contactsReducer from "./contactsReducer";
import usersReducer from './usersReducer';

export default combineReducers({ 
    auth: authReducer, 
    errors: errorReducer,
    contacts: contactsReducer,
    users: usersReducer
});