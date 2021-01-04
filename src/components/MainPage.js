import React from 'react';
import { Link } from 'react-router-dom'

const MainPage = () => {

  return (
    <div className='home-container'>
      <div className='home-ear-training'>
        <h1 className='mainpage-title'>Are you ready<br></br> <strong>to hear</strong> <br></br>what you see?</h1>
      </div>
      <div className='home-sight-singing'>
        <img src="https://i.imgur.com/aVYCFeI.png" alt='bird-singing'/>
        <Link to='/SightSinging'>
          <button className='sight-singing-home'>Sight Singing</button>
        </Link>
      </div>
    </div>
  );
}

export default MainPage;
