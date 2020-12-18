import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='nav-bar'>
      <h1 className='header-title'>TheoryHelper</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/SightSinging'>Sight Singing</Link>
      </nav>
    </header>
  );
}

export default Header;
