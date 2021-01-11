"use strict";

const tasksAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');
const tasksInput = document.getElementById('task__input');

tasksAdd.addEventListener("click", function (event) {
    event.preventDefault();

    let tasksDiv = document.createElement('div'); 

    if(tasksInput.value != "") {

        tasksDiv.classList.add('tasksDiv');

        tasksList.innerHTML += 
        `<div class="task">
            <div class="task__title">
                ${taskInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`

        document.getElementById('tasks__list').appendChild(tasksDiv);
        
        element.addEventListener('click', (event)=> {
            event.target.parentElement.remove();
            localStorage.removeItem(event);
        })
    })

        tasksInput.value = ""

        //const tasksObj = Array.from(document.querySelectorAll('.task'));
        //const tasksRemove = Array.from(document.querySelectorAll('.task__remove'));
    
        //tasksObj.forEach((element, index) =>{
            //localStorage.setItem(index, element.innerText);
        //})
    
        //tasksRemove.forEach(element =>{
            //element.addEventListener('click', (event) =>{
               // event.target.parentElement.tasksRemove();
               // localStorage.removeItem(event);
           // })
        //})
    
    }
})