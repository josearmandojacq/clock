//Getting the current Date
var date = new Date();

//Selecting the elements of the clock
var minutesNeddles = document.querySelector("#minutes");
var hoursNeddles = document.querySelector("#hours");
var secondsNeddles = document.querySelector("#seconds");

//positioning the pieces of the clock and adding animations
function positionNeedles() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  seconds = seconds * 6 + 6;
  minutes = minutes * 6 + 6;
  hours = hours * 30;
  hoursNeddles.style.transform = "rotate(" + hours + "deg)";
  minutesNeddles.style.transform = "rotate(" + minutes + "deg)";
  secondsNeddles.style.transform = "rotate(" + seconds + "deg)";
}

var moveClock = setInterval(function() {
  positionNeedles();
}, 1000);
