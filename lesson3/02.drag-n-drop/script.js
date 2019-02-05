'use strict';

const dropTo = document.querySelector('#js-drop-to');
const myDraggable = document.querySelector('#js-draggable');

myDraggable.addEventListener('dragstart', (event) => {
	event.dataTransfer.setData('text', event.target.id);
})

dropTo.addEventListener('dragover', (event) => {
	event.preventDefault();
})

dropTo.addEventListener('drop', (event) => {
	event.preventDefault();
	const data = event.dataTransfer.getData('text');
	const droppedEl = document.getElementById(data);
	event.target.appendChild(droppedEl);
})