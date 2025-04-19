import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import About from "../About/About";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { getChatResponse } from "../../utils/chatApi";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
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
    <div className="page">
      <div className="page__content">
        <Header />
        <About />
        <Services />
        <Contact
          chatbotProps={{
            messages,
            input,
            loading,
            setInput,
            handleSend,
          }}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
