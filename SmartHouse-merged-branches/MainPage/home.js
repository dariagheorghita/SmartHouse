document.addEventListener("DOMContentLoaded", function () {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));

    if (!user) {
        alert("You must log in first!");
        window.location.href = "../Login/login.html";
        return;
    }

    const userNameElement = document.getElementById("user-name");
    userNameElement.textContent = `${user.firstName}`;

    const roomAccess = {
        Mother: ["Livingroom", "Kitchen", "Parents Room", "Parents Bathroom", "Front Door", "Back Door", "Car Gate", "Garage", "Garden", "Twins Room", "Teenager Room", "Kids Bathroom", "Grandparents Room", "Grandparents Bathroom"],
        Father: ["Livingroom", "Kitchen", "Parents Room", "Parents Bathroom", "Front Door", "Back Door", "Car Gate", "Garage", "Garden", "Twins Room", "Teenager Room", "Kids Bathroom", "Grandparents Room", "Grandparents Bathroom"],
        Teen: ["Livingroom", "Teenager Room", "Kitchen", "Kids Bathroom", "Garden", "Front Door", "Back Door"],
        Child: ["Livingroom", "Kitchen", "Kids Bathroom", "Twins Room"],
        Grandmother: ["Livingroom", "Kitchen", "Grandparents Room", "Grandparents Bathroom", "Front Door", "Back Door", "Car Gate", "Garage", "Garden", "Twins Room", "Kids Bathroom"],
        Grandfather: ["Livingroom", "Kitchen", "Grandparents Room", "Grandparents Bathroom", "Front Door", "Back Door", "Car Gate", "Garage", "Garden", "Twins Room", "Kids Bathroom"],
    };

    const accessibleRooms = roomAccess[user.role];
    if (!accessibleRooms) {
        alert("No rooms are assigned for your role.");
        return;
    }

    const main = document.querySelector("main");

    const accessSection = document.createElement("section");
    accessSection.classList.add("accessible-rooms");

    main.prepend(accessSection);

    const roomElements = document.querySelectorAll(".room");

    roomElements.forEach(room => {
        const roomName = room.querySelector("span").innerText;

        if (!accessibleRooms.includes(roomName)) {
            room.style.display = "none"; 
        }
    });
});

function addRoom() {
    alert("Add room functionality coming soon!");
}

function toggleSettingsMenu() {
    const dropdown = document.getElementById("settingsDropdown");
    dropdown.classList.toggle("hidden"); 
  }
  
  function logout() {
    sessionStorage.removeItem("loggedInUser"); 
    window.location.href = "../Login/login.html"; 
  }
  
  document.addEventListener("click", function (event) {
    const settingsIcon = document.querySelector(".settings-menu");
    const dropdown = document.getElementById("settingsDropdown");
  
    if (!settingsIcon.contains(event.target)) {
      dropdown.classList.add("hidden");
    }
  });
  