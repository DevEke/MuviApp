//Action Types

export const GET_MOVIES = 'GET_MOVIES';
export const SET_FILTER = 'SET_FILTER';
export const SET_USER = 'SET_USER';
export const SET_FAVORITES = 'SET_FAVORITES';
export const UPDATE_USER_USERNAME = 'UPDATE_USER_USERNAME';
export const UPDATE_USER_PASSWORD = 'UPDATE_USER_PASSWORD';
export const UPDATE_USER_EMAIL = 'UPDATE_USER_EMAIL';

//Action Creators

export const getMovies = (value) => {
    type: GET_MOVIES,
    value
}

export const setFilter = (value) => {
    type: SET_FILTER,
    value
}

export const setUser = (value) => {
    type: SET_USER,
    value
}

export const setFavorites = (value) => {
    type: SET_FAVORTIES,
    value
}

export const updateUsername = (value) => {
    type: UPDATE_USER_USERNAME,
    value
}

export const updatePassword = (value) => {
    type: UPDATE_USER_PASSWORD,
    value
}

export const updateEmail = (value) => {
    type: UPDATE_USER_EMAIL,
    value
}
