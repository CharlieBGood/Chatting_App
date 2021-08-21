import axios from "axios"; 
import { baseUrl } from "../baseUrl";
import { GET_USERS, GET_ERRORS, CLEAN_USERS } from "./actionTypes"; 

export const getUsers = (list) => (dispatch) => {
    axios 
        .get(baseUrl + "/api/users/get-users?list="+list)
        .then((res) => {
            dispatch(updateUsers(res.data.users_list))
        })
        .catch((err) => 
            dispatch({ 
            type: GET_ERRORS, 
            payload: err.response.data, 
            }) 
        ); 
}

// Update users list 
export const updateUsers = (users_list) => { 
    return { 
        type: GET_USERS, 
        payload: users_list, 
    }; 
}; 

export const cleanUsers = () => {
    return {
        type: CLEAN_USERS
    }
}