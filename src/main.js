import {
  navDescAnimation,
  navScrollAnimation,
  scaleMain,
  animatePortraitContainer,
} from "./animations/animations";

const body = document.querySelector("body");
const navEle = document.querySelectorAll(".nav-desc");
const main = document.querySelector(".main");
const portraitContainer = document.querySelector(".img-container");
const navWords = document.querySelectorAll(".nav-word");
const sectionHeaders = document.querySelectorAll(".section-title");
const archivesLink = document.querySelector(".archives-link");

/*
Add style on page load to prevent users from scrolling until initial 
animation finished. This prevents y position of each element from 
being altered by user scroll. Then on the setTimeout function,
reset these values to allow user scrolling
*/
body.style.height = "100%";
body.style.overflow = "hidden";

/*
unload event listener does not cause the page to "flash", seems to work 
better than onbeforeunload
*/
window.addEventListener("unload", () => {
  window.scrollTo(0, 0);
})

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
add a window.onBeforeunload to scroll to top page when user refresh page so that yVals don't mess up.
However, if I want to navigate to another html, this causes the page to "flash"
SOLUTION
remove listener when clicked!!!
*/
// archivesLink.addEventListener("click", (e) => {
//   window.onbeforeunload = null;
// });



// window.onbeforeunload = function (e) {
//   e.preventDefault();
//   window.scrollTo(0, 0);
// };

const yVal = [];

setTimeout(() => {
  sectionHeaders.forEach((ele, index) => {
    // console.log(ele.getBoundingClientRect().y);
    if (index === 0) {
      yVal.push(0);
    } else {
      yVal.push(ele.getBoundingClientRect().y);
    }
  });
  body.style.height = "";
  body.style.overflow = "";
}, 2700);

navWords.forEach((ele, index) => {
  ele.addEventListener("click", () => {
    // console.log(yVal, sectionHeaders[index].innerHTML);
    window.scrollTo({
      top: yVal[index],
      behavior: "smooth",
    });
  });
});
