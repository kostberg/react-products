import {
    LOGIN_STARTED,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from '../actions/types'

const initState = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false,
    error: false,
    token: localStorage.getItem('id_token') ? localStorage.getItem('id_token') : null
}


export default function auth(state = initState, action) {
  switch (action.type) {
    case LOGIN_STARTED:
    return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
    }
    case LOGIN_SUCCESS:
    return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        error: false,
        token: action.payload.token
    }
    case LOGIN_FAILURE:
    return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        error: action.payload.error
    }
    default:
      return state
  }
}