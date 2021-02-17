let controller;
let slideScene;

function animateSlides() {
    controller = new ScrollMagic.Controller();    

    const sliders = document.querySelectorAll('.slide');
    const nav = document.querySelector('.nav-header');

    //loop over each slide
    sliders.forEach(slide => {
        const revealImg = slide.querySelector('.reveal-img');
        const img = slide.querySelector('img');
        const revealText = slide.querySelector('.reveal-text');

        //Gsap
        const slideTl = gsap.timeline({
            defaults: {duration: 1, ease: "power2.inOut"}
        });
        slideTl.fromTo(revealImg, {x:"0%"}, {x:"100%"});
        slideTl.fromTo(img, {scale:1.5}, {scale:1}, '-=1');
        slideTl.fromTo(revealText, {x:"0%"},{x:"100%"}, '-=0.75');
        slideTl.fromTo(nav, {y:"-100%"},{y:"0%"}, '-=0.6');
    });
}

animateSlides();