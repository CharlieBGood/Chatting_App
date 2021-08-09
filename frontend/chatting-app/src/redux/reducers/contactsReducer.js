import { GET_CONTACTS } from "../actions/actionTypes";

const initialState = []; 

export default function(state = initialState, action) { 
    switch (action.type) { 
        case GET_CONTACTS: 
            return action.payload
        default: 
            return state; 
    } 
  }