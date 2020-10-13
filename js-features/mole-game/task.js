"use strict"

//Случайным образом у одной из лунок добавляется класс hole_has-mole, что значит, что в лунке есть крот.
//Только если при клике на лунку с классом hole_has-mole вы должны засчитать +1 к победе. В ином случае - поражение.

let holeWithMole = document.getElementsByClassName('hole');
let killedMole = document.getElementById('dead');
let gameLost = document.getElementById('lost');
let clickHole = index => document.getElementById(`hole${index}`);
let reset = () => {localStorage.textContent = 0; killedMole.textContent = 0};

for (let i = 1; i < holeWithMole.length; i++) {
    clickHole(i).onclick = function () {
        if (clickHole(i).className.includes('hole_has-mole')) {
            killedMole.textContent++;
        } else {
            lost.textContent++;
        } if (gameLost.textContent==5) {
            alert('Вы проиграли');
            reset();
        } if (killedMole.textContent==10) {
            alert('Поздравляем, вы победили');
            reset();
        }
    }
}