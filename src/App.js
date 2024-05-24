
import { Routes,Route } from "react-router-dom";
import SignIN from "./components/loginDetails/SignIn/signIn";
import SignUp from "./components/loginDetails/SignUp/signup";
import SkillDetail from "./components/loginDetails/SkillsDetails/skillsDetails";
import OthersDetails from "./components/loginDetails/Othersdetails/othersDetails";
import Assignment from "./components/loginDetails/AssignmentDetails/assignment";
import ChatWAdvct from "./components/advocatesChat/chatwithAvct";
import UserChat from "./components/user chat/userchat";
import Home from "./Pages/Home";
import Cardpg from "./Pages/Cardpg";
import DashBoard from "./components/DashBoard/DashBoard";
import { useEffect, useState } from "react";

function App() {
   const [access, setAccess] = useState(false);
   useEffect(() => {
     const token = localStorage.getItem("token");

     if (token) {
       setAccess(true);
     }
   }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cardpg" element={<Cardpg />} />
        <Route path="/signIn" element={<SignIN />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/skillsDetails" element={<SkillDetail />} />
        <Route path="/othersDetails" element={<OthersDetails />} />
        <Route path="/assignment" element={<Assignment />} />
        <Route path={access?"/chatwithAvct":"/"} element={<ChatWAdvct />} />
        <Route path="/userchat" element={<UserChat />} />
        <Route path="/DashBoard" element={<DashBoard />} />
      </Routes>
    </>
  );
}
export default App;
