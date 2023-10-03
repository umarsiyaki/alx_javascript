        // Function to generate input fields dynamically
        function generateInputFields(numFields) {
            const inputContainer = document.getElementById('inputContainer');
            inputContainer.innerHTML = ''; // Clear previous inputs

            for (let i = 1; i <= numFields; i++) {
                const inputField = document.createElement('input');
                inputField.type = 'text';
                inputField.name = `field${i}`;
                inputField.placeholder = `Field ${i}`;
                inputContainer.appendChild(inputField);
            }
        }

        // Function to validate the form before submission
        function validateForm() {
            const numFields = parseInt(document.getElementById('numFields').value);
            const inputContainer = document.getElementById('inputContainer');
            const inputFields = inputContainer.querySelectorAll('input');

            // Check if any dynamically generated fields are empty
            for (let i = 0; i < inputFields.length; i++) {
                if (inputFields[i].value.trim() === '') {
                    document.getElementById('error').textContent = 'Please fill in all fields.';
                    return false; // Prevent form submission
                }
            }

            return true; // Form is valid, allow submission
        }

        // Add event listeners for dropdown change and form submission
        const numFieldsSelect = document.getElementById('numFields');
        const dynamicForm = document.getElementById('dynamicForm');

        numFieldsSelect.addEventListener('change', function() {
            const numFields = parseInt(numFieldsSelect.value);
            generateInputFields(numFields);
        });

        dynamicForm.addEventListener('submit', function(event) {
            if (!validateForm()) {
                event.preventDefault(); // Prevent form submission if validation fails
            }
        });

        // Initial setup
        generateInputFields(1); // Generate initial input fields