import React from "react";
import "./Chatbot.css";

function Chatbot({ messages, input, loading, setInput, handleSend }) {
  return (
    <div className="chatbot">
      <h3 className="chatbot__title">Чат с помощником Инны Штерн</h3>
      <div className="chatbot__window">
        {messages.map((msg, index) => (
          <div key={index} className={`chatbot__message chatbot__${msg.role}`}>
            {msg.content}
          </div>
        ))}
        {loading && <div className="chatbot__loading">Печатает...</div>}
      </div>
      <div className="chatbot__input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
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
