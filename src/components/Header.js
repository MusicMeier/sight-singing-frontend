import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout} from '../actions/action.auth'
import Login from './Login'

const Header = ({logout}) => {
  return (
    <header className='nav-bar'>
      <h1 className='header-title'>KeyIntervals</h1>
      <nav>
        <Link to='/SightSinging'>Sight Singing</Link>
        <Link to='/'>Home</Link>
        {/* <Link to='/login'>Login</Link> */}
        {/* <Link to='/signup'>Sign Up</Link> */}
        <Link onClick={logout} to='/'>Logout</Link>
      </nav>
    </header>
  );
}

export default connect(null, {logout})(Header);
