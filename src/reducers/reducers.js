import { combineReducers } from 'redux';
import {
    GET_MOVIES,
    SET_USER,
    SET_FAVORITES,
    UPDATE_USER_USERNAME,
    UPDATE_USER_PASSWORD,
    UPDATE_USER_EMAIL,
    SET_FILTER
} from '../actions/actions.js';

function moviesFilter( state = '', action ) {
    switch(action.value) {
        case SET_FILTER:
            return action.value;
        default:
            return state;
    }
}

function setFavorites(state = [], action) {
    switch(action.type) {
        case SET_FAVORITES:
            return action.value;
        default:
            return state;
    }
}

function updateUser( state = '', action ) {
    switch(action.value) {
        case UPDATE_USER_USERNAME:
            return action.value;
        case UPDATE_USER_PASSWORD:
            return action.value;
        case UPDATE_USER_EMAIL:
            return action.value;
        default:
            return state;
    }
}

function setUser( state = null, action ) {
    switch(action.value) {
        case SET_USER:
            return action.value;
        default:
            return state;
    }
}
function movies( state = [], action ) {
    switch(action.type) {
        case GET_MOVIES: 
            return action.value;
        default: 
            return state;
    }
}

const moviesApp = combineReducers({
    moviesFilter,
    movies,
    setUser,
    updateUser,
    setFavorites
})

export default moviesApp;