let windowStatus = "Closed";
let openingPercentage = 0;

function openWindow() {
    windowStatus = "Fully Open";
    openingPercentage = 100;
    updateWindowDisplay();
}

function closeWindow() {
    windowStatus = "Closed";
    openingPercentage = 0;
    updateWindowDisplay();
}

function adjustWindow() {
    const newOpening = prompt("Enter the desired opening percentage (0-100):", openingPercentage);
    if (newOpening !== null && !isNaN(newOpening) && newOpening >= 0 && newOpening <= 100) {
        openingPercentage = parseInt(newOpening);
        windowStatus = `Partially Open (${openingPercentage}%)`;
        updateWindowDisplay();
    } else {
        alert("Invalid input. Please enter a number between 0 and 100.");
    }
}

function updateWindowDisplay() {
    const windowStatusElement = document.getElementById("windowStatus");
    windowStatusElement.textContent = windowStatus;
}

document.addEventListener("DOMContentLoaded", function () {
    updateWindowDisplay();
});
