"use strict";

const interestsMain = document.querySelector('.interests_main');
const interestsCheck = document.querySelectorAll('.interest__check');

interestsMain.addEventListener('change', event => {
    const parent = event.target.parentElement;
    const childElement = Array.from(parent.nextElementSibling.querySelectorAll('.interest__check'));
   
    childElement.forEach(element => {
        event.target.checked ? element.checked = true : element.checked = false;
    })
});