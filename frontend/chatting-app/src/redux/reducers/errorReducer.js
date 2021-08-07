import { GET_ERRORS, CLEAN_ERRORS } from "../actions/actionTypes"; 

const initialState = {}; 

export default function(state = initialState, action) { 
    switch (action.type) { 
        case GET_ERRORS: 
            return action.payload; 
        case CLEAN_ERRORS:
            return {}
        default: 
            return state; 
    } 
} 