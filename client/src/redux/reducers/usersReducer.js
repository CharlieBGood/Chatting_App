import { GET_USERS, CLEAN_USERS } from "../actions/actionTypes"; 

const initialState = []; 

export default function(state = initialState, action) { 
    switch (action.type) { 
        case GET_USERS: 
            return action.payload; 
        case CLEAN_USERS:
            return []
        default: 
            return state; 
    } 
} 