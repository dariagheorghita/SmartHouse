// Get references to control cards and dynamic elements
const startWateringCard = document.getElementById('startWateringCard');
const stopWateringCard = document.getElementById('stopWateringCard');
const scheduleCard = document.getElementById('scheduleCard');
const flowCard = document.getElementById('flowCard');

const scheduleTime = document.getElementById('schedule-time');
const flowRate = document.getElementById('flow-rate');

// Variables to track system state
let wateringActive = false;
let wateringSchedule = "08:00 AM";
let currentFlowRate = "Medium";

// Function to set active card visually
function setActiveCard(cardId) {
  // Remove active state from all cards
  document.querySelectorAll('.control-card').forEach(card => {
    card.classList.remove('active');
  });

  // Add active state to the selected card
  const activeCard = document.getElementById(cardId);
  activeCard.classList.add('active');

  // Call the respective function based on cardId
  if (cardId === 'startWateringCard') {
    startWatering();
  } else if (cardId === 'stopWateringCard') {
    stopWatering();
  } else if (cardId === 'scheduleCard') {
    adjustSchedule();
  } else if (cardId === 'flowCard') {
    adjustFlow();
  }
}

function startWatering() {
    if (wateringActive) {
        alert('Watering system is already active!');
        return;
  }
  wateringActive = true;
  alert('Watering system started.');
}

function stopWatering() {
    if (!wateringActive) {
        alert('Watering system is not active.');
        return;
      }
    
      wateringActive = false;
      alert('Watering system stopped.');
}

// Function to adjust schedule
function adjustSchedule() {
  const newTime = prompt('Enter new schedule time (e.g., 06:30 AM):', wateringSchedule);
  if (newTime) {
    wateringSchedule = newTime;
    scheduleTime.textContent = wateringSchedule;
  }
}

// Function to adjust water flow
function adjustFlow() {
  const flowOptions = ["Low", "Medium", "High"];
  const currentIndex = flowOptions.indexOf(currentFlowRate);
  const nextIndex = (currentIndex + 1) % flowOptions.length; // Cycle through options
  currentFlowRate = flowOptions[nextIndex];
  flowRate.textContent = currentFlowRate;

  // Keep the flow card highlighted after change
  flowCard.classList.add('active');
}

// Event Listeners for Manual Control
startWateringCard.addEventListener('click', () => setActiveCard('startWateringCard'));
stopWateringCard.addEventListener('click', () => setActiveCard('stopWateringCard'));
scheduleCard.addEventListener('click', () => setActiveCard('scheduleCard'));
flowCard.addEventListener('click', () => setActiveCard('flowCard'));
