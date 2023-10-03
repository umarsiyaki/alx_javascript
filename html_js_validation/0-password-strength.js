// Function to validate the password
function validatePassword() {
  const password = document.getElementById('password').value;
  const errorElement = document.getElementById('error');

  // Regular expressions to check criteria
  const minLength = 8;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const digitRegex = /\d/;
  const specialCharRegex = /[!@#$%^&*]/;

  // Check each criteria
  const isLengthValid = password.length >= minLength;
  const hasUppercase = uppercaseRegex.test(password);
  const hasLowercase = lowercaseRegex.test(password);
  const hasDigit = digitRegex.test(password);
  const hasSpecialChar = specialCharRegex.test(password);

  // Display error message or allow form submission
  if (isLengthValid && hasUppercase && hasLowercase && hasDigit && hasSpecialChar) {
    errorElement.textContent = '';
    return true; // Password is valid
  } else {
    errorElement.textContent = 'Password does not meet the criteria.';
    return false; // Prevent form submission
  }
}

// Add an event listener to the form for validation
const form = document.getElementById('passwordForm');
form.addEventListener('submit', function(event) {
  if (!validatePassword()) {
    event.preventDefault(); // Prevent form submission if validation fails
  }
});
