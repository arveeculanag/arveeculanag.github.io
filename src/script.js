const heroGreetingSpan = document.querySelector(".hero-greeting--highlight");
const heroGreetingItems = ["Website", "Python", "Android"];

let timeLeft = heroGreetingItems.length;
let startTimer = setInterval(() => {
  if (timeLeft <= 0) {
    timeLeft = heroGreetingItems.length;
  }

  heroGreetingSpan.innerHTML = heroGreetingItems[timeLeft - 1];
  timeLeft -= 1;
}, 1000);
