const heroGreetingSpan = document.querySelector('.hero-greeting--highlight')
const heroGreetingItems = [
  "Website",
  "Python",
  "Android",
  "Backend"
]

var timeLeft = heroGreetingItems.length
var startTimer = setInterval(function() {
  if (timeLeft <= 0) {
    timeLeft = heroGreetingItems.length;
  }

  heroGreetingSpan.innerHTML = heroGreetingItems[timeLeft - 1];
  timeLeft -= 1;
}, 1000)