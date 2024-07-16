let tempUser = JSON.parse(localStorage.getItem("tempUser")) || {};

function displayVerificationCode() {
  const verificationCode = tempUser.verificationCode;
  alert(`Your verification code: ${verificationCode}`);
}

tempUser.verificationCode = generateVerificationCode();
localStorage.setItem("tempUser", JSON.stringify(tempUser));
displayVerificationCode();

const verificationForm = document.querySelector("form");

verificationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const digit1 = document.getElementById("digit1").value;
  const digit2 = document.getElementById("digit2").value;
  const digit3 = document.getElementById("digit3").value;
  const digit4 = document.getElementById("digit4").value;

  const inputCodeVerif = `${digit1}${digit2}${digit3}${digit4}`;
  const storedCode = tempUser.verificationCode;

  if (inputCodeVerif === storedCode) {
    saveUser(tempUser);

    alert("Email verification successful!");
    localStorage.removeItem("tempUser");

    window.location.href = "login.html";
  } else {
    alert("Incorrect verification code. Please try again.");

    tempUser.verificationCode = generateVerificationCode();
    localStorage.setItem("tempUser", JSON.stringify(tempUser));
    displayVerificationCode();
  }
});

function saveUser(newUser) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
}

function generateVerificationCode() {
  const newCode = Math.floor(1000 + Math.random() * 9000).toString();
  return newCode;
}
