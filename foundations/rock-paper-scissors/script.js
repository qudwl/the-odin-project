// Uses Math.random to generate a random result for the computer.
const computerSelection = () => {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "Paper";
            break;
        case 1:
            return "Scissor";
            break;
        case 2:
            return "Rock";
            break;
    }
}

// Plays a round of rock paper scissors.
const playRound = (compSelect, playerSelect) => {
    let comp = compSelect;
    let player = playerFormat(playerSelect);

    switch (comp) {
        case "Rock":
            switch (player) {
                case "Rock":
                    return 0;
                case "Scissor":
                    return -1;
                case "Paper":
                    return 1;
                default:
                    console.error("Wrong input by User");
            }
            break;
        case "Scissor":
            switch (player) {
                case "Rock":
                    return 1;
                case "Scissor":
                    return 0;
                case "Paper":
                    return -1;
                default:
                    console.error("Wrong input by User");
            }
            break;
        case "Paper":
            switch (player) {
                case "Rock":
                    return -1;
                case "Scissor":
                    return 1;
                case "Paper":
                    return 0;
                default:
                    console.error("Wrong input by User");
            }
            break;
    }
}

// Formats player input to required format.
const playerFormat = (playerSelect) => {
    let arr = playerSelect.toLowerCase().split('');
    arr[0] = arr[0].toUpperCase();
    return arr.join('');
}

// Updates DOM to reflect current score.
const updateScore = (score) => {
    let compScore = document.getElementById("compScore");
    let playerScore = document.getElementById("playerScore");

    if (score == 1) {
        playerScore.innerText = parseInt(playerScore.innerText) + 1;
    } else if (score == -1) {
        compScore.innerText = parseInt(compScore.innerText) + 1;
    }
}

// Check if player has won.
const checkWin = () => {
    let compScore = document.getElementById("compScore");
    let playerScore = document.getElementById("playerScore");

    if (parseInt(compScore.innerHTML) == 5) {
        alert("You lost!");
        reset();
    } else if (parseInt(playerScore.innerText) == 5) {
        alert("You win!");
        reset();
    }
}

// Reset the game
const reset = () => {
    document.getElementById("compScore").innerHTML = 0;
    document.getElementById("playerScore").innerHTML = 0;
}

// Btn function for playing game.
const gameBtn = (playerSelect) => {
    updateScore(playRound(computerSelection(), playerSelect));
    checkWin();
}

window.onload = () => {
    let buttonRow = document.getElementsByClassName("select-answer")[0];
    buttonRow.children[0].addEventListener('click', () => gameBtn('Rock'));
    buttonRow.children[1].addEventListener('click', () => gameBtn('Paper'));
    buttonRow.children[2].addEventListener('click', () => gameBtn('Scissor'));
}