"use strict";

//Необходимо разработать нового «убийцу времени» - кликер печенек. Всё, что делает игра - увеличивает счётчик нажатий на печеньку

let cookie = document.getElementById('cookie');
let clickerCounter = document.getElementById('clicker__counter');

cookie.onclick = function() {
    clickerCounter.textContent++;
        const clickOn = 250, clickOff = 200;
        if (cookie.width == clickOff, cookie.height == clickOff) {
            cookie.width = clickOn;
            cookie.height = clickOn;
        } else {
            cookie.width = clickOff;
            cookie.height = clickOff;
        }
}

cookie.onclick;