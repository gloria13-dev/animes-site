//menu responsive
let menu = document.querySelector('.menu');
let menu_toggle = document.querySelector('.menu_toggle');

menu_toggle.onclick = function(){
    menu_toggle.classList.toggle('active');
    menu.classList.toggle('responsive');
}

//animation du site

const header = document.querySelector('header');
const title_span = document.querySelector('.left h1 span');
const p = document.querySelector('.left p');
const a = document.querySelector('.left a');
const img = document.querySelector('.bird');

window.addEventListener('load', ()=>{

    const TL = gsap.timeline({paused: true});
    TL
    .staggerFrom(header , 2, {y:-100 , opacity:0, ease: 'power2.out'}, 0.1)
    .staggerFrom(img , 1, {x:1000, opacity:0, ease: 'power2.out'}, 0.4)
    .staggerFrom(title_span , 1, {opacity:0, ease: 'power2.out'}, 0.1)
    .staggerFrom(p, 1,{opacity:0, ease: 'power2.out'}, 0.2)
    .staggerFrom(a, 1, {opacity:0, ease: 'power2.out'}, 0.3)

    TL.play()
})