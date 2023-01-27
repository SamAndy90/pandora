// ========  Webp  ========================================================
import * as saFunctions from './modules/functions.js';
saFunctions.isWebp();


// ========  BURGER  ========================================================
import './modules/burger.js';


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
    });
    swiperBody.classList.remove('main__gallery');
    swiperWrapper.classList.remove('main__gallery--wrapper');
    swiperSlide.forEach((el) => {
        el.classList.remove('main__gallery-item');
    })
} else {
    swiperBody.classList.remove('swiper');
    swiperWrapper.classList.remove('swiper-wrapper');
    swiperSlide.forEach((el) => {
        el.classList.remove('swiper-slide');
    });
    swiperBody.classList.add('main__gallery');
    swiperWrapper.classList.add('main__gallery--wrapper');
    swiperSlide.forEach((el) => {
        el.classList.add('main__gallery-item');
    })

}


import Swiper, { Autoplay, Keyboard, Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Autoplay, Keyboard, Pagination],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    loop: true,
    slidesPerView: 1,
	speed: 1000,
    watchOverflow: false,

    autoplay: {
        delay: 3000,
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