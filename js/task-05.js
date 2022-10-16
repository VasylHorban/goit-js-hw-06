const inputHandler = e => {
  document.querySelector("#name-output").textContent = e.target.value || "Anonymous";
};

document.querySelector("#name-input").addEventListener("input", inputHandler);
