// Function untuk handle submission form pendaftaran
function handleRegistration(event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
    return;
  }

  const newUser = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };

  localStorage.setItem("tempUser", JSON.stringify(newUser));

  window.location.href = "register-auth.html";
}

const registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener("submit", handleRegistration);
