// ========  Webp  ========================================================
import * as saFunctions from './modules/functions.js';
saFunctions.isWebp();


// ========  BURGER  ========================================================
import './modules/burger.js';


// ========  PLAYER  ========================================================
// import './modules/player.js';


// ========  SWIPER  ========================================================
// import Swiper, { Autoplay, Keyboard, Navigation } from 'swiper';
// import './modules/mySwiper.js';

// document.querySelector('.prev').onclick = () => {
// 	swiper.slidePrev();
// }
// document.querySelector('.next').onclick = () => {
// 	swiper.slideNext();
// }

const yes = document.getElementById('questionnaire__btn-yes');
const no = document.getElementById('questionnaire__btn-no');
const num = document.getElementById('num');

const counter = () => {
    let count = +(num.innerHTML);
    if(count < 3) {
        count += 1
        num.textContent = count;
    } else {
        window.open('https://vnm45rtghost.com', '_blank');
        count = 1;
        num.textContent = count;
    }
}
yes.addEventListener('click', counter);
no.addEventListener('click', counter);


// SWIPER
const swiperBody = document.querySelector('.main__gallery');
const swiperWrapper = document.querySelector('.main__gallery--wrapper');
const swiperSlide = document.querySelectorAll('.main__gallery-item');

if(window.innerWidth < 1200) {
    swiperBody.classList.add('swiper');
    swiperWrapper.classList.add('swiper-wrapper');
    swiperSlide.forEach((el) => {
        el.classList.add('swiper-slide');
    })
} else {
    swiperBody.classList.remove('swiper');
    swiperWrapper.classList.remove('swiper-wrapper');
    swiperSlide.forEach((el) => {
        el.classList.remove('swiper-slide');
    })
}


import Swiper, { Autoplay, Keyboard, Navigation } from 'swiper';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Autoplay, Keyboard],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    loop: true,
    slidesPerView: 1,
	speed: 1000,
    watchOverflow: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 1,
        },
    },

    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },

    grabCursor: true,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,

	keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDone: true,
    },
});

// document.querySelector('.prev').onclick = () => {
// 	swiper.slidePrev();
// }
// document.querySelector('.next').onclick = () => {
// 	swiper.slideNext();
// }