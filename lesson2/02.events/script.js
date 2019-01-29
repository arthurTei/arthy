const myBtn = document.querySelector('#js-btn');

myBtn.addEventListener('click', () => {
	console.log('Clicked!');
	// myBtn.style.backgroundColor = 'green';
	myBtn.classList.add('btn-success');
});

myBtn.addEventListener('mouseover', () => {
	console.log('Hovered over!');
	myBtn.style.backgroundColor = 'red';
	myBtn.classList.add('btn-danger');
});

myBtn.addEventListener('mouseleave', () => {
	myBtn.classList.remove('btn-danger');
	myBtn.classList.add('btn-success');
});

window.addEventListener('contextmenu', (event) => {
	event.preventDefault();
	console.log('Bouton droit de la souris a été cliqué');
});


const myForm = document.querySelector('#js-form');

myForm.addEventListener('submit', (event) => {
	event.preventDefault();
	console.log('Form submitted')
});

const myEmail = document.querySelector('#js-email');
myEmail.addEventListener('keyup', () => {
	console.log(myEmail.value)
})

const myPassword = document.querySelector('#js-password');
myPassword.addEventListener('keydown', () => {
	console.log(myPassword.value)
})



