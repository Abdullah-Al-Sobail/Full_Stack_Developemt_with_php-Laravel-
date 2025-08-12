var selecABox = document.getElementById('box1');

var newParagraph = document.createElement('p');

var newDiv = document.createElement('div');

var myName = 'Muaz Muhammad';

newParagraph.textContent = 'My name is : ' + myName ;

newDiv.innerHTML = '<p> I am in Dom </p>';

newDiv.classList.add('new-div');
newDiv.classList.remove('new-div');
newDiv.setAttribute ('data-attr', 'something');
newDiv.style.backgroundColor = '#000';
newDiv.style.color = '#fff';
// newDiv.style.backgroundColor = '#fff';

var box1 = document.getElementById('box1');
box1.insertAdjacentElement('afterbegin', newDiv);
box1.insertAdjacentElement('beforeend', newParagraph);

var box2 =document.getElementById('box2');
box2.insertAdjacentElement('beforebegin', newDiv);
box2.insertAdjacentElement('afterend', newParagraph)

box1.appendChild(box2);

var box1h4 = document.querySelector('#box1>h4');
box1.insertBefore(box2, box1h4);

newParagraph.previousSibling.remove();
