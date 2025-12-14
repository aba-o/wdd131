let btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMenu(){
    menu.classList.toggle('hide');
    btn.classList.toggle('change');
}


//VOLUNTEER COUNT 
let volunteerCount = 108; 
const countDisplay = document.getElementById("count-number");

// Animate count from start → end
function animateCount(start, end) {
    let current = start;
    const interval = setInterval(() => {
        countDisplay.textContent = current;
        current++;
        if (current > end) {
            clearInterval(interval);
        }
    }, 20);
}

// Run on page load
animateCount(5, volunteerCount);

//ERROR BANNER 
const errorBanner = document.createElement('div');
errorBanner.id = 'error-banner';
errorBanner.classList.add('hidden');
document.body.prepend(errorBanner);

function displayError(msg) {
    errorBanner.textContent = msg;
    errorBanner.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function clearError() {
    errorBanner.textContent = "";
    errorBanner.classList.add("hidden");
}

//SIGN UP FORM 
const signupForm = document.querySelector(".signup-form");

function signupHandler(event) {
    event.preventDefault();
    clearError();

    let errorMsg = '';

    const username = signupForm.querySelector('input[type="text"]').value.trim();
    const email = signupForm.querySelector('input[type="email"]').value.trim();
    const password = signupForm.querySelector('input[type="password"]').value.trim();

    if (username === '') {
        errorMsg += 'Username is required. ';
    }

    if (!email.includes('@')) {
        errorMsg += 'Enter a valid email address. ';
    }

    if (password.length < 6) {
        errorMsg += 'Password must be at least 6 characters.';
    }

    if (errorMsg !== '') {
        displayError(errorMsg);
        return;
    }

    signupForm.style.display = 'none';
    const message = document.createElement('p');
    message.textContent = 'Thank you for signing up to volunteer!';
    message.style.textAlign ='center';
    signupForm.parentElement.appendChild(message);

    // Update volunteer count
    const previousCount = volunteerCount;
    volunteerCount++;
    animateCount(previousCount, volunteerCount);
}

signupForm.addEventListener('submit', signupHandler);

//ABOUT FORM 
const aboutForm = document.querySelector(".about-form");

function aboutHandler(event) {
    event.preventDefault();
    clearError();

    const reason = aboutForm.querySelector('textarea').value.trim();

    if (reason.length < 20) {
        displayError('Please tell us a little more about why you want to volunteer.');
        return;
    }

    aboutForm.remove();
    const message = document.createElement('p');
    message.textContent = 'Thank you for sharing your story. We will be in touch!';
    aboutForm.parentElement.appendChild(message);
}

aboutForm.addEventListener('submit', aboutHandler);
