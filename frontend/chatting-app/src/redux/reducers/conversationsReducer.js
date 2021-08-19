import {CREATE_NEW_CONVERSATION, SET_CURRENT_CONVERSATION, UPDATE_CONVERSATIONS} from "../actions/actionTypes";

const initialState = {
    currentConversation: null,
    conversations : [],
}; 

export default function(state = initialState, action) { 
    switch (action.type) { 
        case CREATE_NEW_CONVERSATION: 
            return {
                ...state,
                currentConversation : action.payload,
            }
     
        case SET_CURRENT_CONVERSATION:
            return {
                ...state,
                currentConversation : action.payload,
            }
        case UPDATE_CONVERSATIONS:
            return {
                ...state,
                conversations : action.payload,
            }
       
        default: 
            return state; 
    } 
  }