import React from "react";
import "./About.css";
import photo from "../../assets/Shtern.jpeg";

function About() {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <img className="about__photo" src={photo} alt="Инна Штерн photo" />
        <div className="about__text">
          <h2 className="about__title">Обо мне</h2>
          <p>
            Меня зовут Инна Штерн, я практикующий психотерапевт с многолетним
            опытом работы. Моя цель — создать безопасное и поддерживающее
            пространство, в котором каждый может исследовать свои чувства и
            находить путь к внутренней гармонии.
          </p>
          <p>
            Я работаю с индивидуальными клиентами и парами, используя методы
            когнитивно-поведенческой терапии, майндфулнес-подхода и
            гуманистической психотерапии.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
