//Action Types

export const GET_MOVIES = 'GET_MOVIES';
export const SET_USER = 'SET_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORTIES';
export const UPDATE_USER = 'UPDATE_USER';
export const UNREGISTER_USER = 'UNREGISTER_USER';

//Action Creators

export const getMovies = (value) => {
    type: GET_MOVIES,
    value
}

export const setUser = (value) => {
    type: SET_USER,
    value
}

export const registerUser = (value) => {
    type: REGISTER_USER,
    value
}

export const addToFavorites = (value) => {
    type: ADD_TO_FAVORITES,
    value
}

export const removeFromFavorites = (value) => {
    type: REMOVE_FROM_FAVORITES,
    value
}

export const updateUser = (value) => {
    type: UPDATE_USER,
    value
}

export const unregisterUser = (value) => {
    type: UNREGISTER_USER,
    value
}