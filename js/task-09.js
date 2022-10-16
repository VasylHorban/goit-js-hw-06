function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorHandler = () => {
  const randomColor = getRandomHexColor()
  document.querySelector(".color").textContent = randomColor
  document.body.style.backgroundColor = randomColor
}

document.querySelector(".change-color").addEventListener("click", changeColorHandler)