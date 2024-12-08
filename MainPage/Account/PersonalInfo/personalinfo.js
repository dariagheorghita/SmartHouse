document.addEventListener("DOMContentLoaded", function () {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));

    if (!user) {
        alert("You must log in first!");
        window.location.href = "../MainPage/home.html";
        return;
    }

    const fullNameElement = document.getElementById("user-full-name");
    fullNameElement.textContent = `${user.firstName} ${user.lastName}`;

    const profileSection = document.querySelector(".profile-section");
    const accessSection = document.createElement("div");
    accessSection.classList.add("access-section");

    const accessibleRooms = {
        Mother: ["Livingroom", "Kitchen", "Parents Room", "Parents Bathroom", "Front Door", "Back Door", "Car Gate", "Garage", "Garden", "Twins Room", "Teenager Room", "Kids Bathroom", "Grandparents Room", "Grandparents Bathroom"],
        Father: ["Livingroom", "Kitchen", "Parents Room", "Parents Bathroom", "Front Door", "Back Door", "Car Gate", "Garage", "Garden", "Twins Room", "Teenager Room", "Kids Bathroom", "Grandparents Room", "Grandparents Bathroom"],
        Teen: ["Livingroom", "Teenager Room", "Kitchen", "Kids Bathroom", "Garden", "Front Door", "Back Door"],
        Child: ["Livingroom", "Kitchen", "Kids Bathroom", "Twins Room"],
        Grandmother: ["Livingroom", "Kitchen", "Grandparents Room", "Grandparents Bathroom", "Front Door", "Back Door", "Car Gate", "Garage", "Garden", "Twins Room", "Kids Bathroom"],
        Grandfather: ["Livingroom", "Kitchen", "Grandparents Room", "Grandparents Bathroom", "Front Door", "Back Door", "Car Gate", "Garage", "Garden", "Twins Room", "Kids Bathroom"],
    }[user.role] || ["No rooms assigned"];

    accessSection.innerHTML = `
        <p class="profile-message">As <strong>${user.role}</strong>, you can access the following rooms:</p>
        <ul class="accessible-rooms">
            ${accessibleRooms.map(room => `<li>${room}</li>`).join("")}
        </ul>
    `;

    profileSection.appendChild(accessSection);
});
