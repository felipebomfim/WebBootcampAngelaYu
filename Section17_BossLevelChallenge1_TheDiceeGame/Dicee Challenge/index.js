function rollDices() {
  // if (firstTime) {
  //   firstTime = false;
  //   return;
  // }
  let player1Score = updateDice(document.querySelector(".img1"));
  let player2Score = updateDice(document.querySelector(".img2"));

  if (player1Score > player2Score)
    message = "🚩Player 1 Wins!";
  else if (player1Score < player2Score)
    message = "Player 2 Wins! 🚩";
  else
    message = "Draw!";

  document.querySelector("h1").textContent = message;

}

function updateDice(element) {
  let randomNumber = Math.ceil(Math.random() * 6);
  let srcFile = "./images/dice" + randomNumber + ".png";
  element.setAttribute("src", srcFile)
  return randomNumber;
}