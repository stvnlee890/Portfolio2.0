import {
  navDescAnimation,
  navScrollAnimation,
  scaleMain,
  animatePortrain,
} from "./animations/animations";

const navEle = document.querySelectorAll(".nav-desc");
const main = document.querySelector(".main");
const portrait = document.querySelector(".portrait");

navDescAnimation(navEle);
scaleMain(main);
animatePortrain(portrait);

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
