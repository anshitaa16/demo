var tl = gsap.timeline();


const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
 
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();



const card1 = document.querySelector(".p2 .container .card1");
const card1Front = card1.querySelector(".card1 .front");
const card1Back = card1.querySelector(".card1 .back");

const card1Animation = gsap.timeline({ paused: true });

card1Animation.to(card1, { rotationY: 180 });

card1.addEventListener("mouseenter", () => {
    card1Animation.play();
});

card1.addEventListener("mouseleave", () => {
    card1Animation.reverse();
});


const card2 = document.querySelector(".p2 .container .card2");
const card2Front = card2.querySelector(".card2 .front");
const card2Back = card2.querySelector(".card2 .back");

const card2Animation = gsap.timeline({ paused: true });

card2Animation.to(card2, { rotationY: 180 });

card2.addEventListener("mouseenter", () => {
    card2Animation.play();
});

card2.addEventListener("mouseleave", () => {
    card2Animation.reverse();
});

const card3 = document.querySelector(".p2 .container .card3");
const card3Front = card3.querySelector(".card3 .front");
const card3Back = card3.querySelector(".card3 .back");

const card3Animation = gsap.timeline({ paused: true });

card3Animation.to(card3, { rotationY: 180 });

card3.addEventListener("mouseenter", () => {
    card3Animation.play();
});

card3.addEventListener("mouseleave", () => {
    card3Animation.reverse();
});


tl.from("nav img",{
    x: -20,
    opacity: 0,
    duration: .8,
    scale: 1.5,
    delay:1,
    
})
tl.from("#centr h1",{
    opacity: 0,
    y: -20,
    duration: .8,
    stagger: .1,
    scale: 1.5,
   
    
})
tl.from("nav #social",{
    y: -20,
    opacity: 0,
    duration: .8,
    scale: 1.5
})
// tl.to(".fshn h1 span",{
//     opacity:0,
//     x:-20,
//     duration:.1,
    
   

// })


tl.from(".fshn h1 span",{
    opacity:0,
    x:-20,
    duration:.8,
    stagger:.1,
   
})

tl.from(".cntt",{
    opacity:0,
    scale:.5,
    duration:.1,
    delay: 10,
    scrollTrigger:{
        trigger:".cntt",
        scroller:".main",
        scrub:2,
        start:"top 80%",
        end: "top 0",
    }
})
tl.from(".imgg",{
    opacity: 0,
    y: -20,
    duration: .8,
    stagger: .1,
    scale: 1.5,
    scrollTrigger:{
        trigger:".imgg",
        scroller:".main",
        scrub:2,
        start:"top 10%",
        end: "top 50%",
    }
})

tl.from(".iii",{
    opacity:0,
    scale:1.5,
    duration:.2,
    scrollTrigger:{
        trigger:".iii",
        scroller:".main",
        scrub:2,
        start:"top 20%",
        end: "top 50%",
    }
})

tl.from(".dibba",{
    opacity:0,
    x:50,
    duration:.5,
    stagger:.1,
    scrollTrigger:{
        trigger:".dibba",
        scroller:".main",
        scrub:2,
        start:"top 35%",
        end:"top 50%"
    }
})
tl.from(".dibba #con h1 span",{
    opacity:0,
    y:50,
    duration:.4,
    stagger:.1
})
tl.from(".p2 .container .card1",{
    opacity:0,
    x:-30,
    duration:.5,
    scrollTrigger:{
        trigger:".p2 .container .card1",
        scroller:".main",
        scrub:2,
        start:"top 50%",
        end:"top 50%"
    }
})
tl.from(".p2 .container .card2",{
    opacity:0,
    scale:.5,
    duration:.1,
    
    scrollTrigger:{
        trigger:".p2 .container .card2",
        scroller:".main",
        scrub:2,
        start:"top 50%",
        end:"top 50%"
    }
})
tl.from(".p2 .container .card3",{
    opacity:0,
    x:50,
    duration:.5,
    delay:.5,
    scrollTrigger:{
        trigger:".p2 .container .card3",
        scroller:".main",
        scrub:2,
        start:"top 60%",
        end:"top 50%"
    }
})
