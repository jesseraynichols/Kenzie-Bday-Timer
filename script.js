/* jshint esversion: 6 */

// Defining time and date parameters
const
  second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

// Get all DOM Global Variables
var days = document.querySelector('#days');
var hours = document.querySelector('#hours');
var minutes = document.querySelector('#minutes');
var seconds = document.querySelector('#seconds');


// Set the date we're counting down to
var countDownDate = new Date("Sep 4, 2022 24:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var todaysDate = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - todaysDate;

  // Time calculations for days, hours, minutes and seconds and output the result to respective divs
  days.innerText = Math.floor(distance / (day));
  hours.innerText = Math.floor((distance % (day)) / (hour));
  minutes.innerText = Math.floor((distance % (hour)) / (minute));
  seconds.innerText = Math.floor((distance % (minute)) / second);


  // If the count down is over, write some text
  if (distance < 0) {
    days.innerHTML = "00";
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
  }
}, second);