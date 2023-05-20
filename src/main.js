import { navDescAnimation, navScrollAnimation, scaleMain, animatePortrain } from "./animations/animations";

const navEle = document.querySelectorAll('.nav-desc')
const sectionHeaders = document.querySelectorAll(".section-title")
const main = document.querySelector('.main')
const portrait = document.querySelector('.portrait')

navDescAnimation(navEle)
scaleMain(main)
animatePortrain(portrait)

let prevScroll = 0;

window.addEventListener('scroll', (e) => {
    console.log("SCROLL")
    // console.log(prevScroll < window.scrollY)
    if(prevScroll > window.scrollY) {
        prevScroll = window.scrollY
        navScrollAnimation(navEle, false)
        // console.log("scrolling up")
    } else if (prevScroll < window.scrollY) {
        prevScroll = window.scrollY
        navScrollAnimation(navEle, true)
        // console.log("scroll down")
    } 
})

