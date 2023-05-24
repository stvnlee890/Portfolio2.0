import {
  navDescAnimation,
  navScrollAnimation,
  scaleMain,
  animatePortrait,
  animatePortraitContainer
} from "./animations/animations";

const navEle = document.querySelectorAll(".nav-desc");
const main = document.querySelector(".main");
const portrait = document.querySelector(".portrait");
const portraitContainer = document.querySelector('.img-container')

navDescAnimation(navEle);
scaleMain(main);
// animatePortrait(portrait);
animatePortraitContainer(portraitContainer, portrait)
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
