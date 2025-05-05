let currentPlayer = 'X'; // Player 1 starts
let gameBoard = ['', '', '', '', '', '', '', '', '']; // Empty board
let gameActive = true; // Game state

const cells = document.querySelectorAll('.cell');
const gameStatus = document.getElementById('gameStatus');
const resetBtn = document.getElementById('resetBtn');

// Function to handle cell click
function handleCellClick(event) {
    const cellIndex = event.target.dataset.cell;

    if (gameBoard[cellIndex] !== '' || !gameActive) return; // Skip if the cell is already filled or game is over

    gameBoard[cellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;

    checkWinner();
    switchPlayer();
}

// Function to switch player turns
function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    gameStatus.textContent = `Player ${currentPlayer === 'X' ? '1' : '2'}'s turn (${currentPlayer})`;
}

// Function to check if there's a winner or a draw
function checkWinner() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameStatus.textContent = `Player ${currentPlayer === 'X' ? '1' : '2'} wins!`;
            gameActive = false;
            return;
        }
    }

    if (!gameBoard.includes('')) {
        gameStatus.textContent = "It's a draw!";
        gameActive = false;
    }
}

// Reset the game
function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    gameStatus.textContent = "Player 1's turn (X)";
    cells.forEach(cell => cell.textContent = '');
}

// Add event listeners
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetBtn.addEventListener('click', resetGame);
