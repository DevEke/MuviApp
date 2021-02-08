//Action Types

export const SET_MOVIES = 'SET_MOVIES';
export const SET_FILTER = 'SET_FILTER';
export const SET_USER = 'SET_USER';
export const SET_USER_USERNAME = 'SET_USER_USERNAME';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_FAVORITES = 'SET_USER_FAVORITES';

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

export const setUser = (value) => {
    return async function(dispatch, getState) {
        dispatch({
            type: SET_USER,
            value
        })
    }
}

// export const setUserUsername = (value) => {
//     return async function(dispatch, getState) {
//         dispatch({
//             type: SET_USER_USERNAME,
//             value
//         })
//     }
// }

// export const setUserPassword = (value) => {
//     return async function(dispatch, getState) {
//         dispatch({
//             type: SET_USER_PASSWORD,
//             value
//         })
//     }
// }

// export const setUserEmail = (value) => {
//     return async function(dispatch, getState) {
//         dispatch({
//             type: SET_USER_EMAIL,
//             value
//         })
//     }
// }

// export const setUserFavorites = (value) => {
//     return async function(dispatch, getState) {
//         dispatch({
//             type: SET_USER_FAVORITES,
//             value
//         })
//     }
// }