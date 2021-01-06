/* eslint no-undef: 0 */

import { useState, useEffect } from "react"

function Tuner({noteObject, currentIndex, pitch}) {

  const oscillator = createOscillator(noteObject.frequency[0])

  const [pitchText, setPitchText] = useState("")
  const [secondPitchText, setSecondPitchText] = useState("")

  const [shouldDisplaySuccess, setShouldDisplaySuccess] = useState(false)
  const [shouldDisplayPitch, setShouldDisplayPitch] = useState(false)
  const [shouldDisplayPlay, setShouldDisplayPlay] = useState(false)
  const [shouldDisplaySecondSuccess, setShouldDisplaySecondSuccess] = useState(false)
  const [shouldDisplaySecondPitch, setShouldDisplaySecondPitch] = useState(false)
  const [timeOutId, setTimeOutId] = useState(0)
  const [intervalId, setIntervalId] = useState(0)

  const handlePlay = () => {
    oscillator.start();
    let timeOut = setTimeout(() => {
      oscillator.stop()
      setShouldDisplayPlay(false)
      setShouldDisplayPitch(true)
      let interval = setInterval(getPitch, 500) // This won't work
      setIntervalId(interval)
    }, 500)
    setTimeOutId(timeOut)
  }
  
  const getPitch = () => {
    
    pitch.getPitch((err, frequency) => {
      if (frequency && (!shouldDisplaySuccess && !shouldDisplaySecondSuccess)) {
        setPitchText(frequency)
      } else {
        setPitchText("Sing First Pitch")
      }
      
      if (frequency && pitchIsCorrect(frequency, noteObject)){
        setShouldDisplayPitch(false)
        setShouldDisplaySuccess(true)
        setShouldDisplaySecondPitch(true)
      } 
      if (frequency && shouldDisplaySuccess) {
        setSecondPitchText(frequency)
      } else {
        setSecondPitchText("No Pitch detected")
      }
      if(frequency && secondPitchIsCorrect(frequency, noteObject)){
        setShouldDisplaySecondPitch(false)
        setShouldDisplaySecondSuccess(true)
      }
    })
  }

  useEffect(() => {

    setShouldDisplayPlay(true)
    setShouldDisplayPitch(false)
    setShouldDisplaySuccess(false)
    setPitchText("")
    setSecondPitchText("")
    setShouldDisplaySecondPitch(false)
    setShouldDisplaySecondSuccess(false)
    clearInterval(intervalId)
    clearTimeout(timeOutId)
  
  }, [currentIndex]);

  return (
    <div className="Tuner ">
      {/* <h1 className='interval-text'>Can you sing a {noteObject.interval} interval?</h1> */}
      { shouldDisplayPlay 
        ? <button className="play" onClick={handlePlay}>Play Tone</button> 
        : 
          <img 
            src={'https://i.imgur.com/lGdadk6.png'} />
          }
      <div className='pitch-sentences-container'>
        <div className='pitch-sentences'>
          { shouldDisplayPitch ? <div className="pitch">{pitchText}</div> : "" }
          { shouldDisplaySuccess ? <div className='success-container'><p className="success">You sang: </p><p> </p><p className='correct-note'> {noteObject.noteNames[0]}!</p></div> : "" }
          </div>

        <div className='pitch-sentences'>
          { shouldDisplaySecondPitch ? <div className="second-pitch">{secondPitchText}</div> : "" }
          { shouldDisplaySecondSuccess ? <div className='success-container-1'><p className="second-success">You sang: </p><p className='correct-note'> {noteObject.noteNames[1]}!</p></div> : "" }
        </div>
      </div>

    </div>
  );
}

export default Tuner;

function createOscillator(frequency) {
  const audio = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audio.createOscillator();

  oscillator.type = 'square';
  oscillator.frequency.setValueAtTime(frequency, audio.currentTime);
  oscillator.connect(audio.destination);
  const volume = audio.createGain()
  oscillator.connect(volume)
  volume.connect(audio.destination)
  volume.gain.value = 0.1
  return oscillator
}

function pitchIsCorrect(frequency, noteObject){
  const lowerBoundaryTuner = noteObject.lowerBoundary[0]// Boundary of first note
  const upperBoundaryTuner = noteObject.upperBoundary[0]// Boundary of first note
  
  return frequency > lowerBoundaryTuner && frequency < upperBoundaryTuner
}

function secondPitchIsCorrect(frequency, noteObject){
  const secondLowerBoundaryTuner = noteObject.lowerBoundary[1]// Boundary of second note
  const secondUpperBoundaryTuner = noteObject.upperBoundary[1]// Boundary of second note
  
  return frequency > secondLowerBoundaryTuner && frequency < secondUpperBoundaryTuner
}
