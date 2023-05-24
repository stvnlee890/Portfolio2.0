import {
  navDescAnimation,
  navScrollAnimation,
  scaleMain,
  animatePortraitContainer
} from "./animations/animations";

const navEle = document.querySelectorAll(".nav-desc");
const main = document.querySelector(".main");
const portraitContainer = document.querySelector('.img-container')
const navWords = document.querySelectorAll('.nav-word')
console.log(navWords)


navDescAnimation(navEle);
scaleMain(main);
animatePortraitContainer(portraitContainer)
let prevScroll = 0;

window.addEventListener("scroll", (e) => {
  if (prevScroll > window.scrollY) {
    prevScroll = window.scrollY;
    navScrollAnimation(navEle, false);
  } else if (prevScroll < window.scrollY) {
    prevScroll = window.scrollY;
    navScrollAnimation(navEle, true);
  }
});

