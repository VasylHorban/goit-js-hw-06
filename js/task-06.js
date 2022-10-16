const validationInput = document.querySelector("#validation-input");

const validate = e => {
  if (e.target.value.length == validationInput.dataset.length) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
};

validationInput.addEventListener("blur", validate);
