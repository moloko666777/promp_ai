import Lenis from 'lenis';
import {initAnimations} from './animations';

window.addEventListener("DOMContentLoaded", () => {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // initAnimations();

    // console.log("Lenis and GSAP animations initialized");
});


const header = document.querySelector('.header');
const headerLogo = document.querySelector('.header__logo');
const icon = document.querySelector('.icon-container');
icon.onclick = function () {
    header.classList.toggle('menu-open');
    headerLogo.classList.toggle('center__logo');
}
