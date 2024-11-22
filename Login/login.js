const accounts = [
    { email: "mama@test.com", password: "mama", role: "Mother", firstName: "Maria", lastName: "Popescu" },
    { email: "tata@test.com", password: "tata", role: "Father", firstName: "Ion", lastName: "Popescu" },
    { email: "adolescenta@test.com", password: "copil", role: "Teen", firstName: "Ana", lastName: "Popescu" },
    { email: "copil1@test.com", password: "copil", role: "Child", firstName: "Vlad", lastName: "Popescu" },
    { email: "copil2@test.com", password: "copil", role: "Child", firstName: "Elena", lastName: "Popescu" },
    { email: "bunica@test.com", password: "bunica", role: "Grandmother", firstName: "Ioana", lastName: "Popescu" },
    { email: "bunicu@test.com", password: "bunica", role: "Grandfather", firstName: "Gheorghe", lastName: "Popescu" },
  ];
  
  document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const user = accounts.find(account => account.email === email && account.password === password);
  
    if (user) {
      sessionStorage.setItem("loggedInUser", JSON.stringify(user));
  
      alert(`Welcome, ${user.firstName} ${user.lastName}!`);
      window.location.href = "../MainPage/home.html";
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });
  
  function redirectToRegister() {
    window.location.href = "../Register/register.html";
  }
  