
const glitchText = document.querySelector('.glitch');

glitchText.addEventListener('mouseenter', () => {
    glitchText.style.animation = 'glitch 0.5s infinite alternate';
});

glitchText.addEventListener('mouseleave', () => {
    glitchText.style.animation = 'glitch 1.5s infinite alternate';
});
