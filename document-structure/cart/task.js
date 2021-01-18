"use strict";

const buttons = Array.from(document.querySelectorAll(".product"));
const addButtons = document.getElementsByClassName('product__add');
let quantity = document.querySelectorAll('.product__quantity-value');
const cart = document.querySelector(".cart__products");
let productsInCart = cart.children;

for (let i = 0; i < addButtons.length; i++) {
    buttons[i].querySelector(".product__quantity-control_inc").addEventListener("click", function() {
        quantity[i].innerText++;
    })

    buttons[i].querySelector('.product__quantity-control_dec').addEventListener('click', function() {
        quantity[i].innerText > 1 ? quantity[i].innerText-- : quantity[i].innerText = 1;
    })


    addButtons[i].addEventListener('click', function() {
        let product = Array.from(productsInCart).find(item => item.dataset.id == buttons[i].dataset.id);

        if(product) {
                  let cartProductCount = product.querySelector('.cart__product-count').textContent;
                  let totalCount = +cartProductCount + +quantity[i].textContent;
                  //return product.querySelector('.cart__product-count').textContent = totalCount;
              }

        cart.innerHTML +=
                `<div class="cart__product" data-id="${buttons[i].dataset.id}">
                    <img class="cart__product-image" src="${buttons[i].querySelector('img').getAttribute('src')}">
                    <div class="cart__product-count">${quantity[i].innerText}</div>
                </div>`
                            
   })
}