const form = document.querySelector(".login-form");

const submitHandler = e => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Будь ласка, заповніть всі поля форми!");
  } else {
    const userData = {
      email: email.value,
      password: password.value,
    };
    console.log(userData)
    e.currentTarget.reset()
  }
};

form.addEventListener("submit", submitHandler);
