document.getElementById('nextBtn').addEventListener('click', function () {
    const email = document.getElementById('resetEmail').value;
    const emailError = document.getElementById('resetEmailError');

    if (email === '') {
        emailError.textContent = 'Please enter your email.';
    } else {
        emailError.textContent = '';
        document.getElementById('emailStep').style.display = 'none';
        document.getElementById('passwordStep').style.display = 'block';
    }
});

document.getElementById('resetForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordError = document.getElementById('passwordError');

    if (newPassword === '' || confirmPassword === '') {
        passwordError.textContent = 'Please fill in both password fields.';
    } else if (newPassword !== confirmPassword) {
        passwordError.textContent = 'Passwords do not match.';
    } else {
        passwordError.textContent = '';
        // Process the reset password (e.g., send to server)

        // Show success prompt
        alert('Your password has been reset successfully.');

        // Optionally, redirect to the login page
        // window.location.href = 'login.html';
    }
});
