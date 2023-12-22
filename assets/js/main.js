document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
    usernameInput.addEventListener('blur', function () {
        const usernameValue = this.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(usernameValue)) {
            usernameError.textContent = 'Invalid email format for username';
        } else {
            usernameError.textContent = '';
        }
    });

    passwordInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^A-Za-z0-9@]/g, '*'); 
        passwordError.textContent = ''; 
    });

    // Validate password format for the password field
    passwordInput.addEventListener('blur', function () {
        const passwordValue = this.value.trim();
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]*$/;

        if (!passwordRegex.test(passwordValue)) {
            passwordError.textContent = 'Invalid password format. Password must contain an uppercase letter, a number, and should not have special characters other than @';
        } else {
            passwordError.textContent = '';
        }
    });
});


function login(event) {
    event.preventDefault();
    const email = document.querySelector('.inputText[type="text"]').value.trim();
    const password = document.querySelector('.inputText[type="password"]').value.trim();
    if (email === 'SmartServTest@gmail.com' && password === 'SmartServTest@123') {
        window.location.href = './assets/pages/dashboard.html';
    } else {
        document.getElementById('password-error').textContent = 'Invalid email or password';
    }
}