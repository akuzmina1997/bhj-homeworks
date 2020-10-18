"use strict";

const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const sliderItem = Array.from(document.querySelectorAll('.slider__item'));

let i = 0;

arrowNext.addEventListener('click', function () {
    i++;
    i <= slider.length ? slider[i - 1].classList.remove('slider__item_active') :  i = 0;
    slider[i].classList.add('slider__item_active'); 
};

arrowPrev.addEventListener('click', function ()) {
    i--;
    i > 0 ? slider[i + 1].classList.remove('slider__item_active') : i = slider.length - 1;
    slider[i].classList.add('slider__item_active');
});