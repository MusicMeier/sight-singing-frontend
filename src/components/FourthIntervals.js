/* eslint no-undef: 0 */

import React, { useState, useEffect } from 'react';
import utilities from './Utilities'
import { Link } from 'react-router-dom'
import Tuner from './Tuner'

const FourthIntervals = ({intervalNotes}) => {
  const model = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';
  const [showHint, setShowHint] = useState(false)
  const [index, setIndex] = useState(0)
  const [pitch, setPitch] = useState({
    getPitch: () => {},
  })

  useEffect(() => {
    console.log('tuner thing again')
    let mic;

    new p5(instance => {
      instance.setup = () => {
        instance.noCanvas();
        const audioContext = instance.getAudioContext();
        mic = new p5.AudioIn();
        mic.start(() => {
          setPitch(
            ml5.pitchDetection(model, audioContext , mic.stream, () => {})
          )
        });
      }
    })
    
    return () => {
      // this is called when the component is unmounted
      // this is where you do the cleanup
      mic.stop() // whatever the right code to stop the mic is
    }
  }, [])

  const increment = () => {
    if(index < intervalNotes.length -1 ){
      setIndex(index + 1)
    } else if (index === (intervalNotes.length - 1 )){
      setIndex(0)
    }
  }
  
  const toggleHint = () => {
    setShowHint(!showHint)
  }
  
  const handleClick = () => {
    increment()
  }

  let eachNoteObject = utilities.eachIntervalNote(intervalNotes)[index]

  return (
    <>
    <div className='hint-container'>
      <button onClick={handleClick} className='screen-button'>Next</button>
      <button className='hint-button' onClick={toggleHint}>{showHint ? "Hide Hint" : "Show Hint"}</button>
      {
        showHint ? <p className='the-hint'>🎶Wedding March🎶</p> : ""
      }
    </div>
      <div className='interval-card-container'>
        {eachNoteObject}
      </div>
      <div className='button-container-intervals'>
        <div className='tuner-container'>
          <Tuner pitch={pitch} currentIndex={index} noteObject={intervalNotes[index]}/>
        </div>
      </div>
        <footer >
        <Link to='/SecondIntervals' className='footer-button-link'>
          <button className='footer-button'>Second</button>
        </Link>
        <Link to='/ThirdIntervals' className='footer-button-link'>
          <button className='footer-button'>Third</button>
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

export default FourthIntervals;
