import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from  'react-redux'
import Login from './Login'

const HomePage = ( {isAuthenticated} ) => {

  return (
    <div>
      {/* <p>Welcome to my Auth Screen Home page</p> */}
      <div>
        <span>
          <> {isAuthenticated ? <Redirect to='/mainpage'/> : <Login />}</>
        </span>
      </div>
    </div>
  );
}

const mapDispatchProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}
export default connect(mapDispatchProps)(HomePage);
