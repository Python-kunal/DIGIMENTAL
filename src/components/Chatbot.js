import React, { useRef, useState, useEffect } from "react";
import "./Chatbot.css";

// Simple responses and resources (customize as needed)
const responses = {
  "hi": "Hello! How can I support you today?",
  "hello": "Hi there! How are you feeling?",
  "help": "I'm here to help. Can you tell me more about what's on your mind?",
  "stressed": "I'm sorry to hear that you're feeling stressed. Would you like some relaxation tips or to talk about it?",
  "anxious": "Anxiety can be tough. Remember to take deep breaths. Would you like some resources or coping strategies?",
  "overwhelmed": "It's okay to feel overwhelmed sometimes. Try breaking tasks into smaller steps and taking breaks.",
  "study help": "For study help, try the Pomodoro technique: 25 minutes focused work, 5 minutes break. Want more tips?",
  "bye": "Take care! Remember, I'm always here if you need to talk.",
};

const resources = {
  "relaxation tips": `<ul>
    <li>Take deep breaths</li>
    <li>Go for a short walk</li>
    <li>Listen to calming music</li>
    <li>Try a short meditation</li>
  </ul>`,
  "coping strategies": `<ul>
    <li>Talk to a friend or family member</li>
    <li>Write down your thoughts</li>
    <li>Practice mindfulness</li>
    <li>Take a break and do something you enjoy</li>
  </ul>`,
  "study tips": `<ul>
    <li>Set small, achievable goals</li>
    <li>Use the Pomodoro technique</li>
    <li>Eliminate distractions</li>
    <li>Reward yourself after completing tasks</li>
  </ul>`,
};

function getResponse(message) {
  const msg = message.toLowerCase();
  if (msg.includes("relax") || msg.includes("relaxation")) {
    return { text: "Here are some relaxation tips:", resources: resources["relaxation tips"] };
  }
  if (msg.includes("cope") || msg.includes("coping")) {
    return { text: "Here are some coping strategies:", resources: resources["coping strategies"] };
  }
  if (msg.includes("study")) {
    return { text: "Here are some study tips:", resources: resources["study tips"] };
  }
  for (let key in responses) {
    if (msg.includes(key)) {
      return { text: responses[key] };
    }
  }
  return { text: "I'm here to listen. Can you tell me more or try rephrasing your message?" };
}

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: `Hi! I'm MindCare, your mental health support companion. How are you feeling today? 🌟`,
      quick: true,
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const handleSend = (msg) => {
    if (!msg.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text: msg }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const response = getResponse(msg);
      let fullResponse = response.text;
      if (response.resources) fullResponse += response.resources;
      setMessages((prev) => [...prev, { sender: "bot", text: fullResponse }]);
      setTyping(false);
    }, 1200 + Math.random() * 800);
  };

  const handleQuick = (msg) => handleSend(msg);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend(input);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <div className="status-indicator"></div>
        <h2>MindCare Assistant</h2>
        <p>Your Mental Health Support Companion</p>
      </div>
      <div className="chat-messages" ref={chatRef}>
        {messages.map((m, i) => (
          <div className={`message ${m.sender}`} key={i}>
            <div className={`avatar ${m.sender === "bot" ? "bot-avatar" : "user-avatar"}`}>
              {m.sender === "bot" ? "MC" : "You"}
            </div>
            <div className="message-bubble">
              <span dangerouslySetInnerHTML={{ __html: m.text }} />
              {m.quick && (
                <div className="quick-responses">
                  <button className="quick-response" onClick={() => handleQuick("I'm feeling stressed")}>Feeling Stressed</button>
                  <button className="quick-response" onClick={() => handleQuick("I'm anxious")}>Anxious</button>
                  <button className="quick-response" onClick={() => handleQuick("Need study help")}>Study Help</button>
                  <button className="quick-response" onClick={() => handleQuick("I'm overwhelmed")}>Overwhelmed</button>
                </div>
              )}
            </div>
          </div>
        ))}
        {typing && (
          <div className="typing-indicator">
            <div className="message bot">
              <div className="avatar bot-avatar">MC</div>
              <div className="message-bubble">
                <div className="typing-dots">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="input-container">
        <input
          type="text"
          className="message-input"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="send-button" onClick={() => handleSend(input)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22,2 15,22 11,13 2,9"></polygon>
          </svg>
        </button>
      </div>
    </div>
  );
}