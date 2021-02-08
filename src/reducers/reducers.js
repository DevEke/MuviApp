import { combineReducers } from 'redux';
import {
    SET_MOVIES,
    SET_FILTER,
    SET_USER
    // SET_USER_USERNAME,
    // SET_USER_PASSWORD,
    // SET_USER_EMAIL,
    // SET_USER_FAVORITES
} from '../actions/actions.js';

function movieFilter( state = '', action ) {
    switch(action.type) {
        case SET_FILTER:
            return action.value;
        default:
            return state;
    }
}

function movies( state = [], action ) {
    switch(action.type) {
        case SET_MOVIES: 
            return action.value;
        default: 
            return state;
    }
}

function user( state = '', action ) {
    switch(action.type) {
        case SET_USER:
            return action.value;
        default:
            return state;
    }
}

// function userUsername( state = '', action ) {
//     switch(action.type) {
//         case SET_USER_USERNAME:
//             return action.value;
//         default:
//             return state;
//     }
// }

// function userPassword( state = '', action ) {
//     switch(action.type) {
//         case SET_USER_PASSWORD:
//             return action.value;
//         default:
//             return state;
//     }
// }

// function userEmail( state = '', action ) {
//     switch(action.type) {
//         case SET_USER_EMAIL:
//             return action.value;
//         default:
//             return state;
//     }
// }

// function userFavorites( state = [], action ) {
//     switch(action.type) {
//         case SET_USER_FAVORITES:
//             return action.value;
//         default:
//             return state;
//     }
// }

const muviApp = combineReducers({
    movieFilter,
    movies,
    user
    // userUsername,
    // userPassword,
    // userEmail,
    // userFavorites
})

export default muviApp;