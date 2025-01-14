let isTvOn = false;
let volume = 50;
let channel = 1;

function togglePower() {
    const powerCard = document.getElementById("powerCard");
    const powerStatus = document.getElementById("powerStatus");

    isTvOn = !isTvOn;
    if (isTvOn) {
        powerStatus.textContent = "Turn Off";
        powerCard.classList.add("active");
    } else {
        powerStatus.textContent = "Turn On";
        powerCard.classList.remove("active");
    }
}

function adjustVolume() {
    if (!isTvOn) {
        alert("Please turn on the TV first!");
        return;
    }

    const newVolume = prompt("Enter volume level (0-100):", volume);
    if (newVolume && !isNaN(newVolume) && newVolume >= 0 && newVolume <= 100) {
        volume = parseInt(newVolume);
        updateVolumeDisplay();
    } else if (newVolume !== null) {
        alert("Invalid input. Please enter a number between 0 and 100.");
    }
}

function changeChannel() {
    if (!isTvOn) {
        alert("Please turn on the TV first!");
        return;
    }

    const newChannel = prompt("Enter channel number:", channel);
    if (newChannel && !isNaN(newChannel) && newChannel > 0) {
        channel = parseInt(newChannel);
        updateChannelDisplay();
    } else if (newChannel !== null) {
        alert("Invalid input. Please enter a positive number.");
    }
}

function updateVolumeDisplay() {
    const volumeValueElement = document.getElementById("volumeValue");
    volumeValueElement.textContent = volume;
}

function updateChannelDisplay() {
    const channelValueElement = document.getElementById("channelValue");
    channelValueElement.textContent = channel;
}

document.addEventListener("DOMContentLoaded", function () {
    updateVolumeDisplay();
    updateChannelDisplay();
});
