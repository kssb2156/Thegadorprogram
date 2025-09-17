// Get all necessary elements from the DOM
const loginButton = document.getElementById('login-button');
const usernameInput = document.getElementById('username-input');
const loginPasswordInput = document.getElementById('login-password-input');
const loginMessage = document.getElementById('login-message');
const rememberMeCheckbox = document.getElementById('remember-me');
const autoLoginCheckbox = document.getElementById('auto-login');

// Credentials (for demonstration purposes)
const correctUsername = 'admin';
const correctPassword = '123';

// Function to handle login
function handleLogin(event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = loginPasswordInput.value;

    if (username === correctUsername && password === correctPassword) {
        // Save preferences
        if (rememberMeCheckbox.checked) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        if (autoLoginCheckbox.checked) {
            localStorage.setItem('autoLogin', 'true');
        } else {
            localStorage.removeItem('autoLogin');
        }

        // Set login status
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('loggedInUser', username);

        // Redirect
        window.location.href = 'index.html'; 
    } else {
        loginMessage.textContent = 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง';
        loginMessage.style.color = 'red';
    }
}

// Check for saved credentials on page load
window.addEventListener('load', () => {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    const autoLogin = localStorage.getItem('autoLogin') === 'true';

    if (savedUsername && savedPassword) {
        usernameInput.value = savedUsername;
        loginPasswordInput.value = savedPassword;
        rememberMeCheckbox.checked = true;
    }
    
    if (autoLogin) {
        // Redirect if auto-login is enabled
        // This is a simple example, you might want a more robust solution
        window.location.href = 'index.html';
    }
});

// Add event listener to login button
loginButton.addEventListener('click', handleLogin);