import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout} from '../actions/action.auth'
import Login from './Login'

const Header = ({logout, isAuthenticated}) => {
  return (
    <header className='nav-bar'>
      <h1 className='header-title'>KeyIntervals</h1>
      <nav>
        { isAuthenticated 
          ? <Redirect to='/SightSinging'/> 
          
          : <Link to='/'>Sight Singing</Link>
        }
        <Link to='/'>Home</Link>
        {/* <Link to='/login'>Login</Link> */}
        {/* <Link to='/signup'>Sign Up</Link> */}
        <Link onClick={logout} to='/'>Logout</Link>
      </nav>
    </header>
  );
}

export default connect(null, {logout})(Header);
