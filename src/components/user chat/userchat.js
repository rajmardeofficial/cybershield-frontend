import { useState, useEffect } from "react";
import './userchat.css';
import io from 'socket.io-client';
import axios from 'axios'; // Import Axios for making HTTP requests

const UserChat = () => {
    const contacts = [{name:"Aditi Thakur",profile:"user.svg"},{name:"Aditi Kedar",profile:"user.svg"},{name:"Aditi Thakur",profile:"user.svg"},{name:"Aditi Kedar",profile:"user.svg"},{name:"Aditi Thakur",profile:"user.svg"},{name:"Aditi kedar",profile:"user.svg"},{name:"Aditi Thakur",profile:"user.svg"},{name:"Aditi kedar",profile:"user.svg"},{name:"Aditi Thakur",profile:"user.svg"},{name:"Aditi Kedar",profile:"user.svg"},{name:"Aditi Thakur",profile:"user.svg"},{name:"Aditi Thakur",profile:"user.svg"}];
    const socket = io.connect('http://localhost:5000');
    const [Chatporfile, setChatporfile] = useState();
    const [chatname, setChatName] = useState('');
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [showChat,setShowChat]=useState(false);
    const [chatRoom,setChatRoom]=useState("chatname");
    const handlecontactClick  = (e) => {
        setChatName(e.name);
        setChatporfile(e.profile);
        setShowChat(true)
        socket.emit("join_room",chatRoom)       
    };

   
    const sendMessage=async()=>{
        if(inputMessage!==""){
            const messageData={
                room:chatRoom,
                author:'username',
                message:inputMessage,
                time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes()
            }

        await socket.emit("sendMessage",messageData)
        //setMessages((m)=>[...m,messageData])
        }
    }
    useEffect(()=>{
        socket.on("receiveMessage",(data)=>{
            setMessages((m)=>[...m,data])
        })
    },[socket])
  
   
    return (
        <>
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
                    <div className="w-full">
                        {
                            contacts.map((c) =>
                                <div className="contacts " onClick={() => handlecontactClick(c)}>
                                    <div className="ms-3 me-2">
                                        <img src={c.profile} alt="profile image" className="contact_img"/>
                                    </div>
                                    <div>
                                        <h3>{c.name}</h3>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>
                { showChat ?
                    <div className="chat-section w-75">
                        <div className="contact_onchat ">
                            <div>
                                <img src='user.svg' alt="profile of contact" width={40} className="ms-4 bg-white rounded-circle me-3"/>
                            </div>
                            <div>
                                <h2>{chatname}</h2>
                            </div>
                            <div className="">
                                <img src="setting.svg" alt="setting" className="settingIcon2 "/>
                            </div>
                        </div>
                        <div className="text-black">
                            <h2>Messages</h2>
                            <ul>
                                {messages.map((msg, index) => (
                                    <div key={index}>
                                        <strong>{msg.author}:</strong> {msg.message}
                                        <h6>{msg.time}</h6>
                                    </div>
                                ))}
                            </ul>
                        </div>
                        <div className="chat_type_section">
                            <div className="d-flex">
                                <div className="bg-white me-2 rounded-3 ">
                                    <textarea type="text" placeholder="Type a message.." className="chat_input" value={inputMessage}
                                              onChange={(e) => setInputMessage(e.target.value)} onKeyDownCapture={(e)=>{e.key==="Enter" && sendMessage()}}> </textarea>
                                    <img src="send.svg" alt="send message" onClick={sendMessage}/>
                                </div>
                                <div>
                                    <img src="attach.svg" alt="attach file" width={25}/>
                                    <img src="camera.svg" alt="camera"/>
                                    <img src="mic.svg" alt="reacord"/>
                                </div>
                            </div>
                        </div>
                    </div> :
                    <div className="chat-section2">
                        <h1>select to chat</h1>
                    </div>
                }
            </section>
        </>
    );
};

export default UserChat;
