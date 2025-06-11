import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.scss';

const Banner: React.FC = () => {
  const slides = [
    {
      id: 1,
      title: 'Многофункциональный центр для международных перевозчиков',
      image: '/b.jpg'
    },
    {
      id: 2,
      title: 'Второй слайд: Больше возможностей для вашего бизнеса',
      image: '/b.jpg'
    }
  ];

  return (
    <section className="banner">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="banner__slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="container">
                <h1>{slide.title}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner; 