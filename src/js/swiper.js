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