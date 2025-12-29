// Toggle Password Visibility
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = this.querySelector('.eye-icon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.innerHTML = `
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
            <line x1="1" y1="1" x2="23" y2="23"/>
        `;
    } else {
        passwordInput.type = 'password';
        eyeIcon.innerHTML = `
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
        `;
    }
});

// Form Validation
function validateForm() {
    let isValid = true;
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    
    // Remove previous error states
    username.classList.remove('error');
    password.classList.remove('error');
    
    // Validate username
    if (username.value.trim() === '') {
        username.classList.add('error');
        isValid = false;
    }
    
    // Validate password
    if (password.value.trim() === '') {
        password.classList.add('error');
        isValid = false;
    }
    
    return isValid;
}

// Form Submit Handler
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!validateForm()) {
        return;
    }
    
    const loginBtn = this.querySelector('.btn-login');
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
    
    // Add loading state
    loginBtn.classList.add('loading');
    
    // Simulate API call (replace with actual API call)
    setTimeout(() => {
        console.log('Login attempt:', {
            username: username,
            password: password,
            remember: remember
        });
        
        // Success - redirect to dashboard
        // window.location.href = '/dashboard';
        
        // For demo purposes, show success message
        alert('Login berhasil! Redirecting...');
        
        // Remove loading state
        loginBtn.classList.remove('loading');
        
        // Redirect after delay
        setTimeout(() => {
            window.location.href = '/dashboard';
        }, 500);
        
    }, 1500);
});

// Remove error state on input
document.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('input', function() {
        this.classList.remove('error');
    });
});

// Enter key on username field
document.getElementById('username').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        document.getElementById('password').focus();
    }
});

// Social Login Handlers
document.querySelector('.btn-google').addEventListener('click', function() {
    console.log('Google login clicked');
    // Implement Google OAuth
    alert('Google login akan segera tersedia!');
});