/*
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = 'nieznany ruch';
if (randomNumber === 1) {
    computerMove = 'kamień';
} else if (randomNumber === 2) {
    computerMove = 'papier';
} else if (randomNumber === 3) {
    computerMove = 'nożyce';
}*/
let randomNumber = Math.floor(Math.random() * 3);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = ['kamień', 'papier', 'nożyce'];
printMessage('Mój ruch to: ' + computerMove[randomNumber]);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('wybrany ruch to: ' + playerInput);

if (playerInput !== '1' && playerInput !== '2' && playerInput !== '3') {
    while (playerInput !== '1' && playerInput !== '2' && playerInput !== '3') {
        playerInput = prompt('Wybierz liczbę całkowitą z zakresu 1-3! 1: kamień, 2: papier, 3: nożyce.');
        console.log(playerInput);
    }
}
let playerMove = 'nieznany ruch';
if (playerInput === '1') {
    playerMove = 'kamień';
} else if (playerInput === '2') {
    playerMove = 'papier';
} else if (playerInput === '3') {
    playerMove = 'nożyce';
}
printMessage('Twój ruch to: ' + playerMove);

if (computerMove === 'kamień' && playerMove === 'papier') {
    printMessage('Ty wygrywasz!');
} else if (computerMove === 'kamień' && playerMove === 'nożyce') {
    printMessage('Ja wygrywam!');
} else if (computerMove === 'papier' && playerMove === 'kamień') {
    printMessage('Ja wygrywam!');
} else if (computerMove === 'papier' && playerMove === 'nożyce') {
    printMessage('Ty wygrywasz!');
} else if (computerMove === 'nożyce' && playerMove === 'kamień') {
    printMessage('Ty wygrywasz!');
} else if (computerMove === 'nożyce' && playerMove === 'papier') {
    printMessage('Ja wygrywam!');
} else {
    printMessage('Mamy remis!');
}


