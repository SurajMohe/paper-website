const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var tl =  gsap.timeline();

tl.to("#page",{
    y:"100vh",
    scale:0.6,
    duration:0
})

tl.to("#page",{
    y:"10vh",
    duration:1,
    delay:1
})
tl.to("#page",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.7,
})