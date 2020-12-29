import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from  'react-redux'
import Login from './Login'

const HomePage = ( {isAuthenticated} ) => {
  console.log(isAuthenticated)
  // const loggedIn = (
  //   <Redirect to='/mainpage'/>
  // )

  // const notLoggedIn = (
  //     <Link to='/login'></Link>
  // )

  return (
    <div>
      <p>Welcome to my Auth Screen Home page</p>
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
