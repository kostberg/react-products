import {
    LOGIN_STARTED,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from './types'

export default function loginUser(username, password) {

    let config = {
      method: 'POST',
      headers: { 'Content-Type':'application/x-www-form-urlencoded' },
      body: `username=${username}&password=${password}`
    }
  
    return dispatch => {
      // Dispatch loginStarted to kickoff the call to the API
      dispatch(loginStarted())
  
      return fetch('http://mern-authenticator.herokuapp.com/api/auth/login', config)
        .then(response => response.json())
        .then(({ token, error }) =>  {
          if (error) {
            // If there was a problem, dispatch the error condition
            dispatch(loginFailure(error))
            return
          } else {
            // If login was successful, set the token in local storage
            localStorage.setItem('id_token', token)
            // Dispatch the success action
            dispatch(loginSuccess(token))
          }
        }).catch(err => console.log("Error: ", err))
    }
}

const loginStarted = () => {
    return {
        type: LOGIN_STARTED,
    }
  }

const loginSuccess = token => {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            id_token: token
        }      
    }
  }
  
const loginFailure = error => {
    return {
        type: LOGIN_FAILURE,
        payload: {
            error
        }
    }
}