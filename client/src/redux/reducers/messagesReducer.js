import { UPDATE_MESSAGES, AFTER_POST_MESSAGE, CLEAN_MESSAGES } from '../actions/actionTypes';
 
export default function(state={},action){
    switch(action.type){
        case UPDATE_MESSAGES:
                return {
                    ...state,
                    messages : action.payload,
                }
        case AFTER_POST_MESSAGE:
                return {...state, messages: state.messages.concat(action.payload) }
        case CLEAN_MESSAGES:
            return {}
        default:
            return state;
    }
}