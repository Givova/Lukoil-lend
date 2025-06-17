import React, { useEffect } from 'react';
import './Contacts.scss';

declare global {
  interface Window {
    ymaps: any;
  }
}

const Contacts: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY&lang=ru_RU';
    script.async = true;
    script.onload = initMap;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initMap = () => {
    if (window.ymaps) {
      window.ymaps.ready(() => {
        const map = new window.ymaps.Map('map', {
          center: [54.690766, 31.020186], // Координаты АЗС
          zoom: 15
        });

        const placemark = new window.ymaps.Placemark([54.690766, 31.020186], {
          balloonContent: 'АЗС'
        });

        map.geoObjects.add(placemark);
      });
    }
  };

  return (
    <section id="contacts" className="contacts">
      <div className="container">
        <h2>Контакты</h2>
        <div className="map" id="map"></div>
        <div className="contacts__info">
          <div className="contacts__person contacts__address-card">
            <h3>Адрес</h3>
            <p>Смоленская обл., Краснинский р-н, д. Буда, АЗС, 455 км М1, направление на Москву (левая сторона)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts; 