console.log("Script is working.")


const inputColor = document.querySelector("#input-color")
const backgroundButton = document.querySelector("#background-button")
if (inputColor && backgroundButton) {
    backgroundButton.addEventListener("click", function (){
        backgroundButton.style.backgroundColor = inputColor.value
    })
}

const inputSize = document.querySelector("#input-size")
const sizeParagraph = document.querySelector("#paragraph-size")
if (inputSize && sizeParagraph) {
    inputSize.addEventListener('input', function (){
        let textSize = Number(inputSize.value)
        if (5 <= textSize <= 50) {
            sizeParagraph.style.fontSize = textSize + "px"
        }
    })
}

const paragraphButton = document.querySelector("#paragraph-button")
const pColorChange = document.querySelectorAll(".p-color-change")
if (paragraphButton && pColorChange) {
    let isGreen = false
    paragraphButton.addEventListener("click", function (){
        if (isGreen === false) {
            pColorChange.forEach(function(paragraph) {
                paragraph.style.color = 'green';
            });
            isGreen = true
        } else {
            pColorChange.forEach(function(paragraph) {
                paragraph.style.color = 'black';
            });
            isGreen = false
        }
    })
}

const inputToButton = document.querySelector("#input-to-button")
const buttonWithInput = document.querySelector("#button-with-input")
if (buttonWithInput && inputToButton) {
    document.addEventListener("click", event => {
        const isClickInside = buttonWithInput.contains(event.target)
        if (!isClickInside && inputToButton.value !== "") {
            buttonWithInput.innerText = inputToButton.value
        } else {
            buttonWithInput.innerText = "Click"
            inputToButton.value = ""
        }
    })
}

const yellowButton = document.querySelector("#yellow-button")
if (yellowButton) {
    let isYellow = true
    yellowButton.addEventListener("click", function (){
        if (isYellow === true) {
            yellowButton.style.backgroundColor = 'red';
            isYellow = false
        } else {
            yellowButton.style.backgroundColor = 'yellow';
            isYellow = true
        }
    })
}

const clickToEnlargeButton = document.querySelector("#click-to-enlarge-button")
const clickToEnlargeParagraph = document.querySelector("#click-to-enlarge-paragraph")
let paragraphSize = 1
if (clickToEnlargeButton && clickToEnlargeParagraph) {
    clickToEnlargeButton.addEventListener('click', function (){
        paragraphSize = paragraphSize + 1
        clickToEnlargeParagraph.style.fontSize = paragraphSize + "px"
    })
}

const button1 = document.querySelector("#button-1")
const button2 = document.querySelector("#button-2")
const whichButtonParagraph = document.querySelector("#which-button-paragraph")
if (button1 && button2 && whichButtonParagraph) {
    button1.addEventListener('click', function (){
        whichButtonParagraph.innerHTML = "Button 1 clicked"
    })
    button2.addEventListener('click', function (){
        whichButtonParagraph.innerHTML = "Button 2 clicked"
    })
}

const hooverInput = document.querySelector("#hoover-input")
if (hooverInput) {
    hooverInput.addEventListener('mouseover', function (){
        hooverInput.value = "input is hoovered over"
    })
    hooverInput.addEventListener('mouseout', function (){
        hooverInput.value = ""
    })
}