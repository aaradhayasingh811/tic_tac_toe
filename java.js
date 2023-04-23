const cells = document.querySelectorAll('.cell');
let player = 'X';

function checkWin() {
  const patterns = [
    '012', '345', '678', // rows
    '036', '147', '258', // columns
    '048', '246' // diagonals
  ];

  for (let pattern of patterns) {
    const [a, b, c] = pattern.split('');
    if (cells[a].innerText === player && cells[b].innerText === player && cells[c].innerText === player) {
      return true;
    }
  }

  return false;
}

function checkTie() {
  return [...cells].every(cell => cell.innerText !== '');
}

function switchPlayer() {
  player = player === 'X' ? 'O' : 'X';
}

function handleCellClick() {
  if (this.innerText !== '') {
    return;
  }

  this.innerText = player;

  if (checkWin()) {
    alert(`${player} wins!`);
    resetGame();
    return;
  }

  if (checkTie()) {
    alert('Tie game!');
    resetGame();
    return;
  }

  switchPlayer();
}

function resetGame() {
  cells.forEach(cell => cell.innerText = '');
  player = 'X';
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
