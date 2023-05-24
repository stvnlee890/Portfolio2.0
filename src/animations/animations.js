import { gsap, Power4 } from "gsap";

const tl = gsap.timeline();
export function navDescAnimation(element) {
  gsap.to(element, {
    y: 0,
    ease: Power4.easeInOut,
    duration: 0.9,
    stagger: 0.1,
  });
}

export function navScrollAnimation(element, direction) {
  if (direction) {
    gsap.to(element, { y: -30, delay: 0.2 });
  } else {
    gsap.to(element, { y: 0, delay: 0.2 });
  }
}

export function scaleMain(element) {
  gsap.to(element, {
    scaleY: 1,
    scaleX: 1,
    ease: Power4.easeInOut,
    duration: 2,
    delay: 1.5,
  });
}

export function animatePortrait(element) {
  gsap.fromTo(
    element,
    {
      y: 200,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: Power4.easeInOut,
      duration: 2,
      delay: 1.5,
    }
  );
}

// export function animatePortraitContainer(element1, element2) {
//   gsap.to(element1, { height: "0", delay: 2, ease: Power4.easeInOut, duration: 1 });
// }
export function animatePortraitContainer(element1, element2) {
  gsap.fromTo(element1, { height: 0 }, { height: 170, delay: 2, ease: Power4.easeInOut, duration: 1 });
}
