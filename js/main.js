// Инициализация слайдера
const bannerSlider = new Swiper('.banner-slider', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    // effect: 'fade',
    // fadeEffect: {
    //     crossFade: true
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Данные для услуг
const services = [
    {
        title: 'Страхование всех видов транспорта',
        description: 'Комплексное страхование грузового и пассажирского транспорта',
        icon: '🚛'
    },
    {
        title: 'Оформление сим карт, пополнение депозита',
        description: 'Услуги по оформлению сим-карт и управлению балансом',
        icon: '📱'
    },
    {
        title: 'Росавтодор штрафы',
        description: 'Проверка и оплата штрафов Росавтодора',
        icon: '🚨'
    },
    {
        title: 'Платон Маршрутные карты',
        description: 'Оформление и обслуживание маршрутных карт системы Платон',
        icon: '🗺️'
    },
    {
        title: 'Платон оплата штрафов',
        description: 'Проверка и оплата штрафов системы Платон',
        icon: '💰'
    },
    {
        title: 'Оформление дебетовых карт Т-банка',
        description: 'Выпуск и обслуживание дебетовых карт для перевозчиков',
        icon: '💳'
    },
    {
        title: 'Оплата штрафов',
        description: 'Проверка и оплата различных видов штрафов',
        icon: '⚖️'
    },
    {
        title: 'Платёжный терминал',
        description: 'Удобная оплата различных услуг через терминал',
        icon: '🏧'
    }
];

// Данные для акций
const promotions = [
    {
        title: 'Скидка на первый заказ',
        description: 'Получите 10% скидку на первый заказ',
        image: 'assets/promo1.jpg'
    },
    {
        title: 'Сезонное предложение',
        description: 'Специальные цены на летние перевозки',
        image: 'assets/promo2.jpg'
    },
    {
        title: 'Акция 3: Бесплатная консультация',
        description: 'Получите бесплатную консультацию по логистике.',
        image: 'assets/promo3.jpg'
    },
    {
        title: 'Акция 4: Скидка на ТО',
        description: 'Скидка 20% на техническое обслуживание для новых клиентов.',
        image: 'assets/promo4.jpg'
    },
    {
        title: 'Акция 5: Бонусы за рефералов',
        description: 'Приведите друга и получите бонусы на счет.',
        image: 'assets/promo5.jpg'
    },
    {
        title: 'Акция 6: Расширенная гарантия',
        description: 'Увеличенный срок гарантии на все услуги.',
        image: 'assets/promo6.jpg'
    },
    {
        title: 'Акция 7: Подарок при первом заказе',
        description: 'При первом заказе получите ценный подарок.',
        image: 'assets/promo7.jpg'
    }
];

// Функция для создания карточек услуг
function createServiceCard(service) {
    return `
        <div class="service-card">
            <div class="service-card__icon">${service.icon}</div>
            <div class="service-card__text-content">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        </div>
    `;
}

// Функция для создания карточек акций
function createPromotionCard(promotion) {
    return `
        <div class="swiper-slide">
            <div class="promotion__item">
                <img src="${promotion.image}" alt="${promotion.title}">
                <h3>${promotion.title}</h3>
                <p>${promotion.description}</p>
            </div>
        </div>
    `;
}

// Заполнение секций данными
document.addEventListener('DOMContentLoaded', () => {
    // Заполнение услуг
    const servicesGrid = document.querySelector('.services__grid');
    servicesGrid.innerHTML = services.map(createServiceCard).join('');

    // Заполнение акций
    const promotionsWrapper = document.querySelector('.promotions-slider .swiper-wrapper');
    promotionsWrapper.innerHTML = promotions.map(createPromotionCard).join('');

    // Инициализация слайдера акций (перемещено сюда)
    const promotionsSlider = new Swiper('.promotions-slider', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: '.promotions-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.promotions-slider .swiper-button-next',
            prevEl: '.promotions-slider .swiper-button-prev',
        },
        slidesPerView: 1,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
    });

    // Анимация появления блоков услуг при скролле
    const serviceCards = document.querySelectorAll('.service-card');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2 // trigger when 20% of item is visible
    };

    const serviceCardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Добавляем класс 'is-visible' и устанавливаем задержку анимации
                entry.target.style.animationDelay = `${entry.target.dataset.delay}s`;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Остановить наблюдение после появления
            }
        });
    }, observerOptions);

    serviceCards.forEach((card, index) => {
        card.dataset.delay = index * 0.1; // Устанавливаем задержку: 0s, 0.1s, 0.2s и т.д.
        serviceCardObserver.observe(card);
    });

    // Инициализация карты
    ymaps.ready(() => {
        const map = new ymaps.Map('map', {
            center: [54.69035, 31.02024], // Координаты АЗС Лукойл (слева по направлению в Москву)
            zoom: 15,
            controls: ['zoomControl', 'fullscreenControl']
        });

        // Добавляем метку на карту
        map.geoObjects.add(new ymaps.Placemark([54.69035, 31.02024], {
            balloonContent: 'АЗС Лукойл, 455 км М1, направление на Москву (левая сторона)'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }));

        // Добавляем обработчик изменения размера окна для корректного отображения карты
        window.addEventListener('resize', () => {
            map.container.fitToViewport();
        });
    });

    // Плавная прокрутка для навигационных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Логика бургер-меню
    const burgerIcon = document.querySelector('.burger-menu-icon');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    const closeButton = document.querySelector('.close-button'); // Новый элемент

    burgerIcon.addEventListener('click', () => {
        burgerIcon.classList.toggle('open');
        mobileNavOverlay.classList.toggle('open');
        document.body.classList.toggle('no-scroll');
    });

    // Обработчик для кнопки закрытия
    closeButton.addEventListener('click', () => {
        burgerIcon.classList.remove('open');
        mobileNavOverlay.classList.remove('open');
        document.body.classList.remove('no-scroll');
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerIcon.classList.remove('open');
            mobileNavOverlay.classList.remove('open');
            document.body.classList.remove('no-scroll');
        });
    });

    // Прокрутка страницы вверх при нажатии на логотип
    const mainLogo = document.getElementById('main-logo');
    if (mainLogo) {
        mainLogo.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}); 