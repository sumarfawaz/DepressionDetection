// ChatComponent.tsx
import React, { useState } from "react";
import axios from "axios";
import { FaComments, FaRobot, FaRocket } from "react-icons/fa";

const ChatComponent: React.FC = () => {
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = async () => {
    if (userMessage.trim() === "") return;

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/chat", {
        message: userMessage,
      });

      const chatResponse = response.data.response;

      setChatHistory((prevHistory) => [
        ...prevHistory,
        { role: "user", content: "You : " + userMessage },
        { role: "bot", content: "EmoAssist : " + chatResponse },
      ]);

      setUserMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <>
    
      <div id="chatContainer">
        <div id="chatSection" className="shadow p-3 justify-content-end">
          <div>
            <h5 id="chatHeader">EmoAssist is here to help!</h5>

            <div className="chat-container">
              {chatHistory.map((item, index) => (
                <div
                  key={index}
                  className={`message ${
                    item.role === "user" ? "user-message" : "bot-message"
                  }`}
                >
                  {item.content}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id="promptSection">
          <input
            id="messageBox"
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Talk to me..."
          />
          <button id="sendButton" onClick={sendMessage}>
            <FaRocket />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatComponent;
