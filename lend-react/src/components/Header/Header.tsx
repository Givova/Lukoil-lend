import React, { useState } from 'react';
import './Header.scss';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <img src="/Logo.png" alt="Многофункциональный центр" />
          </div>
          <nav className="header__nav">
            <ul>
              <li><a href="#services">Услуги</a></li>
              {/* <li><a href="#promotions">Акции</a></li> */}
              <li><a href="#contacts">Контакты</a></li>
            </ul>
          </nav>
          <a href="https://wa.me/79203053981" className="header__phone-number-desktop" target="_blank" rel="noopener noreferrer">
            +7 (920) 305-39-81
          </a>
          <div className="burger-menu-icon" onClick={toggleMobileMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>

      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <nav className="mobile-nav">
          <div className="mobile-nav-header">
            <img src="/Logo.png" alt="Многофункциональный центр" className="mobile-nav-logo" />
            <div className="close-button" onClick={toggleMobileMenu}>&times;</div>
          </div>
          <ul>
            <li><a href="#services" onClick={toggleMobileMenu}>Услуги</a></li>
            <li><a href="#promotions" onClick={toggleMobileMenu}>Акции</a></li>
            <li><a href="#contacts" onClick={toggleMobileMenu}>Контакты</a></li>
          </ul>
          <div className="mobile-nav__footer">
            <p>Позвоните нам</p>
            <p>
              <a href="https://wa.me/79203053981" className="mobile-nav__phone-number" target="_blank" rel="noopener noreferrer">
                +7 (920) 305-39-81
              </a>
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 