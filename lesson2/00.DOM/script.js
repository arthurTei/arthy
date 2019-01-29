// const myDivs = document.getElementsByTagName ('div');
// console.log('myDivs', myDivs);

// const myDiv2 = document.querySelectorAll('div');
// console.log('myDiv2', myDiv2);

// const myParagraphs = document.getElementsByClassName('secondary-paragraph');
// console.log('myParagraphs', myParagraphs);

// const myParagraphs2 = document.querySelectorAll('.secondary-paragraph');
// console.log('myParagraphs2', myParagraphs2);

// const myUniqueEl = document.getElementById('js-unique-el');
// console.log('myUniqueEl', myUniqueEl);

// const myUniqueEl2 = document.querySelector('#js-unique-el');
// console.log('myUniqueEl2', myUniqueEl2);



// const myParagraphsInDiv = document.querySelectorAll('div p');
// console.log('myParagraphsInDiv', myParagraphsInDiv);

// const MySpansPreceededByDiv = document.querySelectorAll('div ~ span');
// console.log('MySpansPreceededByDiv', MySpansPreceededByDiv);




// const firstParagraph = document.querySelector('p');
// console.log('firstParagraph', firstParagraph);
// firstParagraph.innerText = 'I am the first paragraph';

// const secondParagraph = document.querySelector('.second-p');
// secondParagraph.innerHTML = '<span>Helle</span>';
// console.log('secondParagraph.innerHTML', secondParagraph.innerHTML);

// const myImg = document.querySelector('img');
// console.log('myImg', myImg);
// myImg.setAttribute('width', '50%');
// myImg.setAttribute('height', 'auto');

// myImg.setAttribute('alt', 'Random image');

// const myParagraphInDiv = document.querySelector('div p');
// console.log('myParagraphsInDiv', myParagraphsInDiv);

// const myDiv = document.querySelector('div');
// const paragraphToDelete = document.querySelector('div p');
// myDiv.removeChild(paragraphToDelete);
// myDiv.innerHTML = '';
// myDiv.className = 'my-class';
// myDiv.classList.add('my-class');
// myDiv.classList.remove('my-class');

const myBody = document.querySelector('body');
const myDiv = document.createElement('div');
el.innerText = 'Something Something';
console.log('el', el);
myBody.appendChild(el);
myBody.prepend(el);