const board = document.querySelector("#container");
const spots = Array.from(document.querySelectorAll("p"));
const game = (() => {
  let isX = true;
  const moves = Array(9).fill(null);

  const isWinner = () => {
    return (
      (moves[0] == moves[1] && moves[1] == moves[2] && moves[0] != null) ||
      (moves[3] == moves[4] && moves[4] == moves[5] && moves[3] != null) ||
      (moves[6] == moves[7] && moves[7] == moves[8] && moves[6] != null) ||
      (moves[0] == moves[3] && moves[3] == moves[6] && moves[0] != null) ||
      (moves[1] == moves[4] && moves[4] == moves[7] && moves[1] != null) ||
      (moves[2] == moves[5] && moves[5] == moves[8] && moves[2] != null) ||
      (moves[0] == moves[4] && moves[4] == moves[8] && moves[0] != null) ||
      (moves[2] == moves[4] && moves[4] == moves[6] && moves[2] != null)
    );
  };

  const fillCell = (cell, index) => {
    if (cell.textContent != "") {
      return;
    }
    if (isX) {
      cell.textContent = "X";
      moves[index] = "X";
      isX = false;
    } else {
      cell.textContent = "O";
      moves[index] = "O";
      isX = true;
    }
  };

  const getIsX = () => {
    return isX;
  };

  return { getIsX, isWinner, fillCell, moves };
})();

board.addEventListener("click", (e) => {
  if (spots.indexOf(e.target) == -1) {
    return;
  }

  console.log(game.getIsX());
  if (!game.isWinner()) {
    game.fillCell(e.target, spots.indexOf(e.target));
  }
  console.table(game.moves);
  console.log(game.getIsX());
  if (game.isWinner()) {
    if (game.getIsX()) {
      document.querySelector("h1").textContent = "O has won!";
    } else {
      document.querySelector("h1").textContent = "X has won!";
    }
  }
});
