// JavaScript para controle do slideshow
const radioButtons = document.querySelectorAll('input[name="btn-radio"]');
const slideBoxes = document.querySelectorAll('.slide-box');

let currentSlide = 0;

function nextSlide() {
    const nextSlide = (currentSlide + 1) % slideBoxes.length;
    radioButtons[nextSlide].checked = true;
    currentSlide = nextSlide;
}

// Troca de slide automaticamente a cada 5 segundos
setInterval(nextSlide, 5000);
