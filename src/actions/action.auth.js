import axios from 'axios'

import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILED,
  LOGOUT_USER
} from '../actions/action.types'

export const signup = (username, email, firstName, lastName, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-type": 'application/json'
    }
  };
  
  const body = JSON.stringify({username, email, firstName, lastName, password});
  
  try {
    const response =  await axios.post(
      'http://localhost:8003/api/auth/signup',
      body,
      config
      );
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: response.data,
      })
      dispatch(check_authenticated());
      console.log('user created')
    } catch (error) {
      dispatch({
        type: SIGNUP_FAILED
      });
  }
}

export const login = (username, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-type": 'application/json'
    }
  };
  
  const body = {username, password};
  
  try {
    const response =  await axios.post(
      'http://localhost:8003/api/auth/login',
      body,
      config
      );
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      })
      console.log('user logged in')
    } catch (error) {
      dispatch({
        type: LOGIN_FAILED
      });
    }
  }
  

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  })
}

export const check_authenticated = () => async (dispatch) => {
  if(localStorage.getItem('access')) {
    const tokenCheck =  {token: localStorage.getItem('access')}
    try {
      if (tokenCheck.token !== null) {
        dispatch({
          type: AUTHENTICATION_SUCCESS,
          payload: tokenCheck,
        })
      }
    } catch (error) {
      dispatch({
        type: AUTHENTICATION_FAILED
      })
    }
  } else {
    dispatch({
      type: AUTHENTICATION_FAILED
    })
  }

}