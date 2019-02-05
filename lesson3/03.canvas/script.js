'use strict'

const canvas = document.getElementById('js-canvas');
const ctx = canvas.getContext('2d');

const getCursorPosition = (canvas, event) => {
	const rect = canvas.getBoundingClientRect();
	const x = event.clientX - rect.left;
	const y = event.clientY - rect.top;
	console.log("x: " + x + "Y: " + y);
}
canvas.addEventListener('click', (event) => {
	getCursorPosition(canvas, event);
})


ctx.fillStyle = '#fff';
ctx.strokeStyle = '#fff';

ctx.beginPath();
ctx.arc(190, 293, 120, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();


ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';

ctx.beginPath();
ctx.arc(90, 155, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(290, 155, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(140, 266, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(240, 266, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();


ctx.fillStyle = '#fff';
ctx.strokeStyle = '#fff';

ctx.beginPath();
ctx.arc(228, 244, 15, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(255, 285, 8, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();


ctx.beginPath();
ctx.arc(128, 244, 15, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(157, 285, 8, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();


ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.arc(192, 321, 8, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();



ctx.lineWidth = 8;
ctx.strokeStyle = 'black'

ctx.beginPath();
ctx.moveTo(152, 360);
ctx.lineTo(229, 360);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(227, 361);
ctx.lineTo(241, 343);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(155, 360);
ctx.lineTo(145, 343);
ctx.stroke();


