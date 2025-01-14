let currentTemperature = 22;

function increaseTemperature() {
    currentTemperature++;
    updateTemperatureDisplay();
}

function decreaseTemperature() {
    currentTemperature--;
    updateTemperatureDisplay();
}

function setTemperature() {
    const newTemperature = prompt("Enter the desired temperature (°C):", currentTemperature);
    if (newTemperature !== null && !isNaN(newTemperature)) {
        currentTemperature = parseInt(newTemperature);
        updateTemperatureDisplay();
    } else {
        alert("Invalid input. Please enter a valid number.");
    }
}

function updateTemperatureDisplay() {
    const temperatureElement = document.getElementById("currentTemperature");
    temperatureElement.textContent = currentTemperature;
}

document.addEventListener("DOMContentLoaded", function () {
    updateTemperatureDisplay();
});
