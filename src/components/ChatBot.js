import React, { useState } from "react";
import Card from "react-bootstrap/Card";

const ChatBot = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState([]);

  const sendMessage = async () => {
    try {
      // Update UI with user's message
      setResponse(prevResponse => [...prevResponse, { message, type: 'sent' }]);
      
      // Send request to backend
      const response = await fetch("http://localhost:8000/getResponse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ promptG: message }),
      });
      
      // Handle response from backend
      const data = await response.json();
      setResponse(prevResponse => [...prevResponse, { message: data.response, type: 'received' }]);
      
      // Clear input field
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

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
        <img src="chatbot_images/x_mark.png" width="32px" height="32px" />
      </div>
      <Card style={{ backgroundColor: "#479BFF", width: "98%", height: "90%", marginTop: "32px" }}>
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
            <span style={{ fontSize: "26px", fontWeight: "500" }}>Chat with Bot</span>
          </div>
          <Card style={{ backgroundColor: "white", width: "70%" }}>
            <Card.Body style={{ position: "relative", display: "flex", flexDirection: "column" }}>
              {/* Chat messages go here */}
              {response.map((item, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: item.type === 'sent' ? "#F0F0F0" : "#479BFF",
                    color: item.type === 'sent' ? "black" : "white",
                    padding: "10px",
                    borderRadius: "10px",
                    marginBottom: "10px",
                    alignSelf: item.type === 'sent' ? "flex-end" : "flex-start",
                    width: "400px",
                    float: item.type === 'sent' ? "right" : "left",
                  }}
                >
                  {item.message}
                </div>
              ))}
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
                        width: "calc(100% - 111px)",
                        padding: "10px",
                        border: "none",
                        borderRadius: "10px",
                        paddingRight: "40px",
                        cursor: "text",
                        outline: "none",
                      }}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                   
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        transform: "translateY(-50%)",
                        right: "10px",
                        cursor: "pointer", // Set cursor to pointer
                      }}
                       // This onClick handler is for the pointer icon
                    >
                      <img
                        src="chatbot_images/pointer_icon.png"
                        alt="Documents"
                        style={{
                          width: "24px",
                          height: "24px",
                          marginRight: "12px",
                          cursor: "pointer",
                        }}
                        onClick={sendMessage}
                      />
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
                        src="chatbot_images/microphone_icon.png" // This is the pointer icon
                        alt="Pointer"
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
