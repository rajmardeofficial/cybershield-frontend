import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <img src='../user-profile-circle.png'  className='icon' style={{width:"40px"}}/> <span style={{
  fontFamily: "Ubuntu",
  fontSize: "25px",
  fontWeight: 400,
  
  textAlign: "left"
}}>Hi User...</span>

        </div>
        <div className='header-right' >
            <img src='../Icon (1).png'className='icon'/>
            <img src='../Icon.png' className='icon'/>
       
        </div>
    </header>
  )
}

export default Header