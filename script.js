

document.addEventListener('DOMContentLoaded', function() {
  // Select the section we want to animate
  const featureSection = document.getElementsByClassName('.feature2');

  // Function to check if the section is in the viewport (visible on the screen)
  function checkVisibility() {
    // Get the position of the section relative to the viewport
    const sectionPosition = featureSection.getBoundingClientRect();

    // Check if the top of the section is within the visible part of the page
    if (sectionPosition.top < window.innerHeight && sectionPosition.bottom >= 0) {
      // If it's visible, add the 'show' class to trigger the animation
      featureSection.classList.add('show');
    } else {
      // Optionally, remove the 'show' class if it's not in the viewport
      featureSection.classList.remove('show');
    }
  }

  // Run the checkVisibility function whenever the user scrolls
  window.addEventListener('scroll', checkVisibility);

  // Run the checkVisibility function once when the page loads
  checkVisibility();
});
