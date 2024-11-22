// Initial window status and opening percentage
let windowStatus = "Closed";
let openingPercentage = 0;

// Function to open the window
function openWindow() {
    windowStatus = "Fully Open";
    openingPercentage = 100;
    updateWindowDisplay();
}

// Function to close the window
function closeWindow() {
    windowStatus = "Closed";
    openingPercentage = 0;
    updateWindowDisplay();
}

// Function to adjust the window opening percentage
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

// Function to update the window display
function updateWindowDisplay() {
    const windowStatusElement = document.getElementById("windowStatus");
    windowStatusElement.textContent = windowStatus;
}

// Initialize the interface
document.addEventListener("DOMContentLoaded", function () {
    updateWindowDisplay();
});
