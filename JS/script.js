const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('closeMenu');
const menuOverlay = document.getElementById('menuOverlay'); 
const navLinks = document.querySelectorAll('.nav_links li a'); // Select all links

// Toggle the hamburger menu with animation and overlay
hamburger.addEventListener('click', function() {
    menu.classList.add('open');
    menuOverlay.classList.add('open'); // Show overlay
    document.body.style.overflow = 'hidden'; // Disable scroll
});

// Close menu and overlay when the close button is clicked
closeMenu.addEventListener('click', function() {
    menu.classList.remove('open');
    menuOverlay.classList.remove('open'); // Hide overlay
    document.body.style.overflow = ''; // Enable scroll
});

// Also close menu and overlay when clicking on a menu link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        menu.classList.remove('open');
        menuOverlay.classList.remove('open'); // Hide overlay
        document.body.style.overflow = ''; // Enable scroll
    });
});

// Close menu and overlay when overlay itself is clicked
menuOverlay.addEventListener('click', function() {
    menu.classList.remove('open');
    menuOverlay.classList.remove('open'); // Hide overlay
    document.body.style.overflow = ''; // Enable scroll
});
