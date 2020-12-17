import React from 'react';

const Intervals = ({note}) => {
  return (
    <div className='interval-card'>
      <p className='card-title'>Sing the Interval Below:</p>
      <img src={note.url} alt={note.name}/>
    </div>
  );
}

export default Intervals;
