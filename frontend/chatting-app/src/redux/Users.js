import * as ActionTypes from './ActionTypes';

export const Users = (state=null, action) => {
    switch (action.type) {

        case ActionTypes.LOAD_USERS:
            return {...state, users: action.payload}
        
        case ActionTypes.USER_CREATED:
            var user = action.payload;
            return {...state, users: state.users.concat(user)};

        default:
          return state;
      }
}