document.addEventListener('DOMContentLoaded', () => {
    // Trim whitespace from input fields
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            input.value = input.value.trim();
        });
    });

    // Improved code structure
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Handle submission logic
        const userInputs = Array.from(inputs).map(input => input.value);
        console.log(userInputs);
    };

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});