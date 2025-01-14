let camStatus = "Off";
let rotationAngle = 0;
let motionDetectionEnabled = false;

function turnOnCam() {
    camStatus = "On";
    updateCamDisplay();
}

function turnOffCam() {
    camStatus = "Off";
    motionDetectionEnabled = false; 
    updateCamDisplay();
}

function rotateCam() {
    if (camStatus === "On") {
        rotationAngle = (rotationAngle + 90) % 360; 
        alert(`Camera rotated to ${rotationAngle} degrees`);
    } else {
        alert("Turn on the camera before rotating.");
    }
}

function motionDetection() {
    if (camStatus === "On") {
        motionDetectionEnabled = !motionDetectionEnabled;
        alert(motionDetectionEnabled ? "Motion detection enabled." : "Motion detection disabled.");
    } else {
        alert("Turn on the camera to enable motion detection.");
    }
}

function updateCamDisplay() {
    const camStatusElement = document.getElementById("camStatus");
    camStatusElement.textContent = camStatus;
}

document.addEventListener("DOMContentLoaded", function () {
    updateCamDisplay();
});
