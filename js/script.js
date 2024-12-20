// Burger Menu

const nav = document.querySelector(".nav")
const burger_menu = document.querySelector(".burger-menu")
const nav_links = document.querySelectorAll(".nav-link")

const navOpen = () => {
    if(nav.classList.contains("open")) {
        nav.classList.remove("open")
    } else {
        nav.classList.add("open")
    }
}

burger_menu.addEventListener("click", () => {
    navOpen()
})

nav_links.forEach(nav_link => {
    nav_link.addEventListener("click", () => {
        navOpen()
    })
})

// --------------------------------------------

const me = document.getElementById("me");

const textArr = ["Разработчик", "Дизайнер", "Верстальщик"]
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
