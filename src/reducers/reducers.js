import { combineReducers } from 'redux';
import {
    SET_MOVIES,
    SET_FILTER
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

const muviApp = combineReducers({
    movieFilter,
    movies
})

export default muviApp;