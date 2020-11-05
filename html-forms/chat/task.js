"use strict";

const answersArr = [
    'Досвидули'
    'Зачем ты сюда пишешь?'
    'Ты кто вообще'
    'Твоя жизнь - бессмыслица, а покупки лишь помогают скрасить твое существование'
    'Не пиши сюда больше'
    'Могу предложить тебе люлей'
    'Тебе нужен не наш товар, а мозги'
    'Нас нет дома, приходи в следующем году'
    'Уходи'
];

const chatMessages = document.querySelector('.chat-widget__messages');
const chatInput = document.getElementById('chat-widget__input');
const chatWidget = document.querySelector('.chat-widget');

function time () {
    const date = new Date();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    hours < 10 ? hours = "0" + hours : hours;
    minutes < 10 ? minutes = "0" + minutes : minutes; 
         return `${hours}:${minutes}`;
}

function showChat() {
    chatWidget.className = 'chat-widget chat-widget_active';
    chatWidget.active = true;
}

document.querySelector('chatInput').addEventListener('keypress', function sendMessage(e) {
    if (chatInput.value != '' && e.key == 'Enter') {
    chatMessages.innerHTML += `
         <div class="message message_client">
              <div class="message__time">${time()}</div>
              <div class="message__text">
                   ${chatInput.value}  
              </div>
         </div>`; 

    chatInput.value = ' ';
    let randomAnswer = Math.floor(Math.random() * answersArr.length);
    chatMessages.innerHTML += `
         <div class="message">
              <div class="message__time">${time()}</div>
              <div class="message__text">
                   ${answersArr[randomAnswer]}
              </div>
         </div>`; 
         
         chatMessages.lastElementChild.scrollIntoView(false);
   }
});

