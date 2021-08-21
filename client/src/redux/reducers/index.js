import { combineReducers } from "redux"; 
import authReducer from "./authReducer"; 
import errorReducer from "./errorReducer"; 
import contactsReducer from "./contactsReducer";
import usersReducer from './usersReducer';
import conversationsReducer from './conversationsReducer'
import messagesReducer from "./messagesReducer";

export default combineReducers({ 
    auth: authReducer, 
    errors: errorReducer,
    contacts: contactsReducer,
    users: usersReducer,
    conversations: conversationsReducer,
    messages:messagesReducer
});