import React from 'react';
import IntervalsContainer from "./IntervalsContainer";

const SightSinging = ({notes}) => {

  return (
    <>
    <div>
      <p>Choose an Interval!</p>
    </div>
    <div>
      <IntervalsContainer notes={notes}/>
      <button className='sight-singing-button'>Second</button>
      <button className='sight-singing-button'>Third</button>
      <button className='sight-singing-button'>Fourth</button>
      <button className='sight-singing-button'>Fifth</button>
      <button className='sight-singing-button'>Sixth</button>
      <button className='sight-singing-button'>Seventh</button>
    </div>
    </>
  );
}

export default SightSinging;
