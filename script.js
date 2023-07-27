window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const layers = document.querySelectorAll('.parallax-layer');

    layers.forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const yPos = -scrollY * speed;
        layer.style.transform = `translateY(${yPos}px)`;
    });
});
