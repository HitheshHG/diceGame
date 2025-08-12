document.querySelector("button").addEventListener("click", function () {
  var rdnumber1 = Math.floor(Math.random() * 6) + 1;

  var rddice1 = "dice" + rdnumber1 + ".png";

  document.querySelectorAll("img")[0].setAttribute("src", rddice1);

  var rdnumber2 = Math.floor(Math.random() * 6) + 1; 

  var rddice2 = "dice" + rdnumber2 + ".png";
  
  document.querySelectorAll("img")[1].setAttribute("src", rddice2); 

  if (rdnumber1 > rdnumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  } else if (rdnumber2 > rdnumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }

  var audio=new Audio("./audio.mp3");
  audio.play();

});

