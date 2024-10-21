// CONTACT CODE
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    var formData = new FormData(this);

    // Send the form data via AJAX (Fetch API)
    fetch('https://formspree.io/f/mqakakbl', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        if (response.ok) {
            // Show success message
            document.getElementById('successMessage').style.display = 'block';
            
            // Optionally clear the form
            document.getElementById('contactForm').reset();
            
            // Hide the success message after a delay (optional)
            setTimeout(function() {
                document.getElementById('successMessage').style.display = 'none';
            }, 5000); // Hides after 5 seconds
        } else {
            // Show error message if something went wrong
            document.getElementById('errorMessage').style.display = 'block';
            
            // Hide the error message after a delay (optional)
            setTimeout(function() {
                document.getElementById('errorMessage').style.display = 'none';
            }, 5000); // Hides after 5 seconds
        }
    }).catch(function(error) {
        // Show error message if there's a network problem
        document.getElementById('errorMessage').style.display = 'block';

        // Hide the error message after a delay (optional)
        setTimeout(function() {
            document.getElementById('errorMessage').style.display = 'none';
        }, 5000); // Hides after 5 seconds
    });
});






document.querySelector('.newsletter form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var formData = new FormData(this);

    fetch('https://formspree.io/f/mnnqqezr', {
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













