let gateStatus = "Closed";

function openGate() {
    gateStatus = "Open";
    updateGateDisplay();
}

function closeGate() {
    gateStatus = "Closed";
    updateGateDisplay();
}


function updateGateDisplay() {
    const gateStatusElement = document.getElementById("gateStatus");
    gateStatusElement.textContent = gateStatus;
}

document.addEventListener("DOMContentLoaded", function () {
    updateGateDisplay();
});
