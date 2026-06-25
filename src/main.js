import "./style.css";
import gsap from "gsap";
import { LucideBadgeEuro } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger,SplitText);


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
// gsap.set(".imageDiv",{
//   scale:0.3,
// })

// gsap.to(".imageDiv",{
//     scale:1,
//     ease:"power4.out",
    
//     scrollTrigger:{
//         trigger:".page2",
//         start:"top top",
//         end:"top -100%",
//         scrub:true,
//        pin:true,
//     }
// })
// const split = new SplitText('.title h1',{
//     type:'lines'
// })
// const split1 = new SplitText('.title p',{
//     type:'lines'
// })

// gsap.from(split.lines,{
//     yPercent:50,
//     opacity:0,
//     duration:2.2,
//     ease:'expo.out',
//     stagger:{
//         each:0.09,
//         from:"start"
//     }
// })
// gsap.from(split1.lines,{
//     yPercent:100,
//     opacity:0,
//     duration:2.2,
//     ease:'expo.out',
//     stagger:{
//         each:0.09,
//         from:"start"
//     }
// })