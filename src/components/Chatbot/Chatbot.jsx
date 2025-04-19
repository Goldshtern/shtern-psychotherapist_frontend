import React, { useState } from "react";
import { getChatResponse } from "../../utils/chatApi";
import "./Chatbot.css";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = function () {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    getChatResponse(newMessages, function (err, response) {
      if (err) {
        setMessages([
          ...newMessages,
          { role: "assistant", content: "Ошибка при запросе к API." },
        ]);
      } else {
        setMessages([...newMessages, response]);
      }
      setLoading(false);
    });
  };

  return (
    <div className="chatbot">
      <h3 className="chatbot__title">Чат с помощником Инны Штерн</h3>
      <div className="chatbot__window">
        {messages.map(function (msg, index) {
          return (
            <div
              key={index}
              className={`chatbot__message chatbot__${msg.role}`}
            >
              {msg.content}
            </div>
          );
        })}
        {loading && <div className="chatbot__loading">Печатает...</div>}
      </div>
      <div className="chatbot__input-area">
        <input
          type="text"
          value={input}
          onChange={function (e) {
            setInput(e.target.value);
          }}
          className="chatbot__input"
          placeholder="Задайте вопрос..."
        />
        <button onClick={handleSend} className="chatbot__button">
          Отправить
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
