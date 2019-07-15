const moveName = ['kamień', 'papier', 'nożyce'];
const input = ['1', '2', '3'];
const computerMove = moveName[Math.floor(Math.random() * 3)];
let playerInput = prompt('Wybierz swój ruch! 1: ' + moveName[0] + ', 2:  ' + moveName[1] + ', 3:  ' + moveName[2] + '.');
console.log('wybrany ruch gracza to: ' + playerInput);
const playerMoveInput = playerInput => {
    while (input.indexOf(playerInput) === -1) {
        playerInput = prompt('Musisz wybrać liczbę całkowitą z zakresu 1-3! 1: ' + moveName[0] + ', 2:  ' + moveName[1] + ', 3:  ' + moveName[2] + '.');
        console.log('poprawiony ruch gracza to: ' + playerInput);
    }
    return moveName[playerInput - 1];
};
const playerMove = playerMoveInput(playerInput);
const displayResult = (argComputerMove, argPlayerMove) => {
    printMessage('Mój ruch to: ' + argComputerMove);
    printMessage('Twój ruch to: ' + argPlayerMove);
    if ((computerMove === moveName[0] && argPlayerMove === moveName[1]) || (argComputerMove === moveName[1] && argPlayerMove === moveName[2]) || (argComputerMove === moveName[2] && argPlayerMove === moveName[0])) {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove === argPlayerMove) {
        printMessage('Mamy remis!');
    } else {
        printMessage('Ja wygrywam!');
    }
};
displayResult(computerMove, playerMove);