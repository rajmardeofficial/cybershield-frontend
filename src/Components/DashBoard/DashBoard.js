import { useState } from 'react'
import './App.css'
import Header from './Header'
import Home from './Home'
import { Container, Divider } from 'semantic-ui-react'
import Blog from './Blog'
import LineChart from './LineChart'
import Sidebar from './SideBar'
function DashBoard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
        
      <Header OpenSidebar={OpenSidebar}/>
      <div style={{display:"flex",flexDirection:"column"}}>
      <Container style={{
  border: "2px solid #00FFAA",
  width: "719px",
  height: "91px",
  borderRadius: "15px ",
  marginTop: "20px"

}}>
  <h1 style={{
    fontFamily: "Ubuntu",
    fontSize: "68px",
    fontWeight: 700,
    lineHeight: "78.13px",
    textAlign: "left",
    color: "#16FFB1",

  }}>
    1000 New User Login
  </h1>
</Container>
<Container style={{
  width: "719px",
  height: "100%",
  display:"flex",
  flexDirection:"column",
  borderRadius: "15px ",
  border: "2px solid #BADAFF",
  marginTop:"5px",
  overflowY: "auto", // Make it scrollable vertically
  maxHeight: "700px"
  
}}><div style={{display:"flex",justifyContent:"space-around"}}>
 <h1 style={{
  fontFamily: "Ubuntu",
  fontSize: "40px",
  fontWeight: 500,
  lineHeight: "45.96px",
  textAlign: "left",
  marginTop:"20px"
}}>Blog</h1>

  <input placeholder='Search..' style={{width: "557px",
height: "54px",

borderRadius: "14.11px",
border: "0.71px 0px 0px 0px",
background: "#F0F0F0",

fontFamily: "Ubuntu",
fontSize: "23.23px",
fontWeight: "400",

textAlign: "left",
marginTop:"20px"
}}/>
</div>

{/* <div>
    <div>
        <img src='../image 7.png'/>
        <div><h4>U.S. Court Orders NSO Group to Hand Over Pegasus Spyware Code to WhatsApp</h4></div>
    </div>
</div> */}

    <Blog/>
    <Blog/>
    <Blog/>
    <Blog/>
    <Blog/>
    <Blog/>
    <Blog/>
    <Blog/>
    <Blog/>



</Container>

</div>
<div style={{marginLeft:"10px",marginRight:"10px",marginTop:"20px"}}>
<Container style={{
  width: "520px",
  height: "100%",
  border: "2px solid #BADAFF",
  borderRadius: "15px",
}}>
  <h1 style={{
    color: "#479BFF",
    fontFamily: "Inter",
    fontSize: "55px",
    fontWeight: 700,
    textAlign: "center"
  }}>Earnings</h1>
  <Divider style={{
    backgroundColor: "#479BFF",
    height: "2px"
  }} />
  <div style={{
    display: "flex",
    flexDirection: "column",
    
    alignItems: "center",
    height: "calc(100% - 93px)", // Adjust based on the height of the h1 elements
    gap: "20px"
  }}>
    <div style={{}}>
      <h1 style={{
        width: "341px",
        height: "93px",
        borderRadius: "15px",
        background: "#16FFB1",
        color: "#FFFFFF",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Inter",
        fontSize: "55px",
        fontWeight: 500
      }}>24 min</h1>
    </div>
    <div style={{}}>
      <h1 style={{
        width: "341px",
        height: "93px",
        borderRadius: "15px",
        background: "#479BFF",
        color: "#FFFFFF",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Inter",
        fontSize: "55px",
        fontWeight: 500
      }}>720 INR</h1>
    </div>
    <div style={{
  width: "515px",
  height: "55px",
alignItems:"center",
  background: "#F0F0F0",
  display: "flex",
  justifyContent: "space-between",
 
}}>
  <h2 style={{ margin: "0" }}>1 Hour</h2>
  <img src='../Arrow_drop_down_big.png' alt="arrow icon" />
</div>
<img src="../image 21.png" style={{width:"515px",height:"376px"}}/>

  </div>


</Container>

</div>

      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

    </div>
  )
}

export default DashBoard