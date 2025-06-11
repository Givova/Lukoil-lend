import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Promotions.scss';

interface Promotion {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Promotions: React.FC = () => {
  const promotions: Promotion[] = [
    {
      id: 1,
      title: 'Скидка на топливо',
      description: 'При заправке от 50 литров - скидка 2 рубля за литр',
      image: '/promo1.jpg'
    },
    {
      id: 2,
      title: 'Комплексное обслуживание',
      description: 'При комплексном обслуживании - бесплатная диагностика',
      image: '/promo2.jpg'
    },
    {
      id: 3,
      title: 'Программа лояльности',
      description: 'Накопительные бонусы при каждой покупке',
      image: '/promo3.jpg'
    },
    {
      id: 4,
      title: 'Бесплатная мойка',
      description: 'При заправке на сумму от 2000 рублей - бесплатная мойка автомобиля',
      image: '/promo4.jpg'
    },
    {
      id: 5,
      title: 'Скидка для новых клиентов',
      description: 'Первая заправка со скидкой 10%',
      image: '/promo5.jpg'
    },
    {
      id: 6,
      title: 'Акция "Приведи друга"',
      description: 'Получите бонусы за каждого приведенного друга',
      image: '/promo6.jpg'
    },
    {
      id: 7,
      title: 'Сезонные предложения',
      description: 'Специальные цены на сезонные товары',
      image: '/promo7.jpg'
    },
    {
      id: 8,
      title: 'Корпоративным клиентам',
      description: 'Особые условия для корпоративных клиентов',
      image: '/promo8.jpg'
    }
  ];

  return (
    <section id="promotions" className="promotions">
      <div className="container">
        <h2>Акции</h2>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            }
          }}
        >
          {promotions.map((promo) => (
            <SwiperSlide key={promo.id}>
              <div className="promotions__item">
                <div 
                  className="promotions__image"
                  style={{ backgroundImage: `url(${promo.image})` }}
                />
                <div className="promotions__content">
                  <h3>{promo.title}</h3>
                  <p>{promo.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Promotions; 