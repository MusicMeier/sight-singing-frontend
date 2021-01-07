import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILED,
  LOGOUT_USER
} from '../actions/action.types'

const initialState = {
  access: localStorage.getItem('access'),
  isAuthenticated: null,
  user: null,
  error: null
}

export default function (state = initialState, action) {
  const { type, payload } = action;
  
  switch(type){
    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        // access: payload.token
        user: payload

      }
    case LOGIN_SUCCESS:
      localStorage.setItem('access', payload.token);
        return {
          ...state,
          isAuthenticated: true,
          access: payload.token,
          error: null
        }
    case SIGNUP_SUCCESS:
        localStorage.setItem('access', payload.token);
        return {
          ...state,
          isAuthenticated: true,
          access: payload.token,
          error: null
        }
    case LOGIN_FAILED:
      localStorage.removeItem('access');
      return {
        ...state,
        access: null,
        isAuthenticated: false,
        user: null,
        error: 'incorrect username or password'
      }
    case SIGNUP_FAILED:
    case LOGOUT_USER:
    case AUTHENTICATION_FAILED:
        localStorage.removeItem('access');
        return {
          ...state,
          access: null,
          isAuthenticated: false,
          user: null
        }
    default:
      return state;
  }
}