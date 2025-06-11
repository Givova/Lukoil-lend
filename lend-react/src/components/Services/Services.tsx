import React from 'react';
import './Services.scss';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'Страхование всех видов транспортных средств',
      description: 'Полное страхование для всех видов транспортных средств.',
      icon: '📄'
    },
    {
      id: 2,
      title: 'Оформление сим-карт, пополнение баланса',
      description: 'Быстрое оформление сим-карт, пополнение баланса.',
      icon: '📱'
    },
    {
      id: 3,
      title: 'Росавтодор штрафы',
      description: 'Помощь в проверке и оплате штрафов от Росавтодора.',
      icon: '🚦'
    },
    {
      id: 4,
      title: 'Платон маршрутные карты',
      description: 'Оформление маршрутных карт для системы Платон.',
      icon: '🗺️'
    },
    {
      id: 5,
      title: 'Платон оплата штрафов',
      description: 'Помощь в оплате штрафов по системе Платон.',
      icon: '💸'
    },
    {
      id: 6,
      title: 'Оформление дебетовых карт Т-банка',
      description: 'Быстрое и удобное оформление дебетовых карт Т-банка.',
      icon: '💳'
    },
    {
      id: 7,
      title: 'Оплата штрафов',
      description: 'Удобная оплата любых штрафов.',
      icon: '🚨'
    },
    {
      id: 8,
      title: 'Платежный терминал',
      description: 'Доступ к платежному терминалу для различных операций.',
      icon: '🏧'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Наши услуги</h2>
        <div className="services__grid">
          {services.map((service) => (
            <div key={service.id} className="services__item">
              <div className="services__icon">{service.icon}</div>
              <div className="services__text-content">
                <h3>{service.title}</h3>
                <p className="services__description-text">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 