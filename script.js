var tl = gsap.timeline();

tl.from("#nav a", {
    y:-1,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    stagger: 0.3
});
tl.from("#page1 h1, h3", {
    x: -1,
    opacity:0,
    stagger: 0.2
});
gsap.from("#page1 #rightpart", {
    scale: 0,
    opacity:0,
    duration:1,
    delay:1.5
});
gsap.from("#page2 h2",{
    opacity:0,
    duration:1,
    delay:0.5,
    scrollTrigger: {
        trigger: "#page2 h2",
        scroll: "body",
        start: "top 75%",
    }
})
gsap.from("#page2 p",{
    opacity:0,
    duration:3,
    stagger:1,
    scrollTrigger: {
        trigger: "#page2 p",
        scroll: "body",
        // markers: true,
        start:"top 75%",
    },
});
gsap.from("#page3 h2",{
    opacity:0,
    duration:1,
    delay:0.5,
    scrollTrigger: {
        trigger: "#page3 h2",
        scroll: "body",
        start: "top 70%",
    }
})
gsap.from("#page3 .proj",{
    opacity:0,
    duration:2,
    stagger:0.3,
    scrollTrigger: {
        trigger: "#page3 .proj",
        scroll: "body",
        start:"top 75%",
    },
});