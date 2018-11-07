function actionBoxes() {
  // Flappy Bird
  document.getElementById("t1").innerHTML = "Flappy Bird";
  document.getElementById("i1").src = "images/flappybird.jpg";
  document.getElementById("b1").onclick = function () { flappybird(); };
  document.getElementById("a1").href = "games/flappy-bird.swf";
  // Geometry Dash
  document.getElementById("t2").innerHTML = "Geometry Dash";
  document.getElementById("i2").src = "images/geometrydash.jpg";
  document.getElementById("b2").onclick = function () { geodash(); };
  document.getElementById("a2").href = "games/geometrydash.swf";
  // Get on Top
  document.getElementById("t3").innerHTML = "Get on Top";
  document.getElementById("i3").src = "images/getontop.jpeg";
  document.getElementById("b3").onclick = function () { getontop(); };
  document.getElementById("a3").href = "games/getontop.swf";
  // Give Up 2
  document.getElementById("t4").innerHTML = "Give Up 2";
  document.getElementById("i4").src = "images/giveup2.jpeg";
  document.getElementById("b4").onclick = function () { giveup2(); };
  document.getElementById("a4").href = "games/give-up-2.swf";
  // Happy Wheels
  document.getElementById("t5").innerHTML = "Happy Wheels";
  document.getElementById("i5").src = "images/happywheels.jpeg";
  document.getElementById("b5").onclick = function () { happywheels(); };
  document.getElementById("a5").href = "games/HappyWheels.swf";
  // HS Series - Escaping the Prison
  document.getElementById("t6").innerHTML = "HS Series - Escaping the Prison"
  document.getElementById("i6").src = "images/escapingtheprison.jpg";
  document.getElementById("b6").onclick = function () { escapingtheprison(); };
  document.getElementById("a6").href = "games/escapingtheprison.swf";
  // HS Series - Stealing the Diamond
  document.getElementById("t7").innerHTML = "HS Series - Stealing the Diamond";
  document.getElementById("i7").src = "images/stealingthediamond.jpg";
  document.getElementById("b7").onclick = function () { stealingthediamond(); };
  document.getElementById("a7").href = "games/stealingthediamond.swf";
  // HS Series - Infilterating the Airship
  document.getElementById("t8").innerHTML = "HS Series - Infilterating the Airship";
  document.getElementById("i8").src = "images/infilteratingtheairship.png";
  document.getElementById("i8").style = "max-width:70%;max-height:70%";
  document.getElementById("b8").onclick = function () { infilteratingtheairship(); };
  document.getElementById("a8").href = "games/infilteratingtheairship.swf";
  // HS Series - Fleeing the Complex
  document.getElementById("t9").innerHTML = "HS Series - Fleeing the Complex";
  document.getElementById("i9").src = "images/fleeingthecomplex.png";
  document.getElementById("b9").onclick = function () { fleeingthecomplex(); };
  document.getElementById("a9").href = "games/fleeingthecomplex.swf";
  // Run 3
  document.getElementById("t10").innerHTML = "Run 3";
  document.getElementById("i10").src = "images/run3.jpg";
  document.getElementById("b10").onclick = function () { run3(); };
  document.getElementById("a10").href = "games/run-3-unblocked-games_1531491672.swf";
  // Spelunky
  document.getElementById("t11").innerHTML = "Spelunky";
  document.getElementById("i11").src = "images/spelunky.jpg";
  document.getElementById("b11").onclick = function () { spelunky(); };
  document.getElementById("a11").href = "downloads/spelunky-master.zip";
  // Unfair Mario
  document.getElementById("t12").innerHTML = "Unfair Mario";
  document.getElementById("i12").src = "images/unfairmario.png";
  document.getElementById("b12").onclick = function () { unfairmario(); };
  document.getElementById("a12").href = "games/unfairmario.swf";
}
actionBoxes();
