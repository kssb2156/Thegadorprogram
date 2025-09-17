// Get all necessary elements from the DOM
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username-input');
const loginPasswordInput = document.getElementById('login-password-input');
const loginMessage = document.getElementById('login-message');
const rememberMeCheckbox = document.getElementById('remember-me');
const autoLoginCheckbox = document.getElementById('auto-login');
const passwordToggle = document.getElementById('password-toggle');

// Credentials (for demonstration purposes)
const correctUsername = 'admin';
const correctPassword = '123';

/**
 * Handles the login process by validating credentials and managing user sessions.
 * @param {Event} event The form submission event.
 */
function handleLogin(event) {
    event.preventDefault();
    
    // Clear previous messages
    loginMessage.textContent = '';
    loginMessage.classList.remove('error', 'success');

    const username = usernameInput.value;
    const password = loginPasswordInput.value;

    if (username === correctUsername && password === correctPassword) {
        // Successful login
        loginMessage.textContent = 'เข้าสู่ระบบสำเร็จ!';
        loginMessage.classList.add('success');

        // Save preferences to localStorage
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

        // Set login status in sessionStorage
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('loggedInUser', username);

        // Redirect to the main page after a short delay for the user to see the success message
        setTimeout(() => {
            window.location.href = 'index.html'; 
        }, 800);
    } else {
        // Failed login
        loginMessage.textContent = 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง';
        loginMessage.classList.add('error');
    }
}

/**
 * Toggles the visibility of the password input field.
 */
function togglePasswordVisibility() {
    const type = loginPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    loginPasswordInput.setAttribute('type', type);
    
    // Toggle the SVG icon
    if (type === 'password') {
        passwordToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye">
                                        <path d="M2.08 1.05a20.24 20.24 0 0 0-1.4 1.83C.82 3.82 1 7.23 2.15 9.17c1.16 1.94 3.03 3.65 5.5 5.48a6.95 6.95 0 0 0 1.96.86" />
                                        <path d="M12 4s3 5.5 7 9c.7 1.25 2.1 3.5 3 5" />
                                        <path d="M16 14s2-2 4-3.5" />
                                        <path d="m14 14.5-1.5-1.5" />
                                        <path d="M10 20.5 8 18.5" />
                                        <path d="M10 16s2-2.5 4-4" />
                                        <path d="M6 10s2-2 4-3.5" />
                                        <circle cx="12" cy="12" r="3" />
                                        <line x1="2" x2="22" y1="2" y2="22" />
                                    </svg>`;
    } else {
        passwordToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off">
                                        <path d="M10.58 10.58a2 2 0 0 0 2.83 2.83" />
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                                        <path d="M2 12a10 10 0 0 1 10-10" />
                                    </svg>`;
    }
}

/**
 * Checks for saved credentials and handles auto-login on page load.
 */
window.addEventListener('load', () => {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    const autoLogin = localStorage.getItem('autoLogin') === 'true';

    if (savedUsername && savedPassword) {
        usernameInput.value = savedUsername;
        loginPasswordInput.value = savedPassword;
        rememberMeCheckbox.checked = true;
    }
    
    // Redirect if auto-login is enabled and not already logged in
    if (autoLogin && !sessionStorage.getItem('isLoggedIn')) {
        // You might want to add a brief delay or message before redirecting
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 500);
    }
});

// Add event listeners
loginForm.addEventListener('submit', handleLogin);
passwordToggle.addEventListener('click', togglePasswordVisibility);