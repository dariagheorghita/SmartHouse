let doorStatus = "Closed";

function openDoor() {
    doorStatus = "Open";
    updateDoorDisplay();
}

function closeDoor() {
    doorStatus = "Closed";
    updateDoorDisplay();
}


function updateDoorDisplay() {
    const doorStatusElement = document.getElementById("doorStatus");
    doorStatusElement.textContent = doorStatus;
}

document.addEventListener("DOMContentLoaded", function () {
    updateDoorDisplay();
});
