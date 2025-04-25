function generateComputerChoice() {
  let randomNumber = Math.random() * 3;
  if (randomNumber < 1) {
    return "Bat";
  } else if (randomNumber < 2) {
    return "Ball";
  } else if (randomNumber < 3) {
    return "Stump";
  }
}

let scoreStr = localStorage.getItem("Score");
let score;
resetScore(scoreStr);
function resetScore(scoreStr) {
  score = scoreStr
    ? JSON.parse(scoreStr)
    : {
        win: 0,
        lost: 0,
        tie: 0,
      };

  score.displayScore = function () {
    return `Score => Won: ${score.win} - Lost: ${score.lost} - Tie: ${score.tie}`;
  };
  alertMessage();
}
function resultMessage(userMove, computerMove) {
  if (userMove === "Bat") {
    if (computerMove === "Bat") {
      score.tie++;
      return `It's a Tie.`;
    } else if (computerMove === "Ball") {
      score.win++;
      return "You won.";
    } else if (computerMove === "Stump") {
      score.lost++;
      return "Computer has won.";
    }
  } else if (userMove === "Ball") {
    if (computerMove === "Bat") {
      score.lost++;
      return `Computer has won.`;
    } else if (computerMove === "Ball") {
      score.tie++;
      return `It's a Tie.`;
    } else if (computerMove === "Stump") {
      score.win++;
      return "You won.";
    }
  } else {
    if (computerMove === "Bat") {
      score.win++;
      return `You won.`;
    } else if (computerMove === "Ball") {
      score.lost++;
      return "Computer has won.";
    } else if (computerMove === "Stump") {
      score.tie++;
      return `It's a Tie. `;
    }
  }
}

function alertMessage(userMove, computerMove, result) {
  let scoreStr = localStorage.setItem("Score", JSON.stringify(score));

  document.querySelector("#user-move").innerText =
    userMove !== undefined ? `You have chosen ${userMove}` : "";

  document.querySelector("#computer-move").innerText =
    computerMove !== undefined ? `Computer choice is ${computerMove}` : "";

  document.querySelector("#result").innerText =
    result != undefined ? result : "";

  document.querySelector("#score").innerText = score.displayScore();
}
