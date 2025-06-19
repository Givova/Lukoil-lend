import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  const handleOpenPdf = (name: string) => {
    const pdfUrls: { [key: string]: string } = {
      'zelikov': '/Зеликов Игорь.pdf',
      'zelikova': '/Зеликова Анна.pdf'
    };
    
    window.open(pdfUrls[name], '_blank');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__row">
            <div className="footer__doc-block" onClick={() => handleOpenPdf('zelikov')}>
              <p className="footer__ip">ИП Зеликов Игорь Сергеевич</p>
              <p className="footer__inn">ИНН: 673209938317</p>
            </div>
            <div className="footer__doc-block" onClick={() => handleOpenPdf('zelikova')}>
              <p className="footer__ip">ИП Зеликова Анна Николаевна</p>
              <p className="footer__inn">ИНН: 673211217915</p>
            </div>
          </div>
          <div className="footer__phone">
            <p>
              <a href="tel:+79203053981">
                <span className="phone-number">тел. +7 (920) 305-39-81</span>
              </a>
            </p>
            <p>
              <a href="https://wa.me/79203053981" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                WhatsApp: +7 (920) 305-39-81
              </a>
            </p>
            <p>&copy; 2025 Многофункциональный центр. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 