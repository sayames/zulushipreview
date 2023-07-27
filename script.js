const backgroundLayer = document.querySelector('.background-layer');
const foregroundLayer = document.querySelector('.foreground-layer');

// Function to handle window resize event
function handleResize() {
    // Get the width of the screen
    const screenWidth = window.innerWidth;
    // Adjust the background image position based on the screen width
    backgroundLayer.style.backgroundPosition = screenWidth > 768 ? 'right center' : 'center center';
}

// Add event listener for window resize
window.addEventListener('resize', handleResize);

// Call the handleResize function on page load
handleResize();
