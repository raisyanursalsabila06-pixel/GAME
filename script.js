const board = document.getElementById("board");
const scoreElement = document.getElementById("score");
const message = document.getElementById("message");
const resetButton = document.getElementById("reset");

let score = 0;
let coinPosition = 0;

function randomCoin() {
  coinPosition = Math.floor(Math.random() * 25);
}

function createBoard() {
  board.innerHTML = "";

  for (let i = 0; i < 25; i++) {
    const cell = document.createElement("button");
    cell.className = "cell";
    cell.textContent = "⬜";

    cell.addEventListener("click", () => {
      if (i === coinPosition) {
        score++;
        scoreElement.textContent = score;
        cell.textContent = "🪙";
        cell.classList.add("found");
        message.textContent = "🎉 Benar! Koin ditemukan!";

        setTimeout(() => {
          randomCoin();
          createBoard();
          message.textContent = "Koin berpindah! Cari lagi.";
        }, 500);
      } else {
        cell.textContent = "❌";
        message.textContent = "❌ Bukan di sini. Coba lagi!";
      }
    });

    board.appendChild(cell);
  }
}

function resetGame() {
  score = 0;
  scoreElement.textContent = score;
  randomCoin();
  createBoard();
  message.textContent = "Pilih salah satu kotak!";
}

resetButton.addEventListener("click", resetGame);

resetGame();
