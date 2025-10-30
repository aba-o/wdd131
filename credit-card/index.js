const theForm = document.querySelector("#form");

// Error display 
function displayError(msg) {
    const errorBox = document.querySelector('.errors');
    errorBox.textContent = msg;
}


// Validate the card number (mock)
function isCardNumberValid(number) {
    return number === '1234123412341234';
}

// Main submit handler
function submitHandler(event) {
    event.preventDefault();

    let errorMsg = '';
    displayError(''); // clear previous errors

    const cardNumberInput = document.querySelector('#creditCardNumber');
    const cardNum = cardNumberInput.value.trim();

    // Validate card number
    if (!/^\d{16}$/.test(cardNum)) {
        errorMsg += 'Card number must be 16 digits\n';
    } else if (!isCardNumberValid(cardNum)) {
        errorMsg += 'Card number is not valid\n';
    }

    // Expiration validation
    const expYear = Number(document.querySelector('#year').value);
    const expMonth = Number(document.querySelector('#month').value);
    const currentDate = new Date();

    if (
        2000 + expYear < currentDate.getFullYear() ||
        (2000 + expYear === currentDate.getFullYear() &&
        expMonth <= currentDate.getMonth() + 1)
    ) {
        errorMsg += 'Card is expired\n';
    }

    // CVV validation
    const cvv = document.querySelector('#cvv').value.trim();
    if (!/^\d{3}$/.test(cvv)) {
        errorMsg += 'CVV must be 3 digits\n';
    }

    // If there are errors, show them and stop
    if (errorMsg !== '') {
        displayError(errorMsg);
        return;
    }

    // Success message
    // theForm.classList.add('hidden');
    // document.getElementById('thankYouMessage').classList.remove('hidden');
    theForm.remove();
    const message = document.createElement('h2');
    message.textContent = 'Thank you for your purchase.';
    document.body.appendChild(message);

}

// Attach the event listener to the form
theForm.addEventListener('submit', submitHandler);
