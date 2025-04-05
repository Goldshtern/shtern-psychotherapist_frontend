import React from "react";
import "./App.css";
import Header from "../Header/Header";
import About from "../About/About";
import Services from "../Services/Services";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <About />
        <Services />
      </div>
    </div>
  );
}

export default App;
