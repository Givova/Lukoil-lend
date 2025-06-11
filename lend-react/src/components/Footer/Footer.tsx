import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__row">
            <p className="footer__ip">ИП Зеликов Игорь Сергеевич</p>
            <p className="footer__inn">ИНН Зеликов: 673209938317</p>
          </div>
          <div className="footer__row">
            <p className="footer__ip">ИП Зеликова Анна Николаевна</p>
            <p className="footer__inn">ИНН Зеликова: 673211217915</p>
          </div>
          <div className="footer__phone">
            <p>
              <a href="tel:+79203038567">
                <span className="phone-number">тел. +7 (920) 303-85-67</span>
              </a>
            </p>
            <p>
              <a href="https://wa.me/79203038567" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                WhatsApp: +7 (920) 303-85-67
              </a>
            </p>
            <p>&copy; 2025 Company. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 