/* eslint no-undef: 0 */

import { useState, useEffect } from "react"

function Tuner({noteObject}) {

  const model = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';
  const oscillator = createOscillator(noteObject.frequency[0])
  console.log(noteObject.frequency[0])

  const [pitch, setPitch] = useState({
    getPitch: () => {},
  })
  const [pitchText, setPitchText] = useState("")

  const [shouldDisplaySuccess, setShouldDisplaySuccess] = useState(false)
  const [shouldDisplayPitch, setShouldDisplayPitch] = useState(false)
  const [shouldDisplayPlay, setShouldDisplayPlay] = useState(false)

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

      if (frequency && pitchIsCorrect(frequency)){
        setShouldDisplayPitch(false)
        setShouldDisplaySuccess(true)
      }
    })
  }

  useEffect(() => {
    new p5(instance => {
      instance.setup = () => {
        instance.noCanvas();
        const audioContext = instance.getAudioContext();
        const mic = new p5.AudioIn();
        mic.start(() => {
          setPitch(
            ml5.pitchDetection(model, audioContext , mic.stream, () => setShouldDisplayPlay(true))
          )
        });
      }
    })
  }, [])

  return (
    <div className="Tuner">
      <h1>Can you sing an {noteObject.interval} interval?</h1>
      { shouldDisplayPitch ? <div className="pitch">{pitchText}</div> : "" }
      { shouldDisplaySuccess ? <p className="success">You sang {noteObject.noteName[0]} note!</p> : "" }

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
  volume.gain.value = 0.01
  return oscillator
}

function pitchIsCorrect(frequency){
  const lowerBoundary = 256 // Boundary of current note
  const upperBoundary = 268 // Boundary of current note
  
  return frequency > lowerBoundary && frequency < upperBoundary
}
// console.log(noteObject.lowerBoundary[0])
// console.log(noteObject.upperBoundary[0])