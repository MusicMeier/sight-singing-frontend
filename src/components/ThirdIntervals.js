import React from 'react';
import utilities from './Utilities'
import { Link } from 'react-router-dom'

const ThirdIntervals = ({intervalNotes}) => {

  return (
    <>
      <div className='interval-card-container'>
        {utilities.eachIntervalNote(intervalNotes)}
      </div>
        <footer >
        <Link to='/SecondIntervals' className='footer-button-link'>
          <button className='footer-button'>Second</button>
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

export default ThirdIntervals;