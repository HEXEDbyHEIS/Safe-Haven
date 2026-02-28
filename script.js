document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const inputElement = document.getElementById('input');
    const outputElement = document.getElementById('output');

    // Function to trim input
    function trimInput(input) {
        return input.trim();
    }

    // Event listener for input
    inputElement.addEventListener('input', function() {
        const trimmedValue = trimInput(inputElement.value);
        outputElement.textContent = trimmedValue;
    });
});