import * as ActionTypes from './ActionTypes';
import { baseUrl } from './baseUrl';

export const fetchUsers = () => (dispatch) => {
    
    return fetch(baseUrl + 'users')
        .then(response =>{
            if (response.ok){
                return response;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess; 
        })
        .then(response => response.json())
        .then(users => dispatch(usersLoaded(users)))
};

export const usersLoaded = (users) => ({
    type: ActionTypes.LOAD_USERS,
    payload: users
});

export const createUser = (user) => (dispatch) => {

    const newUser = {
        nombre: '',
        apellidos: '',
        nickname: user.nickname,
        email: user.email,
        telefono: user.phone,
        password: user.password,
        contacts: [],
        imagen: ''
    }

    return fetch(baseUrl + 'users')
        .then(response =>{
            if (response.ok){
                return response;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess; 
        })
        .then(response => response.json())
        .then(users => dispatch(usersLoaded(users)))
};

export const addUser = (user) => ({
    type: ActionTypes.USER_CREATED,
    payload: user
});