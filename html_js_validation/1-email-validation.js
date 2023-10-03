// Function to validate the email format
function validateEmail() {
  const email = document.getElementById('email').value;
  const errorElement = document.getElementById('error');

  // Regular expression to check email format
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  // Check if the email format is correct
  if (emailRegex.test(email)) {
    errorElement.textContent = '';
    return true; // Email format is valid
  } else {
    errorElement.textContent = 'Please enter a valid email address.';
    return false; // Prevent form submission
  }
}

// Add an event listener to the form for email validation
const form = document.getElementById('emailForm');
form.addEventListener('submit', function(event) {
  if (!validateEmail()) {
    event.preventDefault(); // Prevent form submission if email format is not valid
  }
});
