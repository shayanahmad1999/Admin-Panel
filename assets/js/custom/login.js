document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var emailError = document.getElementById('emailError');

    if (!email.includes('@')) {
        emailError.textContent = 'Please include an "@" in the email address.';
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
        alert('Login form submitted successfully!');
    }
});
