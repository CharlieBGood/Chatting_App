import { UPDATE_CONTACTS, CONTACTS_LOADING, CLEAN_CONTACTS } from "../actions/actionTypes";

const initialState = {
    contacts : [],
    isLoading : false
}; 

export default function(state = initialState, action) { 
    switch (action.type) { 
        case UPDATE_CONTACTS: 
            return {
                contacts : action.payload,
                isLoading : false
            }
        case CONTACTS_LOADING:
            return {
                ...state,
                isLoading : true
            }
        case CLEAN_CONTACTS:
            return {
                contacts : [],
                isLoading : false
            }
        default: 
            return state; 
    } 
  }