// src/scripts/main.js

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


  
  document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-toggle');
    console.log('Menu button:', menuButton); // Check if the button is selected
    menuButton.addEventListener('click', function() {
      document.getElementById('mobile-menu').classList.toggle('hidden');
      console.log('Button clicked');
    });
  });


// Form validation
