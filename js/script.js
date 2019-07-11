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
printMessage('Mój ruch to: ' + computerMove);
printMessage('Twój ruch to: ' + playerMove);
if ((computerMove === moveName[0] && playerMove === moveName[1]) || (computerMove === moveName[1] && playerMove === moveName[2]) || (computerMove === moveName[2] && playerMove === moveName[0])) {
    printMessage('Ty wygrywasz!');
} else if (computerMove === playerMove) {
    printMessage('Mamy remis!');
} else {
    printMessage('Ja wygrywam!');
}