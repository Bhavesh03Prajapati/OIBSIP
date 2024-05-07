const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const registerLink = document.getElementById('register-link');
const loginLink = document.getElementById('login-link');
const securePage = document.getElementById('secure-page');
const logoutBtn = document.getElementById('logout-btn');

registerLink.addEventListener('click', () => {
    loginForm.classList.add('hide');
    registerForm.classList.remove('hide');
});

loginLink.addEventListener('click', () => {
    registerForm.classList.add('hide');
    loginForm.classList.remove('hide');
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    if (username === 'admin' && password === 'admin') {
        loginForm.reset();
        loginForm.classList.add('hide');
        securePage.classList.remove('hide');
    } else {
        alert('Invalid username or password');
    }
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newUsername = e.target.elements['new-username'].value;
    const newPassword = e.target.elements['new-password'].value;
    alert(`Registered successfully!\nUsername: ${newUsername}\nPassword: ${newPassword}`);
    registerForm.reset();
    loginLink.click();
});

logoutBtn.addEventListener('click', () => {
    securePage.classList.add('hide');
    loginForm.classList.remove('hide');
});
