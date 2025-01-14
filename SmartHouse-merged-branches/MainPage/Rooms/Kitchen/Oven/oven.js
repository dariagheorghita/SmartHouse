let activeCard = null;
let brightness = 50;

function setActiveCard(cardId) {
  if (activeCard) {
    const previousActiveCard = document.getElementById(activeCard);
    previousActiveCard.classList.remove("active");
  }

  const currentCard = document.getElementById(cardId);
  currentCard.classList.add("active");

  activeCard = cardId;
}

function adjustBrightness() {
  const newBrightness = prompt("Enter heat level (1-400):", brightness);
  if (newBrightness && !isNaN(newBrightness) && newBrightness >= 1 && newBrightness <= 400) {
    brightness = parseInt(newBrightness);
    updateBrightnessDisplay();
  } else {
    alert("Invalid input. Please enter a number between 1 and 100.");
  }
}

function updateBrightnessDisplay() {
  const brightnessValueElement = document.getElementById("brightness-value");
  brightnessValueElement.textContent = `${brightness}%`;
}

document.querySelector(".brightness-control").addEventListener("click", adjustBrightness);
