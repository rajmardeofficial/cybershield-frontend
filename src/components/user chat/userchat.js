import { useState } from "react"
import './userchat.css'
const UserChat=()=>{
    const contacts=[{name:"aditi Thakur",profile:"user.svg"},{name:"aditi Thakur",profile:"user.svg"},{name:"aditi Thakur",profile:"user.svg"},{name:"aditi Thakur",profile:"user.svg"},{name:"aditi Thakur",profile:"user.svg"},{name:"aditi Thakur",profile:"user.svg"},{name:"aditi Thakur",profile:"user.svg"},{name:"aditi Thakur",profile:"user.svg"},{name:"aditi Thakur",profile:"user.svg"},{name:"aditi Thakur",profile:"user.svg"},{name:"aditi Thakur",profile:"user.svg"},{name:"aditi Thakur",profile:"user.svg"}]


    const [Chatporfile,setChatporfile]=useState()
    const [chatname,setChatName]=useState()
    const handlecontactClick=(name,profile)=>{
        setChatName(name)
        setChatporfile(profile)
    }
    return(<>
    <section className="MainchatSection">

        <div className="contacts_Section ">
            <div className=" profile_section">
                <div className="bg-userimg ">

                    <img src="user.svg" alt="user image" className="userimage"/>
                </div>
                <h2>Username</h2>
                <div>
                    <img src="setting.svg" alt="setting" className="settingIcon "/>
                </div>
            </div>
            <div className="bg-white search_contact">
                <input type="search" placeholder="Search.."/>
            </div>
            <div className="w-full" >
                {
                    contacts.map((c)=>
                    <div className="d-flex col text-centre w-100 border border-secondary" onClick={handlecontactClick}>
                         <div>
                        <img src={c.profile} alt="profile image" className="contact_img"/> 
                        </div> 
                        <h3>{c.name}</h3>
                        </div>)
                }
            </div>
        </div>
        <div className="chat-section w-75">
                <div className="contact_onchat">
                    <img src={Chatporfile} alt="profile of contact"/>
                    <h2>{chatname}</h2>
                </div>
                <div className="chat_type_section">
                    <div className="d-flex">
                        <div>
                            <input type="text" placeholder="Type a message.." className="chat_input"/>
                        </div>
                        <div>
                            <img src="attach.svg" alt="attach file" width={25}/>
                            <img src="camera.svg" alt="camera"/>
                            <img src="mic.svg" alt="reacord"/>
                        </div>
                        
                    </div>
                </div>
        </div>
    </section>



    </>)
}

export default UserChat;