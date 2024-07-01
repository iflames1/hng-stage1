function displayCurrentDayAndUTCTime() {
  var now = new Date();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var currentDay = days[now.getUTCDay()];
  var currentTime = now.toUTCString().split(" ")[4];

  document.getElementById("current-day").innerText = currentDay;
  document.getElementById("current-time").innerText = currentTime;
}

displayCurrentDayAndUTCTime();
setInterval(displayCurrentDayAndUTCTime, 1000);
