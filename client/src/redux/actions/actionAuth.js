import axios from "axios"; 
import setAuthToken from "../utils/setAuthToken"; 
import jwt_decode from "jwt-decode"; 
import { GET_ERRORS, CLEAN_ERRORS, SET_CURRENT_USER, USER_LOADING, PASSWORD_CHANGED } from "./actionTypes"; 
import { baseUrl } from "../baseUrl";
import { cleanContacts } from './actionContacts'
import { cleanUsers } from "./actionUsers";
import { cleanConversations } from "./actionConversations";
import { cleanMessages } from "./actionMessages";

// Register User 
export const registerUser = (userData, history) => (dispatch) => { 

    axios 
        .post(baseUrl + "/api/users/register/", userData) 
        .then((res) => history.push("/sign-in")) // re-direct to login on successful register 
        .catch((err) => 
            dispatch({ 
                type: GET_ERRORS, 
                payload: err.response.data, 
            }) 
        ); 
}; 

// Login - get user token 
export const loginUser = (userData) => (dispatch) => { 
    axios 
        .post(baseUrl + "/api/users/login", userData) 
        .then((res) => { 
            // Save to localStorage 
            // Set token to localStorage 
            const { token } = res.data; 
            localStorage.setItem("jwtToken", token); 
            // Set token to Auth header 
            setAuthToken(token); 
            // Decode token to get user data 
            const decoded = jwt_decode(token); 
            // Set current user 
            dispatch(setCurrentUser(decoded));
        })
        .catch((err) => 
            dispatch({ 
            type: GET_ERRORS, 
            payload: err.response.data, 
            }) 
        ); 
}; 

// Set logged in user 
export const setCurrentUser = (decoded) => { 
    return { 
        type: SET_CURRENT_USER, 
        payload: decoded, 
    }; 
}; 

// User loading 
export const setUserLoading = () => { 
    return { 
        type: USER_LOADING, 
    }; 
}; 

// Log user out 
export const logoutUser = () => (dispatch) => { 
    // Remove token from local storage 
    localStorage.removeItem("jwtToken"); 
    // Remove auth header for future requests 
    setAuthToken(false); 
    // Set current user to empty object {} which will set isAuthenticated to false 
    dispatch(setCurrentUser({}));
    dispatch(cleanContacts());
    dispatch(cleanUsers());
    dispatch(cleanConversations());
    dispatch(cleanMessages());
};

export const cleanErrors = () => { 
    return { 
        type: CLEAN_ERRORS, 
    }; 
}; 

export const updateUser = (userData) => (dispatch) => {
    axios 
        .post(baseUrl + "/api/users/update-user", userData) 
        .then((res) => { 
            // Save to localStorage 
            // Set token to localStorage 
            const { token } = res.data; 
            localStorage.setItem("jwtToken", token); 
            // Set token to Auth header 
            setAuthToken(token); 
            // Decode token to get user data 
            const decoded = jwt_decode(token); 
            // Set current user 
            dispatch(setCurrentUser(decoded));
        })
        .catch((err) => 
            dispatch({ 
            type: GET_ERRORS, 
            payload: err.response.data, 
            }) 
        ); 
}

export const changePassword = (data) => (dispatch) => {
    axios 
        .patch(baseUrl + "/api/users/change-password", data) 
        .then(() => { 
            dispatch({
                type: PASSWORD_CHANGED
            })
        })
        .catch((err) => 
            dispatch({ 
            type: GET_ERRORS, 
            payload: err.response.data, 
            }) 
        ); 
}

export const changeImage = (data) => (dispatch) => {
    axios 
        .patch(baseUrl + "/api/users/add-image", data) 
        .then((res) => { 
            dispatch({
                type: SET_CURRENT_USER,
                payload : res.data
            })
        })
        .catch((err) => 
            dispatch({ 
            type: GET_ERRORS, 
            payload: err.response.data, 
            }) 
        ); 
}