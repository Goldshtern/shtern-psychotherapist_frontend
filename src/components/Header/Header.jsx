import React from "react";
import "./Header.css";
import logo from "../../assets/shtern-logo.png";
function Header() {
  const today = new Date();
  return (
    <header className="header">
      <div className="header__logo-and-title">
        <img className="header__logo" src={logo} alt="Inna Shtern logo" />
        <div className="header__title-container">
          <h1 className="header__title">Inna Shtern</h1>
          <time className="header__date" dateTime={today.toISOString()}>
            {today.toLocaleString("default", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </div>
      <nav className="header__nav">
        <a href="#about" className="header__nav-link">
          Обо мне
        </a>
        <a href="#services" className="header__nav-link">
          Услуги
        </a>
        <a href="#contact" className="header__nav-link">
          Контакты
        </a>
      </nav>
    </header>
  );
}
export default Header;
