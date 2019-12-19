const popUp = document.querySelector('.popup');
const menu = document.querySelector('.menu');

const showPopUpBtn = document.querySelector('.request');
const closePopUpBtn = document.querySelector('.closePopup');
const showMenuBtn = document.querySelector('.openMenu ');
const closeMenuBtn = document.querySelector('.closeMenu ');

let popUpState = false;
let menuState = -50;

const tooglePopUp = function () {
	if(this === showPopUpBtn) {
		popUpState = true;
	} else {
		popUpState = !popUpState;
	}
  popUp.style.display = popUpState ? 'flex' : 'none';
}

const toogleMenu = function() {
	menuState = menuState < 0 ? 0 : -50;
  menu.style.left = menuState + 'vw';
}

showPopUpBtn.onclick = tooglePopUp;
closePopUpBtn.onclick = tooglePopUp;
showMenuBtn.onclick = toogleMenu;
closeMenuBtn.onclick = toogleMenu;