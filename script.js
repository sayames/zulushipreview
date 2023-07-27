const foregroundLayer = document.querySelector('.foreground-layer');
const cliffLayer = document.querySelector('.cliff-layer');
const backgroundLayer = document.querySelector('.background-layer');

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;

    // Adjust the translateY position based on scroll speed
    foregroundLayer.style.transform = `translateY(-${scrollY * 0.5}px)`; // Adjust the scroll speed factor as needed
    cliffLayer.style.transform = `translateY(-${scrollY * 1}px)`;
    backgroundLayer.style.transform = `translateY(-${scrollY * 0.2}px)`; // Adjust the scroll speed factor as needed
});
