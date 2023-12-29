var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var nuevarutaimagen1 = "./images/dice" + randomNumber1 + ".png";
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var nuevarutaimagen2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img1").setAttribute("src", nuevarutaimagen1);
document.querySelector(".img2").setAttribute("src", nuevarutaimagen2);
function winner() {
  if (randomNumber1 > randomNumber2) {
    return "Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    return "Player 2 Wins!";
  } else {
    return "Draw!";
  }
}
document.querySelector("h1").innerHTML = winner();
