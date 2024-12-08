const me = document.getElementById("me");

const textArr = ["Developer", "Designer", "Imposer"]
let textIndex = 0
let charIndex = 0

function typeChar(){
    if(charIndex < textArr[textIndex].length) {
        me.textContent += textArr[textIndex].charAt(charIndex)
        charIndex++
        setTimeout(typeChar, 100)
    } else {
        setTimeout(deleteChar, 2000)
    }
}

function deleteChar() {
    if(charIndex > 0) {
        me.textContent = textArr[textIndex].substring(0, charIndex - 1)
        charIndex--
        setTimeout(deleteChar, 70)
    } else {
        textIndex = (textIndex + 1) % textArr.length
        setTimeout(typeChar, 100)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeChar, 100)
})