import axios from "axios"; 
import { baseUrl } from "../baseUrl";
import { GET_CONTACTS, GET_ERRORS } from "./actionTypes"; 


export const getContacts = (id) => (dispatch) => { 
    axios 
        .get(baseUrl + "/api/users/find_user?id="+id) 
        .then((res) => { 
            // Get contacts id from logged user 
            const contactsId = res.data.contacts; 
            const contactsList = []
            // Get user info from every contact
            contactsId.map((contactId) => {
                axios
                    .get(baseUrl + "/api/users/find_user?id="+contactId)
                    .then((res) => {
                        contactsList.push(res.data)
                    })
                    .catch((err) => 
                        dispatch({ 
                        type: GET_ERRORS, 
                        payload: err.response.data, 
                        }) 
                    ); 
            })
            dispatch(updateContacts(contactsList)); 
        }) 
        .catch((err) => 
            dispatch({ 
            type: GET_ERRORS, 
            payload: err.response.data, 
            }) 
        ); 
}; 

// Update contacts list 
export const updateContacts = (contactsList) => { 
    return { 
        type: GET_CONTACTS, 
        payload: contactsList, 
    }; 
}; 