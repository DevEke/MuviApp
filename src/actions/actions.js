//Action Types

export const SET_MOVIES = 'SET_MOVIES';
export const SET_FILTER = 'SET_FILTER';


//Action Creators

export const setMovies = (value) => {
    type: SET_MOVIES,
    value
}

export const setFilter = (value) => {
    type: SET_FILTER,
    value
}