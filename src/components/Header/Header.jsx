import React from "react";
import "./Header.css";
import logo from "../../assets/shtern-logo.png";
function Header() {
  return (
    <header className="header">
      <div className="header__logo-and-title">
        <img className="header__logo" src={logo} alt="Inna Shtern logo" />
        <div className="header__title-container">
          <h1 className="header__title">Inna Shtern</h1>
          <time className="header__date" dateTime={new Date().toISOString()}>
            {new Date().toLocaleString("default", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </div>
    </header>
  );
}
export default Header;
