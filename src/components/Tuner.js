/* eslint no-undef: 0 */

import { useState, useEffect } from "react"

function Tuner({noteObject, nextButton}) {

  const model = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';
  const oscillator = createOscillator(noteObject.frequency[0])

  const [pitch, setPitch] = useState({
    getPitch: () => {},
  })
  const [pitchText, setPitchText] = useState("")
  const [secondPitchText, setSecondPitchText] = useState("")

  const [shouldDisplaySuccess, setShouldDisplaySuccess] = useState(false)
  const [shouldDisplayPitch, setShouldDisplayPitch] = useState(false)
  const [shouldDisplayPlay, setShouldDisplayPlay] = useState(false)
  const [shouldDisplaySecondSuccess, setShouldDisplaySecondSuccess] = useState(false)
  const [shouldDisplaySecondPitch, setShouldDisplaySecondPitch] = useState(false)

  const handlePlay = () => {
    oscillator.start();
    setTimeout(() => {
      oscillator.stop()
      setShouldDisplayPlay(false)
      setShouldDisplayPitch(true)
      setInterval(getPitch, 500) // This won't work
    }, 500)
  }
  
  const getPitch = () => {
    
    pitch.getPitch((err, frequency) => {
      if (frequency) {
        setPitchText(frequency)
      } else {
        setPitchText("No pitch detected")
      }
      
      if (frequency && pitchIsCorrect(frequency, noteObject)){
        setShouldDisplayPitch(false)
        setShouldDisplaySuccess(true)
        setShouldDisplaySecondPitch(true)
      } 
      if (frequency) {
        console.log(shouldDisplaySuccess)
        setSecondPitchText(frequency)
      } else {
        setSecondPitchText("No Pitch detected")
      }
      if(frequency && secondPitchIsCorrect(frequency, noteObject)){
        setShouldDisplaySecondPitch(false)
        setShouldDisplaySecondSuccess(true)
        // willThisHelpRemount()
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
  
  }, [nextButton]);

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
            ml5.pitchDetection(model, audioContext , mic.stream, () => setShouldDisplayPlay(true))
          )
        });
      }
    })
    
    return () => {
      // this is called when the component is unmounted
      // this is where you do the cleanup
      mic.stop() // whatever the right code to stop the mic is
    }
  }, [nextButton])

  return (
    <div className="Tuner ">
      <h1 className='interval-text'>Can you sing a {noteObject.interval} interval?</h1>
      { shouldDisplayPitch ? <div className="pitch">{pitchText}</div> : "" }
      { shouldDisplaySuccess ? <p className="success">You sang: {noteObject.noteNames[0]}!</p> : "" }

      { shouldDisplaySecondPitch ? <div className="second-pitch">{secondPitchText}</div> : "" }
      { shouldDisplaySecondSuccess ? <p className="second-success">You sang: {noteObject.noteNames[1]}!</p> : "" }

      { shouldDisplayPlay ? <button className="play" onClick={handlePlay}>Play Tone</button> : "" }
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

