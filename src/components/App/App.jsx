import React from "react";
import "./App.css";
import Header from "../Header/Header";
import About from "../About/About";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <About />
      </div>
    </div>
  );
}

export default App;
