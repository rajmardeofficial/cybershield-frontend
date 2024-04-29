import React from "react";
import Feature6 from "../components/Feature6";
import Feature8 from "../components/Feature8";
import Footer from "../components/Footer";
import CardCarousel from "../components/CardCarousel";
import FirstScreen from "../components/FirstScreen/FirstScreen";


const Home = () => {

  return (<>
  <FirstScreen/>
  <Feature6 />
  <CardCarousel />
    <Feature8 />
  
    <Footer />
    
    </>
    
  );
};

export default Home;
