function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorHandler = () => {
  document.querySelector(".color").textContent = getRandomHexColor()
}

document.querySelector(".change-color").addEventListener("click", changeColorHandler)