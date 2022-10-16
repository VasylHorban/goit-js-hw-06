const text = document.querySelector("#text")
const fontSizeControl = document.querySelector("#font-size-control")

text.style.fontSize = fontSizeControl.value + "px"

const changeSizeHandler = e => {
    text.style.fontSize = e.target.value + "px"
}

fontSizeControl.addEventListener('input', changeSizeHandler)