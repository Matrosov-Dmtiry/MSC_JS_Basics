function getRandomPow(num) {
	let number = Number(num);
	if(!number || !num) {
		return;
	}
	let randomPow = Math.abs(Math.floor(Math.random() * (1 - 10)) + 1);
	console.log('число', number, '\nстепень', randomPow);
	return Math.pow(number, randomPow);
}

console.log(getRandomPow(prompt('Введите Число')));