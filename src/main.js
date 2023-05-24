import {
  navDescAnimation,
  navScrollAnimation,
  scaleMain,
  animatePortraitContainer,
} from "./animations/animations";

const navEle = document.querySelectorAll(".nav-desc");
const main = document.querySelector(".main");
const portraitContainer = document.querySelector(".img-container");
const navWords = document.querySelectorAll(".nav-word");
const sectionHeaders = document.querySelectorAll(".section-title");
console.log(navWords);

navDescAnimation(navEle);
scaleMain(main);
animatePortraitContainer(portraitContainer);
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

/* 
Create empty array to store y vals of element after 3 sec timeout since animation takes some time
add a window.onBeforeunload to scroll to top page when user refresh page so that yVals don't mess up
*/

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const yVal = [];

setTimeout(() => {
  sectionHeaders.forEach((ele, index) => {
    console.log(ele.getBoundingClientRect().y);
    if (index === 0) {
      yVal.push(0);
    } else {
      yVal.push(ele.getBoundingClientRect().y);
    }
  });
}, 3000);

navWords.forEach((ele, index) => {
  ele.addEventListener("click", () => {
    // console.log(yVal, sectionHeaders[index].innerHTML);
    window.scrollTo({
      top: yVal[index],
      behavior: "smooth",
    });
  });
});
