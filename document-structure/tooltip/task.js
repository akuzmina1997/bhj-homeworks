"use strict";

const body = document.querySelector('body');
const tooltip = document.querySelector('div');
tooltip.className = 'tooltip tooltip_active';
const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'))

function placeTooltip(elem) {
    let tooltipCoordinates = elem.getBoundingClientRect();
    return {
      top: tooltipCoordinates.top + pageYOffset,
      left: tooltipCoordinates.left + pageXOffset
    };
  }

  hasTooltip.forEach(elem =>{
    elem.addEventListener('click', (event) =>{
      //event.preventDefault();
      getTooltip(event);
    });

function getTooltip(event) {
    tooltip.classList.toggle('tooltip_active');
    tooltip.innerText = event.target.title;

    if (this === tooltip.parentElement)
        tooltip.classList.toggle('tooltip_active');

    let coords = placeTooltip(event.target);
    tooltip.style.left = coords.left + "px";
    tooltip.style.top = coords.top + 20 + "px";
    
    event.target.after(tooltip);

    event.preventDefault();

    tooltip.innerText = this.title;
    this.appendChild(tooltip);

  }
});