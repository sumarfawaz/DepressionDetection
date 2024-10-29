// src/components/Chatbot.js

import React, { useState, useEffect } from "react";
import { FaComments, FaRobot } from "react-icons/fa";

import Message from "./Message";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const predefinedResponses = {
    hello: "Hi there! How can I help you?",
    howAreYou: "I'm just a bot, but thanks for asking!",
    // Add more predefined responses based on user input
  };

  const addMessage = (text, sender) => {
    setMessages((prevMessages) => [...prevMessages, { text, sender }]);
  };

  const handleUserInput = (inputText) => {
    addMessage(`You: ${inputText}`, "user");

    setIsTyping(true);

    setTimeout(() => {
      const lowerCaseInput = inputText.toLowerCase();
      const botResponse =
        predefinedResponses[lowerCaseInput] ||
        "I'm sorry, I didn't understand that.";

      addMessage(`EmoAssist: ${botResponse}`, "bot");
      setIsTyping(false);
    }, 1000); // Simulated delay for bot's response
  };

  useEffect(() => {
    const handleBodyClass = () => {
      if (isChatOpen) {
        document.body.classList.add("chat-open");
      } else {
        document.body.classList.remove("chat-open");
      }
    };

    handleBodyClass();

    return () => {
      document.body.classList.remove("chat-open");
    };
  }, [isChatOpen]);

  return (
    <div className={`chatbot ${isChatOpen ? "open" : ""}`}>
      <button
        className="toggle-button"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        {isChatOpen ? <FaComments /> : <FaRobot />}
      </button>
      <div className="messages">
        {messages.map((message, index) => (
          <Message key={index} text={message.text} sender={message.sender} />
        ))}
        {isTyping && (
          <Message text="EmoAssist is typing..." sender="EmoAssist" />
        )}
      </div>
      <input
        type="text"
        placeholder="Questions?"
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleUserInput(e.target.value);
            e.target.value = "";
          }
        }}
      />
    </div>
  );
};

export default Chatbot;
