import { GET_CONTACTS, CONTACTS_LOADING } from "../actions/actionTypes";

const initialState = {
    contacts : [],
    isLoading : false
}; 

export default function(state = initialState, action) { 
    switch (action.type) { 
        case GET_CONTACTS: 
            return {
                contacts : action.payload,
                isLoading : false
            }
        case CONTACTS_LOADING:
            return {
                ...state,
                isLoading : true
            }
        default: 
            return state; 
    } 
  }