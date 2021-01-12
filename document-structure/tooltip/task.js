"use strict";

const body = document.querySelector('body');
const tooltip = document.querySelector('.tooltip');
const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'))

function placeTooltip(elem) {
    let tooltipCoordinates = elem.getBoundingClientRect();
    return {
      top: tooltipCoordinates.top + pageYOffset,
      left: tooltipCoordinates.left + pageXOffset
    };
  }

function getTooltip(event) {
    tooltip.classList.toggle('tooltip_active');
    tooltip.innerText = event.target.title;

    let coords = placeTooltip(event.target);
    tooltip.style.left = coords.left + "px";
    tooltip.style.top = coords.top + 18 + "px";
    
    event.target.after(tooltip);
}

hasTooltip.forEach(element =>{
    element.addEventListener('click', (event) =>{
        event.preventDefault();
        getTooltip(event);
    })
})