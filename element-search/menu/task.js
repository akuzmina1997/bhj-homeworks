"use strict";

//ссылки в меню
const menuLink = Array.from(document.querySelectorAll('.menu__link'));

menuLink.forEach(elem => {

    //const menuActive = document.querySelector('.menu_active');
    elem.addEventListener('click', (event) => {
        event.preventDefault();

        if(elem.nextElementSibling){
            elem.nextElementSibling.classList.toggle('menu_active');
        } 
    });
});