import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signup } from '../actions/action.auth'

const SignUp = ({signup, history}) => {
  const [ signupData, setSignUpData ] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  })

  const onChange = (event) => setSignUpData({...signupData,
    [event.target.name]: event.target.value})
    
    const onSubmit = (event) => {
      event.preventDefault()
      signup(username, email, firstName, lastName, password);
      history.push('/mainpage')
    }
    
  const { username, email, firstName, lastName, password } = signupData
  return (
    <div className='signup-page'>
      <div className='section-1-signup'>
        <h1>Sign in to your account</h1>
      </div>
      <div className='section-2-signup'>
        <form onSubmit={(event) => onSubmit(event)} className="signup-form">
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='username'
            placeholder='username' />
            <br />
          <input 
            type="email" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='email'
            placeholder='email' />
            <br />
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='firstName'
            placeholder='first name' />
            <br />
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='lastName'
            placeholder='last name' />
            <br />
          <input 
            type="password" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='password'
            placeholder='password' />
          <button type='submit' className='signup-button'>Sign Up</button>
        </form>
      </div>
      <div className='section-3-signup'>
        <h6>Already have an account? <Link to='/login'>Login</Link></h6>
      </div>
    </div>
  );
}

export default connect(null, {signup})(SignUp);
