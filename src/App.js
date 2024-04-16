import React from 'react';
import NavBarComp from './components/FirstScreen/NavBarComp/NavBarComp';
import GreenComp from './components/FirstScreen/GreenComp/GreenComp';
import GreyComp from './components/FirstScreen/GreyComp/GreyComp';
import BlueComp from './components/FirstScreen/BlueComp/BlueComp';
import Cara from './components/FirstScreen/Carousel/Cara';

function App() {
  return (
    <>
      
        <NavBarComp />
      
      <div style={{ marginTop:"1.5%", marginBottom: '20px' }}>
        <GreenComp />
      </div>
      <div style={{ marginBottom: '20px', width: '90%', marginLeft: '5%' }}>
        <GreyComp />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <BlueComp />
      </div>
      <Cara />
      
    </>
  );
}

export default App;
