// Initialize AOS to make the animations work
AOS.init();


document.addEventListener('DOMContentLoaded', function () {
  const loadingBar = document.getElementById('loading-bar');
  const loadingOverlay = document.getElementById('loading-overlay');

  // Wait for a brief moment to ensure all elements are rendered
  setTimeout(() => {
    // Start the green bar's animation by setting its width to 100%
    loadingBar.style.width = '100%';
  }, 50);

  // This event fires when the animation is complete
  loadingBar.addEventListener('transitionend', () => {
    // Hide the entire loading screen smoothly
    loadingOverlay.style.opacity = '0';

    // Completely remove the loading screen from the page after it fades out
    setTimeout(() => {
      loadingOverlay.style.display = 'none';
    }, 500);
  });
});
