//Action Types

export const SET_MOVIES = 'SET_MOVIES';
export const SET_FILTER = 'SET_FILTER';


//Action Creators

export const setMovies = (value) => {
    return async function(dispatch, getState) {
        dispatch({
            type: SET_MOVIES,
            value
        })
    }
}

export const setFilter = (value) => {
    return async function(dispatch, getState) {
        dispatch({
            type: SET_FILTER,
            value
        })
    }
}