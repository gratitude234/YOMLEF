// Selecting elements
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('closeMenu');
const menuOverlay = document.getElementById('menuOverlay'); 
const navLinks = document.querySelectorAll('.nav_links li a'); // Select all links

// Toggle Hamburger Menu and Overlay
function toggleMenu(isOpen) {
    const action = isOpen ? 'add' : 'remove';
    menu.classList[action]('open');
    menuOverlay.classList[action]('open');
    document.body.style.overflow = isOpen ? 'hidden' : ''; // Toggle scroll
}

// Open menu
hamburger.addEventListener('click', () => toggleMenu(true));

// Close menu (close button or overlay click)
closeMenu.addEventListener('click', () => toggleMenu(false));
menuOverlay.addEventListener('click', () => toggleMenu(false));

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
});

// Scroll-Based Fade-In Animations
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in');
    const options = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    elements.forEach(el => observer.observe(el));
});

// Modal Handling
const modal = document.getElementById("modal");
const btn = document.querySelector(".btn-primary"); 
const closeBtn = document.querySelector(".close");

btn.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = "block";
    document.body.classList.add("no-scroll");
});

closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll");
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        document.body.classList.remove("no-scroll");
    }
});

// Form submission handler (with EmailJS)
document.getElementById('getInvolvedForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    emailjs.sendForm('service_8pzmn95', 'template_8mefjz2', this)
        .then(function(response) {
            if (response.status === 200) {
                document.getElementById('getInvolvedForm').style.display = 'none';
                document.getElementById('thankYouModal').style.display = 'block';
                document.getElementById('getInvolvedForm').reset();
            }
        }, function(error) {
            document.getElementById('errorModal').style.display = 'block';
        });
});

// Close Thank You Modal
document.querySelector('.close-thank-you').addEventListener('click', function() {
    closeModal('thankYouModal');
});

// Function to close any modal and re-enable scrolling
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.classList.remove("no-scroll");
}

// Ensure modals are closed when clicking outside
window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('thankYouModal')) {
        closeModal('thankYouModal');
    }
});

// Newsletter form submission
document.querySelector('.newsletter form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formData = new FormData(this);
    fetch('https://formspree.io/f/mnnqqezr', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    }).then(function(response) {
        if (response.ok) {
            document.getElementById('alertModal').style.display = 'block';
            document.querySelector('.newsletter form').reset();
        } else {
            alert('There was a problem with your submission. Please try again.');
        }
    }).catch(function(error) {
        alert('Error submitting the form. Please check your internet connection.');
    });
});

// Close custom alert modal
document.getElementById('closeAlertBtn').addEventListener('click', function() {
    document.getElementById('alertModal').style.display = 'none';
});
