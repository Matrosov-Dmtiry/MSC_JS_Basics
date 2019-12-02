let reserve = Number(prompt('Сколько у вас с собой есть денег?'));
let appleCounter = Number(prompt('Сколько вы купили яблок?'));
let breadCounter =  Number(prompt('Сколько вы купили батонов хлеба?'));

let oneApplePrice = Number(prompt('Сколько стоит одно яблоко?'));
let oneBreadPrice = Number(prompt('Сколько стоит один батон хлеба?'));

let result = (reserve - appleCounter * oneApplePrice - breadCounter * oneBreadPrice) > 0

let template = '<h1>' + result + '</h1>';

document.body.innerHTML = template;