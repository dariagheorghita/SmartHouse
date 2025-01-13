let currentCycleIndex = 0;
let currentTemperature = 50;

const cycles = [
  { name: "Normal", temperature: 50 },
  { name: "Eco", temperature: 40 },
  { name: "Intensive", temperature: 65 },
  { name: "Quick Wash", temperature: 35 },
  { name: "Glass", temperature: 45 }
];

function updateCycleDisplay() {
  document.getElementById("currentCycle").textContent = cycles[currentCycleIndex].name;
}

function updateTemperatureDisplay() {
  document.getElementById("currentTemperature").textContent = cycles[currentCycleIndex].temperature;
}

function nextCycle() {
  currentCycleIndex = (currentCycleIndex + 1) % cycles.length;
  updateCycleDisplay();
  updateTemperatureDisplay();
}

function previousCycle() {
  currentCycleIndex = (currentCycleIndex - 1 + cycles.length) % cycles.length;
  updateCycleDisplay();
  updateTemperatureDisplay();
}

function startDishwasher() {
  alert(`Starting ${cycles[currentCycleIndex].name} cycle at ${cycles[currentCycleIndex].temperature}°C`);
}

function stopDishwasher() {
  alert("Dishwasher stopped.");
}
