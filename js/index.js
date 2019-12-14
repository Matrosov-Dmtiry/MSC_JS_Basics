function haveEnough(reserve, appleCounter, oneApplePrice, breadCounter, oneBreadPrice) {
	let result = reserve - appleCounter * oneApplePrice - breadCounter * oneBreadPrice > 0;
	return result ? 'Вам хватает денег на покупки' : 'Вам не хватает денег';
}

let template = '<h1>' + haveEnough(
	Number(prompt('Сколько у вас с собой есть денег?')),
	Number(prompt('Сколько вы купили яблок?')),
	Number(prompt('Сколько вы купили батонов хлеба?')),
	Number(prompt('Сколько стоит одно яблоко?')),
	Number(prompt('Сколько стоит один батон хлеба?'))
	) + '</h1>';

document.body.innerHTML = template;