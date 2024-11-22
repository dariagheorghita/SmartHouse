document.getElementById("register-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert("Please fill out all fields.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    alert(`Account successfully created for ${firstName} ${lastName}`);
    
    window.location.href = "#";
  });
  
  function redirectToLogin() {
    window.location.href = "../Login/login.html";
  }
  