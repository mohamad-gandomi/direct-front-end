import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

//======================================================================
// TICKER CAROUSEL
//======================================================================

const TICKER = new Swiper('.ticker__carousel', {
    loop: true,
    spaceBetween: 20,
    preventClicks: true,
    autoplay: {
        delay: 5,
        disableOnInteraction: false
    },
    slidesPerView: 'auto',
    speed: 6000,
    grabCursor: true,
});

//======================================================================
// VIDEO CAROUSEL
//======================================================================

const videoCarousel = new Swiper('.video-carousel', {
    slidesPerView: 1,
    spaceBetween: 20,
    preventClicks: true,
    speed: 800,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 3,
        },
    }
});

//======================================================================
// CUSTOMER LOGO CAROUSEL
//======================================================================

const customerLogoCarousel = new Swiper('.customer-logo-carousel', {
    slidesPerView: "auto",
    spaceBetween: 20,
    preventClicks: true,
    speed: 800,
    autoplay: {
        delay: 1500,
    },
});

//======================================================================
// CUSTOMER LOGO CAROUSEL
//======================================================================

const customerTestimonialsCarousel = new Swiper('.customer-testimonials-carousel', {
    slidesPerView: 1,
    spaceBetween: 20,
    preventClicks: true,
    speed: 800,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        1300: {
            slidesPerView: 4,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
        },
    }
});

