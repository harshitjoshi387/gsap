import "./style.css";
import gsap from "gsap";

// gsap.to(".box", {
//   x: 300,
//   duration: 1.5,
//   delay:0.6,
//   ease:"power2.inout",
// });

gsap.from("h1 span", {
  yPercent: 120,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out",
  stagger: {
    each: 0.04,
    from:"random"
  },
});

