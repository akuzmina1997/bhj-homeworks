"use strict";

const slider = Array.from(document.querySelectorAll('.slider__item'));
const arrowRight = document.querySelector('.slider__arrow_next');
const arrowLeft = document.querySelector('.slider__arrow_prev');

let index = slider.findIndex(element => {
    console.log(element);
    return element.classList.contains('slider__item_active');
});

arrowRight.addEventListener('click', ()=>{
    slider[index].classList.remove('slider__item_active');
    index = index === slider.length - 1 ? 0 : index + 1; 
    slider[index].classList.add('slider__item_active'); 
});

arrowLeft.addEventListener('click', ()=>{
    slider[index].classList.remove('slider__item_active');
    index = index === 0 ? slider.length - 1 : index - 1; 
    slider[index].classList.add('slider__item_active'); 
});