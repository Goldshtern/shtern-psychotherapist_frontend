import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__dev">
        Website developed by{" "}
        <a
          className="footer__link"
          href="https://github.com/Goldshtern"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aleksandr Goldshtern
          <FaGithub className="footer__icon" />
        </a>{" "}
        © {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
