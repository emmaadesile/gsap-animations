import { gsap } from "gsap";

const text = document.querySelector(".text");

console.log(gsap)

gsap.to(
  text.children,
  0.7, 
  {
    x: "-40",
    ease: "power2.inOut",
    yoyo: true,
    stagger: 0.08,
    repeat: -1
  }
)