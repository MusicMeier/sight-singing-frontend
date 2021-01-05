import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import Login from './Login'

const SightSinging = ({isAuthenticated}) => {

  return (
    <> 
      <div className='sight-singing-container'>
        <div className='sight-singing-title'>
          <p>Choose an Interval!</p>
          <img src='https://www.musical-u.com/wp-content/uploads/2013/03/intervals-1.jpg' alt='bird-singing' />
        </div>
        <div className='buttons-container'>
          <Link to='/SecondIntervals' className='button-link'>
            <button className='sight-singing-button'>Second</button>
          </Link>
          <Link to='/ThirdIntervals' className='button-link'>
            <button className='sight-singing-button'>Third</button>
          </Link>
          <Link to='/FourthIntervals' className='button-link'>
            <button className='sight-singing-button'>Fourth</button>
          </Link>
          <Link to='/FifthIntervals' className='button-link'>
            <button className='sight-singing-button'>Fifth</button>
          </Link>
          <Link to='/SixthIntervals' className='button-link'>
            <button className='sight-singing-button'>Sixth</button>
          </Link>
          <Link to='/SeventhIntervals' className='button-link'> 
            <button className='sight-singing-button'>Seventh</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SightSinging;
