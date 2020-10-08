import { gsap } from "gsap";

// gsap.registerPlugin(ScrollTrigger);

// ===============================
const select = e => document.querySelector(e);
const selectAll = e => document.querySelectorAll(e);

const menuIcon = select('.nav-btn');
const introName = select('.intro-name');
const introInfo = select('.intro-info');
const introImage1 = select('.intro-image-one');
const introImage2 = select('.intro-image-two');

function animateHeader() {
  const tl = gsap.timeline({delay: 1.4, defaults: {
    opacity: 0,
  }});

  tl.from('.logo', {
    y: -30,
    duration: 2,
    ease: "power3"
  })
}

function animateIntro() {

  const tl = gsap.timeline({delay: 1.4, defaults: {
    opacity: 0,
  }});
  
  tl.from(introName, {
    y: 200,
    duration: 1,
    ease: "power2.out",
  })
  .from(introInfo, {
    x: -50,
    duration: 2,
    ease: "power3.out"
  })
  .from(introImage1, {
    y: -40,
    duration: 10,
    ease: "power4.out"
  }, "<0.2")
  .from(introImage2, {
    y: 40,
    duration: 10,
    ease: "power4.out"
  }, "<0.2" )
}

function init() {
  gsap.set(".container", {autoAlpha: 1})
  animateHeader()
  animateIntro()
}

window.onload = () => init()
