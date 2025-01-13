let carStatus = "Closed";

function openCar() {
    carStatus = "Open";
    updateCarDisplay();
}

function closeCar() {
    carStatus = "Closed";
    updateCarDisplay();
}


function updateCarDisplay() {
    const carStatusElement = document.getElementById("carStatus");
    carStatusElement.textContent = carStatus;
}

document.addEventListener("DOMContentLoaded", function () {
    updateCarDisplay();
});
