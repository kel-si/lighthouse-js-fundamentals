const moves = ["north", "north", "west", "west", "north", "east", "north"];

const finalPosition = function (moves) {
  let final = [];
  let x = 0;
  let y = 0;

  for (let move of moves) {
    if (move === "south") {
      y = y - 1;
    } else if (move === "north") {
      y = y + 1;
    } else if (move === "east") {
      x = x + 1;
    } else if (move === "west") {
      x = x - 1;
    }
  }
  final.push(x, y);
  return final;
};

console.log(finalPosition(moves));
