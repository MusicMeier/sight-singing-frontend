import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions/action.auth'

const Login = ({ login, check_authenticated, error }) => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })

  const onChange = (event) => setLoginData({...loginData,
  [event.target.name]: event.target.value})

  const handleSubmit = (event) => {
    event.preventDefault()
    login(username, password)
    console.log('handleSubmit')
  }

  const {username, password } = loginData;
  return (
    <>
      <div className='login-page'>
        <div className='form-section-1'>
          <h1 className='account-title'>Sign in Below:</h1>
        </div>
        <div className='form-section-2'>
          <form onSubmit={handleSubmit} className='login-form'>
            <input 
              type="text" 
              onChange={(event) => onChange(event)} 
              autoComplete='on'
              name='username'
              placeholder='username' />
              <br />
            <input 
              type="password" 
              onChange={(event) => onChange(event)} 
              autoComplete='on'
              name='password'
              placeholder='password' />
            <button type='submit' className='login-button'>LOGIN</button>
          </form>
            { error ? <p className='error-message-login'>{error}</p> : null }
        </div>
        <div className='form-section-3'>
          <h6 className='switch-account'>Don't have an account <Link to='/signup'>Create Account</Link></h6>
        </div>
      </div>
    </>
  );
}

const mapDispatchProps = (state) => {
  return {
    isAuthenticated: state.auth.check_authenticated,
    error: state.auth.error
  }
}

export default connect(mapDispatchProps, {login})(Login);
