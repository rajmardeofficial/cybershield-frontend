import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand' >
                <img src='../logo (1).png'  style={{width:"210px"}}/> 
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <img src='../user-profile-circle.png' className='icon'style={{width:"27px"}}/> Account
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <img src="../message-text.png" className='icon'style={{width:"27px"}}/> Post Blog
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <img src='../file-shield-02.png' className='icon' style={{width:"27px"}}/> Post Cyber Help
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <img src='../message-text-02.png' className='icon' style={{width:"27px"}}/> Chat
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <img src='../sticker.png' className='icon' style={{width:"27px"}}/> Terms & Conditions
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <img src='../file-shield-03.png' className='icon' style={{width:"27px"}}/> Privacy Policy
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <img src='../danger.png' className='icon' style={{width:"27px"}}/> Disclaimer
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <img src='../information-circle-contained.png' className='icon' style={{width:"27px"}}/> About Us
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <img src='../tag.png' className='icon' style={{width:"27px"}}/> Pricing Policy
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar