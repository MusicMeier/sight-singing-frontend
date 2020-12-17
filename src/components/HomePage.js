import React, { useState, useEffect } from 'react';
// import IntervalsContainer from './components/IntervalsContainer'
import SightSinging from './SightSinging'

const notesUrl = 'http://localhost:8003/notes'

const HomePage = () => {

  const [ notes, setNotes ] = useState([])

  useEffect(() => {
    fetch(notesUrl)
      .then(response => response.json())
      .then((notes) => setNotes(notes))
  }, [])

  return (
    <div>
      <SightSinging notes={notes}/>
    </div>
  );
}

export default HomePage;
