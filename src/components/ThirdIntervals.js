import React, { useState } from 'react';
import utilities from './Utilities'
import { Link } from 'react-router-dom'
import Tuner from './Tuner'

const ThirdIntervals = ({intervalNotes}) => {
  const [showHint, setShowHint] = useState(false)
  const [index, setIndex] = useState(0)

  const increment = () => {
    if(index < intervalNotes.length -1 ){
      setIndex(index + 1)
    } else if (index === (intervalNotes.length - 1 )){
      setIndex(0)
    }
  }
  
  const toggleHint = () => {
    console.log('you clicked me')
    setShowHint(!showHint)
  }
  
  const handleClick = () => {
    increment()
  }

  let eachNoteObject = utilities.eachIntervalNote(intervalNotes)[index]

  return (
    <>
    <div className='hint-container'>
      {
        showHint ? <p>🎶When the Saints Go Marching in🎶</p> : ""
      }
      <button className='hint-button' onClick={toggleHint}>{showHint ? "Hide Hint" : "Show Hint"}</button>
    </div>
      <div className='interval-card-container'>
        {eachNoteObject}
      </div>
      <div className='button-container-intervals'>
        <div className='tuner-container'>
          <Tuner noteObject={intervalNotes[index]}/>
        </div>
        <div>
          <button onClick={handleClick} className='screen-button'>Next</button>
        </div>
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
