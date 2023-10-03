// Function to handle form submission
        function handleFormSubmit(event) {
            event.preventDefault(); // Prevent default form submission

            // Retrieve form field values
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const errorElement = document.getElementById('error');
            const successElement = document.getElementById('success');

            // Get the values entered in the form fields
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();

            // Check if required fields are filled
            if (name === '' || email === '') {
                errorElement.textContent = 'Please fill in all required fields.';
                successElement.textContent = ''; // Clear success message if displayed
            } else {
                errorElement.textContent = ''; // Clear error message if displayed
                successElement.textContent = 'Form submitted successfully!';

                // You can perform additional actions here, like sending the data to a server.
            }
        }

        // Add an event listener to the form for form submission
        const submitForm = document.getElementById('submitForm');
        submitForm.addEventListener('submit', handleFormSubmit);
        