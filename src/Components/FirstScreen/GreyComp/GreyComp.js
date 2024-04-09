import React from 'react';
import './GreyComp.css';

function GreyComp() {
  return (
    <div className="containerbloc">
      <div className="greyblock">
        <img src='../Telegram App.png' alt="Telegram"/>
        <p className='greytext'>Chat with Advocates</p>
      </div>
      <div className="greyblock">
        <img src='../Phone.png' alt="Phone"/>
        <p className='greytext'>Talk to Advocates</p>
      </div>
      <div className="greyblock">
        <img src='../Cyber Security.png' alt="Cyber Security"/>
        <p className='greytext'>Cyber Tips</p>
      </div>
      <div className="greyblock">
        <img src='../Newspaper.png' alt="Newspaper"/>
        <p className='greytext'>Cyber News</p>
      </div>
    </div>
  );
}

export default GreyComp;
