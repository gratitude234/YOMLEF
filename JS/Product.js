


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













