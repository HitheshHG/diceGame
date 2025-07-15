var rdnumber1 = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6

var rddice1 = "dice" + rdnumber1 + ".png"; // Create the corresponding dice image filename

var rdimage1 = "images/" + rddice1; // Create the full path to the image

document.querySelectorAll("img")[0].setAttribute("src", rdimage1); // Set the source of the first image to the random dice image

var rdnumber2 = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6

var rddice2 = "dice" + rdnumber2 + ".png"; // Create the corresponding dice image filename

var rdimage2 = "images/" + rddice2; // Create the full path to the image

document.querySelectorAll("img")[1].setAttribute("src", rdimage2); // Set the source of the Second image to the random dice image

if (rdnumber1 > rdnumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (rdnumber2 > rdnumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}