import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Users } from './Users'
import { createForms, Errors } from 'react-redux-form';
import { InitialNewUser } from './forms';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            users: Users,
            ...createForms({
                newUser: InitialNewUser
            })
        }),
        applyMiddleware(thunk)
    );
    return store;
};