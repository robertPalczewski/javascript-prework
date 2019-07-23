let computerWins = 0;
let playerWins = 0;
let rounds = 0;
let computerWinsEffectiveness = 0;

function playGame(argPlayerInput) {
    let playerInput = argPlayerInput;
    clearMessages();
    const moveName = ['kamień', 'papier', 'nożyce'];
    let playerMove = moveName[playerInput];
    let computerMove = playerInput => {
        if ((computerWins / playerWins) > 0.25) {
            switch (playerInput) {
                case 0:
                    return moveName[2];
                case 1:
                    return moveName[0];
                case 2:
                    return moveName[1];
            }
        } else {
            return moveName[Math.floor(Math.random() * 3)];
        }
    };
    const displayResult = (argComputerMove, argPlayerMove) => {
        printMessage('Mój ruch to: ' + argComputerMove);
        printMessage('Twój ruch to: ' + argPlayerMove);
        if ((argComputerMove === moveName[0] && argPlayerMove === moveName[1]) || (argComputerMove === moveName[1] && argPlayerMove === moveName[2]) || (argComputerMove === moveName[2] && argPlayerMove === moveName[0])) {
            printMessage('Ty wygrywasz!');
            playerWins++;
        } else if (argComputerMove === argPlayerMove) {
            printMessage('Mamy remis!');
        } else {
            printMessage('Ja wygrywam!');
            computerWins++;
        }
        rounds++;
        computerWinsEffectiveness = Math.round((computerWins / playerWins) * 100);
        document.getElementById('result').innerHTML = 'Gracz: ' + playerWins + ' vs ' + 'Komputer: ' + computerWins + '<br>' + 'Runda: ' + rounds + '<br>Wygrane rundy przez komputer: ' + computerWinsEffectiveness + '%';
    };
    displayResult(computerMove(playerInput), playerMove);
}

for (let i = 0; i < 1000; i++) {
    playGame(Math.floor(Math.random() * 3));
}
/*
document.getElementById('play-rock').addEventListener('click', function () {
    playGame(0);
});
document.getElementById('play-paper').addEventListener('click', function () {
    playGame(1);
});
document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(2);
});*/