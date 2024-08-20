document.getElementById('check-btn').addEventListener('click', function() {
    const input = document.getElementById('text-input').value;
    const resultElement = document.getElementById('result');

    if (input.trim() === '') {
        alert('Please input a value');
        return;
    }

    const cleanedInput = input
        .toLowerCase()                      // Convert to lowercase
        .replace(/[^a-z0-9]/g, '');         // Remove non-alphanumeric characters

    const reversedInput = cleanedInput.split('').reverse().join('');

    if (cleanedInput === reversedInput) {
        resultElement.textContent = `${input} is a palindrome`;
    } else {
        resultElement.textContent = `${input} is not a palindrome`;
    }
});
