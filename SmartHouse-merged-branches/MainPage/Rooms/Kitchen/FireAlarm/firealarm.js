let activeCard = null;
let countdownInterval = null;
let countdownTime = 15;

function setActiveCard(cardId, message) {
  // Remove the active class from the previously active card
  if (activeCard) {
    const previousActiveCard = document.getElementById(activeCard);
    previousActiveCard.classList.remove("active");
  }

  // Add the active class to the clicked card
  const currentCard = document.getElementById(cardId);
  currentCard.classList.add("active");

  // Update the active card
  activeCard = cardId;

  // Update the status message
  const statusMessageElement = document.getElementById("statusMessage");
  statusMessageElement.textContent = message;

  // Add the active class to the status message
  statusMessageElement.classList.add("active");
}

function startTestAlarm() {
  // Start the countdown when the "Test Alarm" button is clicked
  const statusMessageElement = document.getElementById("statusMessage");

  // Set the initial status message and activate it
  statusMessageElement.textContent = "Testing Fire Alarm... Time remaining: 15 seconds";
  statusMessageElement.classList.add("active");

  // Start the countdown
  countdownTime = 15;
  countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
  const statusMessageElement = document.getElementById("statusMessage");

  if (countdownTime > 0) {
    statusMessageElement.textContent = `Testing Fire Alarm... Time remaining: ${countdownTime} seconds`;
    countdownTime--;
  } else {
    clearInterval(countdownInterval);
    statusMessageElement.textContent = "Fire Alarm Test Complete!";
    // Remove the active class once the test is complete
    setTimeout(() => statusMessageElement.classList.remove("active"), 2000);
  }
}
