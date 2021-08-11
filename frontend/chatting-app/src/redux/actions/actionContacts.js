import axios from "axios"; 
import { baseUrl } from "../baseUrl";
import { GET_CONTACTS, GET_ERRORS, CONTACTS_LOADING } from "./actionTypes"; 


export const getContacts = (id) => (dispatch) => { 
    
    dispatch(loadingContacts(true));

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
            return contactsList;
        }) 
        .then((contactsList) => dispatch(updateContacts(contactsList)))
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

export const addContact = (id_user, id_contact, contacts_list) => (dispatch) => {
    axios
        .patch(baseUrl + 'api/users/add-contact', id_user, id_contact, contacts_list)
        .then((res) => {
            dispatch(updateContacts(res.contacts_list))
        })
}

export const loadingContacts = () => {
    return {
        type: CONTACTS_LOADING
    }
}