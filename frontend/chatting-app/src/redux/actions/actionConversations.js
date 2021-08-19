import axios from "axios"; 
import { baseUrl } from "../baseUrl";
import { CREATE_NEW_CONVERSATION, UPDATE_CONVERSATIONS, SET_CURRENT_CONVERSATION, GET_ERRORS} from "./actionTypes"; 



export const createNewConversation = (members) => (dispatch) =>{
    axios.post(baseUrl +"/api/conversations/new-conversation", members) 
    .then((res) => { 
        dispatch(
            reportNewConversation(res.data.savedConversation._id)
        )
        dispatch(
            updateConversations(res.data.conversations)
        )
       
    }).catch((err) => 
        dispatch({ 
        type: GET_ERRORS, 
        payload: err.response.data, 
        }) 
    );
}; 
    
export const reportNewConversation =(newConversation) =>(dispatch) =>{
    dispatch({
        type: CREATE_NEW_CONVERSATION,
        payload: newConversation
    })
}




export const getConversations = (userId) => (dispatch) => { 
   
    axios.get(baseUrl +"/api/conversations/get-conversations?userId="+ userId) 
        .then((res) => { 
            const conversationsList = res.data; 
            return conversationsList;
        }) 
 
        .then((conversationsList) => dispatch(updateConversations(conversationsList)))
        .catch((err) => 
            dispatch({ 
            type: GET_ERRORS, 
            payload: err.response.data, 
            }) 
        )
};
    

export const updateConversations = (conversations) =>{
    return { 
        type: UPDATE_CONVERSATIONS, 
        payload: conversations, 
    }

};


export const setCurrentConversation = (conversationId)=> {
    return { 
        type: SET_CURRENT_CONVERSATION, 
        payload: conversationId, 
    }
};


