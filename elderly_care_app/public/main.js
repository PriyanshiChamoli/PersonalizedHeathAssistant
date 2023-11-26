// Function to register a new user
function registerUser() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    // Validate user input
    if (!name || !age || isNaN(age)) {
        alert('Please enter valid name and age.');
        return;
    }

    // Send a request to register the user
    fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age }),
    })
    .then(response => response.json())
    .then(data => {
        alert('User registered successfully!');
        console.log(data);
        // Optionally, reset the form after successful registration
        document.getElementById('registrationForm').reset();
    })
    .catch(error => {
        alert('Error registering user. Please try again.');
        console.error('Error:', error);
    });
}

// Attach the registerUser function to the "Register" button click event
document.getElementById('registerButton').addEventListener('click', registerUser);
