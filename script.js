let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

const wins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],   // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8],   // columns
    [0, 4, 8], [2, 4, 6]               // diagonals
];

function makeMove(index) {
    if (board[index] === "" && !gameOver) {
        board[index] = currentPlayer;
        document.getElementsByClassName("cell")[index].innerText = currentPlayer;

        if (checkWin()) {
            alert(currentPlayer + " wins!");
            gameOver = true;
            return;
        }

        if (board.every(cell => cell !== "")) {
            alert("It's a draw!");
            gameOver = true;
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWin() {
    return wins.some(combo => {
        return combo.every(i => board[i] === currentPlayer);
    });
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;

    const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = "";
    }
}
