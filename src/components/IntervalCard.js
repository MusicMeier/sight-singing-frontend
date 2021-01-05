import React from 'react';

const IntervalCard = ({note}) => {
  return (
    <div key={note._id} className='interval-card'>
      <p className='card-title'>Sing the Interval Below:</p>
      <img src={note.url} alt={note.name}/>
    </div>
  );
}

export default IntervalCard;
