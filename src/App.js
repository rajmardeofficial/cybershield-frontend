import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Cardpg from "./Pages/Cardpg";

function App() {
  return (
    <Routes>
    <Route path="/" element={ <Home />} />
    <Route path="cardpg" element={ <Cardpg/>} />
    </Routes>
  );
}

export default App;
