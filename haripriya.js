let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateStopwatch() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  const formattedTime = 
    (hours < 10 ? "0" + hours : hours) + ":" +
    (minutes < 10 ? "0" + minutes : minutes) + ":" +
    (seconds < 10 ? "0" + seconds : seconds);

  document.getElementById("stopwatch").innerText = formattedTime;
}

document.getElementById("startButton").addEventListener("click", function() {
  timer = setInterval(updateStopwatch, 1000);
});

document.getElementById("stopButton").addEventListener("click", function() {
  clearInterval(timer);
});

document.getElementById("resetButton").addEventListener("click", function() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("stopwatch").innerText = "00:00:00";
});

   