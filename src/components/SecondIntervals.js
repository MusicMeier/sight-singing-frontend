import React from 'react';
import utilities from './Utilities'
import { Link } from 'react-router-dom'

const SecondIntervals = ({intervalNotes}) => {

  return (
    <>
      <div className='interval-card-container'>
          {utilities.eachIntervalNote(intervalNotes)[0]}
      </div>
      <div className='button-container-intervals'>
        <button className='screen-button'>Next</button>
      </div>
      <footer >
        <Link to='/ThirdIntervals' className='footer-button-link'>
          <button className='footer-button'>Third</button>
        </Link>
        <Link to='/FourthIntervals' className='footer-button-link'>
          <button className='footer-button'>Fourth</button>
        </Link>
        <Link to='/FifthIntervals' className='footer-button-link'>
          <button className='footer-button'>Fifth</button>
        </Link>
        <Link to='/SixthIntervals' className='footer-button-link'>
          <button className='footer-button'>Sixth</button>
        </Link>
        <Link to='/SeventhIntervals' className='footer-button-link'> 
          <button className='footer-button'>Seventh</button>
        </Link>
      </footer>
    </>
  );
}

export default SecondIntervals;
