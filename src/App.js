import React from 'react';
import NavBarComp from './Components/FirstScreen/NavBarComp/NavBarComp';
import GreenComp from './Components/FirstScreen/GreenComp/GreenComp';
import GreyComp from './Components/FirstScreen/GreyComp/GreyComp';
import BlueComp from './Components/FirstScreen/BlueComp/BlueComp';
import Cara from './Components/FirstScreen/Carousel/Cara';
import ChatWAdvct from './Components/FirstScreen/SecondScreen/chatwithAvct';
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
      {/* <ChatWAdvct/> */}
    </>
  );
}

export default App;
