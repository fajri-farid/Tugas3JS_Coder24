document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const loggedInUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (loggedInUser) {
      alert(`Selamat datang, ${loggedInUser.firstName}!`);
      window.location.href = "../main/home.html";
    } else {
      alert("Akun tidak ditemukan. Silakan coba lagi.");
    }
  });
