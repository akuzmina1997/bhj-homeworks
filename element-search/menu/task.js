"use strict";

const menuLink = document.getElementsByClassName("menu__link");
const menuLength = menuLink.length;
const menuParentLi = menuLink[i].parentElement;
const menuLi = menuParentLi.getElementsByTagName("ul")[0];

function closeMenu() {
    const menuElements = document.querySelectorAll("li ul");
    for (let i = 0; i < menuElements.length; i++) {
        menuElements[i].className = "menu menu_sub";
    }
}

function changeMenu(menuLi) {
    if (menuLi.classList.contains("menu_active")) {
        //menuLi.classList.remove("menu_active");
        menuLi.classList.toggle("menu_active");

    //else {
        //menuLi.classList.add("menu_active");
    }
}

for (let i = 0; i < menuLength; i++) {
    menuLink[i].onclick = () => {
        //menuLi = menuParentLi.getElementsByTagName("ul")[0];

        if (menuLi) {
            changeMenu(menuLi);
            return false;
        }
    }
}