import axios from 'axios';
import {UPDATE_MESSAGES, AFTER_POST_MESSAGE, GET_ERRORS} from '../actions/actionTypes';
import { baseUrl } from "../baseUrl";


export const getMessagesConversation = (conversationId) =>(dispatch)=>{
    axios.get(baseUrl + '/api/messages/get-messages-conversation?conversationId='+ conversationId)
    .then((res) => { 
        const messagesList = res.data; 
        return messagesList;
    }) 

    .then((messagesList) => dispatch(updateMessages(messagesList)))
    .catch((err) => 
        dispatch({ 
        type: GET_ERRORS, 
        payload: err.response.data, 
   
    })
    ) 
}; 

export const updateMessages = (messages) =>{
    return { 
        type: UPDATE_MESSAGES, 
        payload: messages, 
    };

}


export function getMessage(messageId){
    const data = axios.get(baseUrl + '/api/messages/get-messages?_id='+ messageId)
        .then(response => response.data);
    
    return {
        type: AFTER_POST_MESSAGE,
        payload: data
    }
}
