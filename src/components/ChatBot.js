import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsX } from "react-icons/bs"; // Importing the close icon from react-icons/bs

const ChatBot = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      className="container-fluid"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        position: "relative", // Add position relative to the container
      }}
    >
      <div style={{ position: "absolute", top: 0, right: 16, margin: "10px" }}>
        <img src="chatbot_images/x_mark.png"  width='32px' height='32px'/>
      </div>
      <Card style={{ backgroundColor: "#479BFF", width: "98%", height: "90%", marginTop:'32px' }}>
        <Card.Body style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <img
              src="chatbot_images/chatbot_img.png"
              alt="chatbot_img"
              width="400px"
              height="420px"
            />
            <br />
            <br />
            <img
              src="chatbot_images/Chatbot1_img.png"
              alt="chatbot_img"
              width="100px"
              height="100px"
              style={{ marginLeft: "18px" }}
            />{" "}
            <span style={{ fontSize: "26px", fontWeight: "500" }}>
              Chat with Bot
            </span>
          </div>
          <Card style={{ backgroundColor: "white", width: "70%" }}>
            <Card.Body style={{ position: "relative", display: "flex", flexDirection: "column" }}>
              {/* Chat messages go here */}
              {/* Added chat messages here */}
              <div
                style={{
                  backgroundColor: "#479BFF",
                  padding: "10px",
                  borderRadius: "10px",
                  marginBottom: "10px",
                  alignSelf: "flex-start",
                  width: "400px",
                }}
              >
                This is a received message
              </div>
              <div
                style={{
                  backgroundColor: "#F0F0F0",
                  padding: "10px",
                  borderRadius: "10px",
                  marginBottom: "10px",
                  alignSelf: "flex-end",
                  width: "400px",
                  float: "right",
                }}
              >
                This is a sent message
              </div>
              {/* More chat messages can be added here */}
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  width: "97%",
                  marginBottom: "10px",
                }}
              >
                <div style={{ backgroundColor: "#F0F0F0", padding: "12px", borderRadius: "10px" }}>
                  <div style={{ position: "relative" }}>
                    <input
                      type="text"
                      placeholder="Enter a prompt here..."
                      style={{
                        width: "calc(100% - 120px)",
                        padding: "10px",
                        border: "none",
                        borderRadius: "10px",
                        paddingRight: "40px",
                        cursor: "text",
                        backgroundImage: 'url("chatbot_images/pointer_icon.png")',
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 10px center",
                        backgroundSize: "22px 22px",
                        outline: "none",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        transform: "translateY(-50%)",
                        right: "10px",
                      }}
                    >
                      <img
                        src="chatbot_images/paperClip_icon.png"
                        alt="Documents"
                        style={{
                          width: "24px",
                          height: "24px",
                          marginRight: "12px",
                          cursor: "pointer",
                        }}
                      />
                      <img
                        src="chatbot_images/camera_icon.png"
                        alt="Camera"
                        style={{
                          width: "24px",
                          height: "24px",
                          marginRight: "12px",
                          cursor: "pointer",
                        }}
                      />
                      <img
                        src="chatbot_images/microphone_icon.png"
                        alt="Microphone"
                        style={{
                          width: "24px",
                          height: "24px",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ChatBot;
