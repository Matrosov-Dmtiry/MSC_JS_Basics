const rock = 0;
const scissors = 1;
const paper = 2;

let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
let computer = Math.floor(Math.random() * 3);

if (player === computer) {
	alert('Draw.');
} else if (player === 0 && computer === 2) {
	alert('Computer win.');
} else if (player === 0 && computer === 1) {
	alert('Player win.');
} else if (player === 1 && computer === 0) {
	alert('Computer win.');
} else if (player === 1 && computer === 2) {
	alert('Player win.');
} else if (player === 2 && computer === 0) {
	alert('Player win.');
} else if (player === 2 && computer === 1) {
	alert('Player loose.');
}