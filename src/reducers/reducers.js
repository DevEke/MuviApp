import { combineReducers } from 'redux';
import {
    GET_MOVIES,
    SET_USER,
    REGISTER_USER,
    ADD_TO_FAVORTIES,
    REMOVE_FROM_FAVORITES,
    UPDATE_USER,
    UNREGISTER_USER
} from '../actions/actions.js';

function movies(state = [], action) {
    switch(action.type) {
        case GET_MOVIES: 
            return action.value;
        default: return state;
    }
}

export default movies;