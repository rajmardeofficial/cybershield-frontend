import { useState, useEffect } from "react";
import "./userchat.css";
import io from "socket.io-client";
import axios from "axios";
import { Dimmer, Image, Loader, Segment } from "semantic-ui-react";
var selectedChatCompare;
const socket = io.connect("http://localhost:8000");
const UserChat = () => {
  const [contacts,setContacts]=useState([])
  const [Chatporfile, setChatporfile] = useState();
  const [chatname, setChatName] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [loader, setLoader] = useState(false);
  const [chatId, setChatId] = useState("");
  const [socketConnected, setSocketConnected] = useState(false);
  const username = localStorage.getItem("username");
  const userId = localStorage.getItem("userId");
  const AdvctChatId = localStorage.getItem("advctId");
  const token = localStorage.getItem("token");
const [images, setImages] = useState([]);
  const advctData = JSON.parse(localStorage.getItem("advctData"));
  console.log(advctData)
  useEffect(() => {
    const fetchProfileImages = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(
          `http://localhost:8000/users/${userId}/upload`,
          config
        );
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching profile images:", error);
      }
    };

    fetchProfileImages();
  }, [userId, token]);

  useEffect(() => {
    setContacts((c) => [...c, advctData]);
  }, []);
  const handlecontactClick = async (e) => {
    setChatName(e.advctName);
    setChatporfile(e.advctPic);
    setShowChat(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        "http://localhost:8000/api/chat",
        { userId: AdvctChatId },
        config
      );
      console.log(data.latestMessage.content);
     
      console.log(data._id)
      localStorage.setItem("chatId", data._id);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    socket.emit("setUp", userId);
    socket.on("connected", () => setSocketConnected(true));
  }, []);

  const chatID = localStorage.getItem("chatId")
  const fetchMessage = async () => {
    if (!chatID) {
      return;
    }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      setChatId(chatID)
      const { data } = await axios.get(
        `http://localhost:8000/api/message/${chatID}`,
        config
      );
      setMessages(data);
      console.log(data)
      setLoader(false);
      socket.emit("join chat", chatId);
    } catch (error) {
      setLoader(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMessage();

    selectedChatCompare = chatID;
    // eslint-disable-next-line
  }, [chatID]);

  const handleInputmessage = (e) => {
    setInputMessage(e.target.value);
  };
  
  
 
  // useEffect(() => {
  //   socket.on("message recieved", (newMessageRecieved) => {
  //     if (selectedChatCompare._id == newMessageRecieved._id) {
  //       setMessages((m) => [...m, newMessageRecieved]);
  //     }
  //   });
  // }, [socket]);

   useEffect(() => {
     socket.on("message recieved", (newMessageRecieved) => {
       if (
         !selectedChatCompare ||
         selectedChatCompare !== newMessageRecieved.chat._id
       ) {
         return;
       } else {
         setMessages((prevMessages) => [...prevMessages, newMessageRecieved]);
       }
     });
   }, []);
  const sendMessage = async (event) => {
    if (inputMessage) {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await axios.post(
          "http://localhost:8000/api/message",
          {
            content: inputMessage,
            chatId: chatId,
          },
          config
        );
        socket.emit("new Message", data)
        setMessages([...messages, data]);
         setInputMessage("");
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <section className="MainchatSection">
        <div className="contacts_Section ">
          <div className=" profile_section">
            <div className="rounded-2xl">
              {images ? (
                images.map((image) => (
                  <div key={image.id} className="bg-userimg ">
                    <img
                      src={`data:image/jpeg;base64,${image.data}`}
                      alt={image.name}
                      width={50}
                      height={50}
                    />
                  </div>
                ))
              ) : (
                <img src="user.svg" alt="user image" className="userimage" />
              )}
            </div>
            <h2>{username}</h2>
            <div>
              <img src="setting.svg" alt="setting" className="settingIcon " />
            </div>
          </div>
          <div className="bg-white search_contact">
            <input type="search" placeholder="Search.." />
          </div>
          <div className="w-full">
            {contacts.map((c) => (
              <div className="contacts " onClick={() => handlecontactClick(c)}>
                <div className="ms-3 me-5 contact_profile">
                  <img
                    src={c.advctPic}
                    alt="profile image"
                    className="contact_img"
                    width={50}
                  />
                </div>
                <div>
                  <h3>{c.advctName}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        {showChat ? (
          <div className="chat-section w-75">
            <div className="contact_onchat ">
              <div>
                <img
                  src="user.svg"
                  alt="profile of contact"
                  width={40}
                  className="ms-4 bg-white rounded-circle me-3"
                />
              </div>
              <div>
                <h2>{chatname}</h2>
              </div>
              <div className="">
                <img
                  src="setting.svg"
                  alt="setting"
                  className="settingIcon2 "
                />
              </div>
            </div>
            <div className="text-black MessageBox m-4">
              {loader ? (
                <Segment>
                  <Dimmer active inverted>
                    <Loader size="large">Loading</Loader>
                  </Dimmer>

                  <Image src="/images/wireframe/short-paragraph.png" />
                </Segment>
              ) : null}
              <div>
                <ul>
                  {messages.map((msg, index) => (
                    <div key={index} className="Message_Display ">
                      <div
                        className={
                          msg.sender._id == userId
                            ? "messages fs-4 mb-1 px-4 rounded"
                            : "text-2xl fs-4 mb-1 "
                        }
                      >
                        <p>
                          {/* {msg.sender._id == userId ? username : chatname} */}
                        </p>

                        <p>{msg.content}</p>

                        <h6>{msg.time}</h6>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
            <div className="chat_type_section">
              <div className="d-flex">
                <div className="bg-white me-2 rounded-3 ">
                  <textarea
                    type="text"
                    placeholder="Type a message.."
                    className="chat_input"
                    value={inputMessage}
                    onChange={handleInputmessage}
                    onKeyDownCapture={(e) => {
                      e.key === "Enter" && sendMessage();
                    }}
                  >
                    {" "}
                  </textarea>
                  <img
                    src="send.svg"
                    alt="send message"
                    onClick={sendMessage}
                  />
                </div>
                <div>
                  <img src="attach.svg" alt="attach file" width={25} />
                  <img src="camera.svg" alt="camera" />
                  <img src="mic.svg" alt="reacord" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="chat-section2">
            <h1>select to chat</h1>
          </div>
        )}
      </section>
    </>
  );
};

export default UserChat;
