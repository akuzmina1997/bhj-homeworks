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

    //(index === slider.length - 1)?
        //(index = 0,
        //slider[index].classList.add('slider__item_active')):
        //(slider[index + 1].classList.add('slider__item_active'));
    //index++;
});

arrowLeft.addEventListener('click', ()=>{
    slider[index].classList.remove('slider__item_active');
    index = index === 0 ? slider.length - 1 : index - 1; 
    slider[index].classList.add('slider__item_active'); 
    //index--;
    //(index === 0)?
        //(index = slider.length - 1,
        //slider[index].classList.add('slider__item_active')):
        //(slider[index].classList.add('slider__item_active'));
});

//const sliderArrow = document.getElementsByClassName("slider__arrow");
//const sliderItems = Array.from(document.querySelectorAll(".slider__items div"));

//function activeSlide() {
    //const currentSlide = sliderItems.findIndex( (elem) => 
        //elem.classList.contains("slider__item_active")
    //);

    //sliderItems[currentSlide].classList.remove("slider__item_active");
    //return currentSlide;
//}

// кнопка направо
//sliderArrow[1].onclick = () => {

    //const currentSlide = activeSlide();
    //if (currentSlide === sliderItems.length - 1)
        //currentSlide = -1;

    //sliderItems[currentSlide + 1].classList.add("slider__item_active");
//}

//кнопка налево
//sliderArrow[0].onclick = () => {

    //const currentSlide = activeSlide();
    //if (currentSlide === 0)
        //currentSlide = sliderItems.length;

    //sliderItems[currentSlide - 1].classList.add("slider__item_active");
//}