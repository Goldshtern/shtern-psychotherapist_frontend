import React from "react";
import "./Services.css";

function Services() {
  return (
    <section id="services" className="services">
      <h2 className="services__title">Услуги</h2>
      <div className="services__list">
        <div className="services__item">
          <h3 className="services__item-title">Индивидуальная терапия</h3>
          <p className="services__item-description">
            Работаем с личными переживаниями, тревогой, депрессией и другими
            проблемами. Используем методы, подходящие именно для вас.
          </p>
        </div>

        <div className="services__item">
          <h3 className="services__item-title">Семейная терапия</h3>
          <p className="services__item-description">
            Помогаем наладить отношения в семье, улучшить коммуникацию и найти
            компромиссы.
          </p>
        </div>

        <div className="services__item">
          <h3 className="services__item-title">
            Когнитивно-поведенческая терапия (КПТ)
          </h3>
          <p className="services__item-description">
            Эффективный подход для работы с беспокойством, депрессией и
            эмоциональными трудностями.
          </p>
        </div>

        <div className="services__item">
          <h3 className="services__item-title">Майндфулнес и медитации</h3>
          <p className="services__item-description">
            Научитесь управлять стрессом и улучшить качество жизни с помощью
            осознанности и медитации.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
