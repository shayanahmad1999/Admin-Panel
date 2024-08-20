document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var signUpEmail = document.getElementById('signUpEmail').value;
    var confirmEmail = document.getElementById('confirmEmail').value;
    var signUpPassword = document.getElementById('signUpPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var emailMatchError = document.getElementById('emailMatchError');
    var passwordMatchError = document.getElementById('passwordMatchError');

    if (signUpEmail !== confirmEmail) {
        emailMatchError.textContent = 'Email addresses do not match.';
        emailMatchError.style.display = 'block';
    } else {
        emailMatchError.style.display = 'none';
    }

    if (signUpPassword !== confirmPassword) {
        passwordMatchError.textContent = 'Passwords do not match.';
        passwordMatchError.style.display = 'block';
    } else {
        passwordMatchError.style.display = 'none';
    }

    if (signUpEmail === confirmEmail && signUpPassword === confirmPassword) {
        alert('Sign-Up form submitted successfully!');
    }
});
