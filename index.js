//Getting the current Date
let date = new Date();

//Selecting the elements of the clock
let minutesNeddles = document.querySelector("#minutes");
let hoursNeddles = document.querySelector("#hours");
let secondsNeddles = document.querySelector("#seconds");

//positioning the pieces of the clock and adding transformations
function positionNeedles() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  seconds = seconds * 6 + 6;
  minutes = minutes * 6 + 6;
  hours = hours * 30;
  hoursNeddles.style.transform = "rotate(" + hours + "deg)";
  minutesNeddles.style.transform = "rotate(" + minutes + "deg)";
  secondsNeddles.style.transform = "rotate(" + seconds + "deg)";
}

//Updating every second the position
let moveClock = setInterval(function() {
  positionNeedles();
}, 1000);
