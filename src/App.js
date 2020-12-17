import './App.css';
import { useState, useEffect } from 'react'
import IntervalsContainer from './components/IntervalsContainer'

const notesUrl = 'http://localhost:8003/notes'

function App() {
  const [ notes, setNotes ] = useState([])

  useEffect(() => {
    fetch(notesUrl)
      .then(response => response.json())
      .then((notes) => setNotes(notes))
  }, [])

  return (
    <div className="App">
      <IntervalsContainer notes={notes}/>
    </div>
  );
}

export default App;
