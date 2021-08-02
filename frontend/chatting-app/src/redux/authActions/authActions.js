import * as ActionTypes from './ActionTypes';
import { baseUrl } from './baseUrl';

export const signUp = (user) => (dispatch) => {
    return fetch(baseUrl + 'users', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })