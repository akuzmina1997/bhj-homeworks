"use strict";

const modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');

const modalClosed = document.getElementsByClassName('modal__close');
for (let i = 0; i < modalClosed.length; i++)
    modalClosed[i].onclick = function () {
          this.closest('.modal').classList.remove('modal_active');  
     }

const showSuccess = document.querySelector('.show-success');
const modalSuccess = document.querySelector('#modal_success');
success.onclick = function () {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}

document.querySelector('.btn_success').onclick = function () {
    this.closest('.modal_active').classList.remove('modal_active');
}