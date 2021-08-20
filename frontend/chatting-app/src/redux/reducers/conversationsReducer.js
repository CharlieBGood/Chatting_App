import {CLEAN_CONVERSATIONS, CREATE_NEW_CONVERSATION, SET_CURRENT_CONVERSATION, UPDATE_CONVERSATIONS,
    UPDATE_FRIEND_CURRENT_CONVERSATION} from "../actions/actionTypes";

const initialState = {
    currentConversation: null,
    currentConversationFriend : null,
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
        case UPDATE_FRIEND_CURRENT_CONVERSATION:
            return {
                ...state,
                currentConversationFriend : action.payload
            }
        case CLEAN_CONVERSATIONS:
            return {
                currentConversation: null,
                currentConversationFriend : null,
                conversations : [],
            }
        default: 
            return state; 
    } 
  }