import React from "react";
import "./Contact.css";
import Chatbot from "../Chatbot/Chatbot";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Контакты</h2>
      <div className="contact__info">
        <p className="contact__item">
          📧 Email:{" "}
          <a href="mailto:inna.shtern@example.com">inna.shtern@example.com</a>
        </p>
        <p className="contact__item">
          📞 Телефон: <a href="tel:+79161234567">+7 (916) 123-45-67</a>
        </p>
        <p className="contact__item">📍 Адрес: Москва, ул. Примерная, д. 1</p>
        <p className="contact__item">
          🌐{" "}
          <a
            href="https://www.linkedin.com/in/inna-shtern"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          {" | "}
          <a
            href="https://www.psychologytoday.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Psychology Today
          </a>
        </p>
      </div>

      <div className="contact__cta">
        <a href="mailto:inna.shtern@example.com" className="contact__button">
          Записаться на консультацию
        </a>
      </div>

      <Chatbot />
    </section>
  );
}

export default Contact;
