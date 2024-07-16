// handle inputan start
document.querySelectorAll('input[type="number"]').forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value.length > 1) {
      input.value = input.value.slice(0, 1);
    }
  });

  // pake keydown nge-detect ketikan user
  // yang dihindari disini itu minus dan eksponen "e" dan "E"
  input.addEventListener("keydown", (event) => {
    if (event.key === "-" || event.key === "e" || event.key === "E") {
      event.preventDefault();
    }
  });
});

// handle inputan end
