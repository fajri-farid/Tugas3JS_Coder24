/* Code js ini ngehandle:
  - dark/light mode
    -> tombol dark/mode ketika di klik dia akan nambahin class di body
       classnya itu "dark-mode", sehingga bisa dipake untuk styling ketika "dark-mode itu ada"
    -> juga ngehandle warna dari icon dark/light-nya agar sesuai dark/white
  - humburger menu
*/

const modeToggle = document.getElementById("modeToggle");
const sideModeToggle = document.getElementById("sideModeToggle");
const sideNavbar = document.getElementById("sideNavbar");

function setMode(mode) {
  document.body.classList.toggle("dark-mode", mode === "dark");
  if (mode === "dark") {
    modeToggle.classList.remove("fa-moon");
    modeToggle.classList.add("fa-sun");
    modeToggle.style.color = "#ffffff";
    sideModeToggle.classList.remove("fa-moon");
    sideModeToggle.classList.add("fa-sun");
    sideModeToggle.style.color = "#000000";
  } else {
    modeToggle.classList.remove("fa-sun");
    modeToggle.classList.add("fa-moon");
    modeToggle.style.color = "#000000";
    sideModeToggle.classList.remove("fa-sun");
    sideModeToggle.classList.add("fa-moon");
    sideModeToggle.style.color = "#ffffff";
  }
}

const savedMode = localStorage.getItem("mode");
if (savedMode) {
  setMode(savedMode);
}

// main light/dark
modeToggle.addEventListener("click", function () {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  const mode = isDarkMode ? "dark" : "light";
  setMode(mode);
  localStorage.setItem("mode", mode);
});

// responsif light/dark
sideModeToggle.addEventListener("click", function () {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  const mode = isDarkMode ? "dark" : "light";
  setMode(mode);
  localStorage.setItem("mode", mode);
});

// Navbar responsive functionality
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");

menuIcon.addEventListener("click", () => {
  sideNavbar.classList.add("menu-active");
});

closeIcon.addEventListener("click", () => {
  sideNavbar.classList.remove("menu-active");
});
