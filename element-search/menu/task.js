"use strict";

//const menuActive = document.getElementsByClassName('menu_active');
const menuLink = document.getElementsByClassName('menu__link');
const list = menu.length;

function menuAll() {
    let menu = document.querySelectorAll('ul, li');
    for (let i = 0; i < subMenu.length; i++) {
        menu[i].className = 'menu menu_sub';
    }
}

function menuLink(menuDropdown) {
    if (menuDropdown.classList.contains('menu_active')) {
        menuDropdown.classList.remove('menu_active');
    } else {
        menuDropdown.classList.add('menu_active')
        menuAll();
    }
}

for (let i = 0; i < list; i++) {
    menu[i].onclick = () => {
        let listMain = menu[i].parentElement;
        listMain = listMain.getElementsByTagName("ul")[0];

        if (menuDropdown) {
            menuLink(menuDropdown);
            return false;
        }
    }
}

//for(let i = 0; i < menuLink.length; i++) {
    //if(menuLink[i].nextElementSibling != null) {
        //menuLink[i].onclick = function() {
            //closeMenu();
            //for (let b = 0; b < menuActive.length; b++)  {
                //if(menuActive[b] !== undefined) {
                    //menuActive[b].classList.remove('menu_active');
                //}
            //}
            //return false;
        //}
    //}
//}

//function closeMenu(){
    //for (var i = 0; i < menuActive.length; i++) {
        //menuActive[i].classList.remove('menu_active');
    //}
//}