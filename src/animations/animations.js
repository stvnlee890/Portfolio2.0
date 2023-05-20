import { gsap, Power4 } from "gsap";

export function navDescAnimation(element) {
    gsap.to(element, {y: 0, ease: Power4.easeInOut, duration: 0.9, stagger: 0.1})
}

export function navScrollAnimation(element, direction) {
    console.log(direction)
    if(direction) {
        gsap.to(element, { y: -30})
    } else {
        gsap.to(element, { y: 0 })
        // gsap.fromTo(element, { y: -20 }, { y:0 })
    }
}