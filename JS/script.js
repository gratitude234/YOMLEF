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







// Toggle Hamburger Menu


hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    menuOverlay.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
    menuOverlay.classList.remove('active');
});

// Close Menu When Clicking Outside
menuOverlay.addEventListener('click', () => {
    menu.classList.remove('active');
    menuOverlay.classList.remove('active');
});

// Scroll-Based Fade-In Animations
function handleScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');

  const options = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  elements.forEach(el => {
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', handleScrollAnimations);





var modal = document.getElementById("modal");
var btn = document.querySelector(".btn-primary"); // Get Involved button
var closeBtn = document.querySelector(".close");

btn.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = "block";
});

closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
});

// When the user clicks outside the modal, close it
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});



// Get the modal, button, and close elements
var modal = document.getElementById("modal");
var btn = document.querySelector(".btn-primary"); // Get Involved button
var closeBtn = document.querySelector(".close");

// When the user clicks the Get Involved button, open the modal and disable background scrolling
btn.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = "block";
    document.body.classList.add("no-scroll"); 
});

// When the user clicks on the close (x), close the modal and enable scrolling
closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll"); 
});

// When the user clicks outside the modal, close it and enable scrolling
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove("no-scroll"); // Enable scrolling
    }
});


// Close the Thank You Modal
document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('thankYouModal').style.display = 'none';
});

// Close the Thank You Modal when clicking the "x" button
document.querySelector('.close-thank-you').addEventListener('click', function() {
    document.getElementById('thankYouModal').style.display = 'none';
});






// Form submission handler
document.getElementById('getInvolvedForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Send form data using EmailJS
    emailjs.sendForm('service_8pzmn95', 'template_8mefjz2', this) // Replace with your actual Service ID and Template ID
    .then(function(response) {
        if (response.status === 200) {
            // Hide the original modal
            document.querySelector('.modal').style.display = 'none';  // Assuming your main form is inside a modal
          
            // Show the Thank You modal
            document.getElementById('thankYouModal').style.display = 'block';
          
            // Clear the form fields
            document.getElementById('getInvolvedForm').reset();
        } else {
            // Display an alert if the submission fails
            alert('There was a problem with your submission. Please try again.');
        }
    }).catch(function(error) {
        // If there was an error, display the error modal
        document.getElementById('errorModal').style.display = 'block';
    });
});












  




document.querySelector('.newsletter form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var formData = new FormData(this);

    fetch('https://formspree.io/f/xdkokozg', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        if (response.ok) {
            // Show the custom alert modal
            document.getElementById('alertModal').style.display = 'block';
            
            // Clear the form fields after successful submission
            document.querySelector('.newsletter form').reset();
        } else {
            alert('There was a problem with your submission. Please try again.');
        }
    }).catch(function(error) {
        alert('Error submitting the form. Please check your internet connection.');
    });
});

// Close the custom alert modal when clicking the "Close" button
document.getElementById('closeAlertBtn').addEventListener('click', function() {
    document.getElementById('alertModal').style.display = 'none';
});







fetch('https://formspree.io/f/mjkvkvry', {
    method: 'POST',
    body: formData,
    headers: {
        'Accept': 'application/json'
    }
}).then(function(response) {
    if (response.ok) {
        document.querySelector('.modal').style.display = 'none';
        document.getElementById('thankYouModal').style.display = 'block';
    } else {
        return response.json().then(function(data) {
            console.error(data);
            alert('Error: ' + (data.error || 'There was a problem with your submission. Please try again.'));
        });
    }
}).catch(function(error) {
    console.error(error);
    alert('Network Error: Please check your connection.');
});
