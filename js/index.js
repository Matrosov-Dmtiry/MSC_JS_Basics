const bodyElement = document.body;
const pageElement = document.querySelectorAll('.page')[0];
const personElement = document.querySelectorAll('span.name')[0];
const imgElement = document.querySelectorAll('img')[0];
const bioElement = document.querySelectorAll('.shortBio')[0];

let background = prompt('Какой фон будет у страницы?');
let textColor = prompt('Какой будет цвет текста на странице?');
let person = prompt('Как зовут человека, который вас вдохновляет');
let imgSrc = prompt('Введите адрес картинки');
let bioText = prompt('Введите текст страницы');

bodyElement.style.backgroundColor = background;
pageElement.style.color = textColor;
personElement.innerHTML = person;
imgElement.setAttribute('src', imgSrc);
bioElement.innerHTML = bioText;
bioElement.className += ' animated' ;