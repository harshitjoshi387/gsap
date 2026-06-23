import { LucideBadgeEuro } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import "./style.css";
import gsap from "gsap";

// gsap.to(".box", {
//   x: 300,
//   duration: 1.5,
//   delay:0.6,
//   ease:"power2.inout",
// });

// gsap.from("h1 span", {
//   yPercent: 120,
//   opacity: 0,
//   duration: 1.2,
//   ease: "power4.out",
//   stagger: {
//     each: 0.04,
//     from:"random"
//   },
// pause
// const play = document.querySelector(".play");
// const pause = document.querySelector(".pause");
// const restart = document.querySelector(".restart");
// const reverse = document.querySelector(".reverse");
// const seek = document.querySelector(".seek");

// const t1 = gsap.timeline({ paused: true });

// t1.to(".box", {
//   x: 600,
//   duration: 1.3,
//   delay: 0.6,
// })
// .to(".box1", {
//   x: 600,
//   duration: 1.3,
// })
// .to(".box2", {
//   x: 600,
//   duration: 1.3,
// })
// .to(".box3", {
//   x: 600,
//   duration: 1.3,
// }).addLabel("harsh")
// .to(".box4", {
//   x: 600,
//   duration: 1.3,
// });

// play.addEventListener("click", () => {
//   t1.play();
// });

// pause.addEventListener("click", () => {
//   t1.pause();
// });

// restart.addEventListener("click", () => {
//   t1.restart();
// });

// reverse.addEventListener("click", () => {
//   t1.reverse();
// });
// seek.addEventListener("click",()=>{
//   t1.seek("harsh");
// })


// gsap.registerPlugin(ScrollTrigger);

gsap.to(".blue",{
    x:500,
    rotation:360,
    duration:2,
    scrollTrigger:{
        trigger:".blue",
        start:"top 80%",
        end:"top 30%",
        scrub:true,
        markers:true
    }
})