// Email and password regular expressions
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least 8 chars, 1 letter and 1 number

// Validate login form
function validateLogin() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    if (!emailRegex.test(username)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long and contain at least one letter and one number.");
        return false;
    }
    alert("Login successful!");
    return true;
}

// Validate registration form
function validateRegistration() {
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!emailRegex.test(username)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long and contain at least one letter and one number.");
        return false;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    alert("Registration successful!");
    return true;
}
