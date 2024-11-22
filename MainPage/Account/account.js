document.addEventListener("DOMContentLoaded", function () {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));

    if (!user) {
        alert("You must log in first!");
        window.location.href = "../MainPage/home.html";
        return;
    }

    const fullNameElement = document.getElementById("user-full-name");
    fullNameElement.textContent = `${user.firstName} ${user.lastName}`;
});
