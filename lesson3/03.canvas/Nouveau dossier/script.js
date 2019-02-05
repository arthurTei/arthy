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
ctx.arc(200, 180, 60, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(200, 360, 120, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.fillStyle = 'pink';
ctx.fillRect(165, 230, 70, 20);
ctx.fillRect(211, 232, 20, 90);


ctx.lineWidth = 8;
ctx.strokeStyle = 'brown'

ctx.beginPath();
ctx.moveTo(139, 296);
ctx.lineTo(38, 248);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(260, 300);
ctx.lineTo(350, 236);
ctx.stroke();



ctx.fillStyle = 'black';
ctx.fillRect(126, 130, 150, 30);
ctx.fillRect(148, 33, 110, 120);


ctx.lineWidth = 0;
ctx.strokeStyle = 'black'
ctx.beginPath();
ctx.arc(180, 174, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(214, 174, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();


ctx.lineWidth = 1;
ctx.fillStyle = 'orange';
ctx.strokeStyle = 'orange'


ctx.beginPath();
ctx.moveTo(198, 186);
ctx.lineTo(130, 206);
ctx.lineTo(202,207);
ctx.stroke()
ctx.fill();