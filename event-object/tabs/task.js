"use strict";

const tab = Array.from(document.querySelectorAll('.tab'));
const tabNavigation = document.querySelector('.tab__navigation');
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

tabNavigation.addEventListener('click', (event) => {
    tab.forEach(element => {
        element.classList.remove('tab_active');
        event.target.classList.add('tab_active');
            tabContent.forEach(item => {
                item.classList.remove('tab__content_active');
                tabContent[tab.indexOf(event.target)].classList.add('tab__content_active');
            });
    });
});