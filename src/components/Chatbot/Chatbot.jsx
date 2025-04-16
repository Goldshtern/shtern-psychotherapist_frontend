import React, { useState } from "react";
//import axios from "axios";
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

    setTimeout(function () {
      const simulatedResponse = {
        role: "assistant",
        content:
          "Это симулированный ответ. Подключите OpenAI API для получения реальных данных.",
      };

      setMessages([...newMessages, simulatedResponse]);
      setLoading(false);
    }, 1000);

    //const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

    //axios
    //.post(
    //"https://api.openai.com/v1/chat/completions",
    //{
    //model: "gpt-3.5-turbo",
    //messages: newMessages,
    //},
    //{
    //headers: {
    //Authorization: "Bearer " + apiKey,
    //"Content-Type": "application/json",
    //},
    //}
    //)
    //.then(function (response) {
    //const botMessage = response.data.choices[0].message;
    //setMessages([...newMessages, botMessage]);
    //setLoading(false);
    //})
    //.catch(function (error) {
    //setMessages([
    //...newMessages,
    //{ role: "assistant", content: "Ошибка при запросе к API." },
    //]);
    //setLoading(false);
    //});
  };

  return (
    <div className="chatbot">
      <h3 className="chatbot__title">Чат с помошником Инны Штерн</h3>
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
