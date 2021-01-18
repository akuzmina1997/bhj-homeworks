"use strict";

const tasksAdd = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");
const tasksInput = document.getElementById("task__input");

tasksAdd.addEventListener("click", function(event) {
    event.preventDefault();
    let tasksDiv = document.createElement("div"); 
    if (tasksInput.value != "") {
         tasksDiv.classList.add("task");
         tasksDiv.insertAdjacentHTML('beforeend', `
            <div class="task__title">
                ${tasksInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
            `);

         document.getElementById("tasks__list").appendChild(tasksDiv);
         let tasksRemove = tasksDiv.querySelector(".task__remove");
         tasksRemove.addEventListener("click", (e) => 
              e.target.parentElement.remove()
         );

         tasksInput.value = "";   
    }
});