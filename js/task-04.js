let counterValue = 0;

const decrementHandler = () => {
  counterValue = counterValue - 1;
  updateCounterValue(counterValue);
};

const incrementHandler = () => {
  counterValue = counterValue + 1;
  updateCounterValue(counterValue);
};

const updateCounterValue = newValue => {
  document.querySelector("#value").textContent = newValue;
};

document
  .querySelector('button[data-action="decrement"]')
  .addEventListener("click", decrementHandler);
document
  .querySelector('button[data-action="increment"]')
  .addEventListener("click", incrementHandler);
