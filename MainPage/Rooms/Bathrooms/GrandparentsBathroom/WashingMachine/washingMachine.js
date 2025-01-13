let currentTemperature = 30;
let currentCycleIndex = 0;

// Define cycles with associated preset temperatures
const cycles = [
  { name: "Normal", temperature: 40 },
  { name: "Delicate", temperature: 30 },
  { name: "Heavy", temperature: 60 },
  { name: "Quick Wash", temperature: 50 }
];

function updateTemperatureDisplay() {
  document.getElementById("currentTemperature").textContent = currentTemperature;
}

function updateCycleDisplay() {
  document.getElementById("currentCycle").textContent = cycles[currentCycleIndex].name;
}

function nextCycle() {
  // Cycle through the washing modes
  currentCycleIndex = (currentCycleIndex + 1) % cycles.length;
  currentTemperature = cycles[currentCycleIndex].temperature; // Set temperature based on the cycle
  updateCycleDisplay();
  updateTemperatureDisplay();
}

function startWashing() {
  alert(`Starting washing cycle: ${cycles[currentCycleIndex].name} at ${currentTemperature}°C`);
}

function stopWashing() {
  alert("Stopping the washing machine...");
}
