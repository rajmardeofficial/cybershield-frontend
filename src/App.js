import { Routes,Route } from "react-router-dom";
import SignIN from "./components/loginDetails/SignIn/signIn";
import SignUp from "./components/loginDetails/SignUp/signup";
import SkillDetail from "./components/loginDetails/SkillsDetails/skillsDetails";
import OthersDetails from "./components/loginDetails/Othersdetails/othersDetails";
import Assignment from "./components/loginDetails/AssignmentDetails/assignment";
import ChatWAdvct from "./components/advocatesChat/chatwithAvct";
import UserChat from "./components/user chat/userchat";
function App() {
  return (
    <>
 <Routes>
    <Route path='/signIn' element={<SignIN/>}/>
   <Route path="/signup" element={<SignUp/>} />
    <Route path="/skillsDetails" element={<SkillDetail/>}/>
    <Route path="/othersDetails" element={<OthersDetails/>}/>
    <Route path='/assignment' element={<Assignment/>}/>
    <Route path='/chatwithAvct' element={<ChatWAdvct/>} />
</Routes>  
{/*  <UserChat/>  */}
    </>
  );
}

export default App;
