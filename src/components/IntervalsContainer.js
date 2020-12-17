import React from 'react';
import Intervals from './Intervals'

const IntervalsContainer = ({notes}) => {
  return (
    <div className='intervals-container'>
      {notes.map(note => {
        return <Intervals note={note} key={note._id}/>
      })}
    </div>
  );
}

export default IntervalsContainer;
