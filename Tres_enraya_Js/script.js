document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("board");
  const cells = document.querySelectorAll(".cell");
  const resetButton = document.getElementById("resetButton");

  let currentPlayer = "X";
  let gameBoard = ["", "", "", "", "", "", "", "", ""];

  cells.forEach(cell => {
    cell.addEventListener("click", () => {
      const index = cell.dataset.index;

      if (gameBoard[index] === "" && !checkWinner()) {
        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;

        if (checkWinner()) {
          alert(`¡Jugador ${currentPlayer} ha ganado!`);
          resetGame();
        } else if (!gameBoard.includes("")) {
          alert("¡Es un empate!");
          resetGame();
        } else {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
      }
    });
  });

  resetButton.addEventListener("click", resetGame);

  function checkWinner() {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
        highlightWinnerCells(pattern);
        return true;
      }
    }

    return false;
  }

  function highlightWinnerCells(pattern) {
    for (const index of pattern) {
      cells[index].style.backgroundColor = "lightgreen";
    }
  }

  function resetGame() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => {
      cell.textContent = "";
      cell.style.backgroundColor = "";
    });
    currentPlayer = "X";
  }
});

  