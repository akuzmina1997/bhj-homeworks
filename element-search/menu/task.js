"use strict";

const menuLink = document.getElementsByClassName("menu__link");
const menuLength = menuLink.length;

function closeMenus() {
    const menuElements = document.querySelectorAll("li ul");
    for (let i = 0; i < menuElements.length; i++) {
        menuElements[i].className = "menu menu_sub";
    }
}

function changeSubmenuStatus(menuLi) {
    if (menuLi.classList.contains("menu_active")) 
        menuLi.classList.remove("menu_active");

    else {
        menuLi.classList.add("menu_active");
    }
}

for (let i = 0; i < menuLength; i++) {
    menuLink[i].onclick = () => {
        const menuParentLi = menuLink[i].parentElement;
        menuLi = menuParentLi.getElementsByTagName("ul")[0];

        if (menuLi) {
            changeSubmenuStatus(menuLi);
            return false;
        }
    }
}