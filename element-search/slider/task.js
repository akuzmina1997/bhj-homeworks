"use strict";

const sliderArrow = document.getElementsByClassName("slider__arrow");
const sliderItems = Array.from(document.querySelectorAll(".slider__items div"));

function activeSlide() {
    const currentSlide = sliderItems.findIndex( (elem) => 
        elem.classList.contains("slider__item_active")
    );

    sliderItems[currentSlide].classList.remove("slider__item_active");
    return currentSlide;
}

// кнопка направо
sliderArrow[1].onclick = () => {

    const currentSlide = activeSlide();
    if (currentSlide === sliderItems.length - 1)
        currentSlide = -1;

    sliderItems[currentSlide + 1].classList.add("slider__item_active");
}

//кнопка налево
sliderArrow[0].onclick = () => {

    const currentSlide = activeSlide();
    if (currentSlide === 0)
        currentSlide = sliderItems.length;

    sliderItems[currentSlide - 1].classList.add("slider__item_active");
}