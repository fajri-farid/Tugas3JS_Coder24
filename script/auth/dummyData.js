const initialUsers = [
  {
    firstName: "demo",
    lastName: "akun",
    email: "demo@gmail.com",
    password: "demo123",
  },
];

if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(initialUsers));
}
