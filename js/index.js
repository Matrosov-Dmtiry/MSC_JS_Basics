let number = Number(prompt('Введите число'));

if (number <= 0) {
	console.log(number);
} else if (number > 0) {
	console.log(Number('-' + number));
} else {
	console.log('не число');
}