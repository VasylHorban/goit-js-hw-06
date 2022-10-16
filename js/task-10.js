const [input, btnCreate, btnDestroy] = document.querySelector("#controls").children;
const box = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = amount => {
  let markup = "";
  let size = 30;
  for (let i = 0; i < amount; i++) {
    markup += `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px"></div>`;
    size += 10;
  }
  if(markup) box.insertAdjacentHTML("beforeend", markup);
};

const destroyBoxes = () => {
  if(box.hasChildNodes()) box.innerHTML = "";
};

btnCreate.addEventListener("click", () => {
  createBoxes(input.value);
});
btnDestroy.addEventListener("click", destroyBoxes);
