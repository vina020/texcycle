// Toggle Password Visibility
function setupPasswordToggle(toggleId, inputId) {
    const toggleBtn = document.getElementById(toggleId);
    const input = document.getElementById(inputId);
    
    toggleBtn.addEventListener('click', function() {
        const eyeIcon = this.querySelector('.eye-icon');
        
        if (input.type === 'password') {
            input.type = 'text';
            eyeIcon.innerHTML = `
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
            `;
        } else {
            input.type = 'password';
            eyeIcon.innerHTML = `
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
            `;
        }
    });
}

setupPasswordToggle('togglePassword', 'password');
setupPasswordToggle('toggleConfirmPassword', 'confirm_password');

// Password Strength Checker
document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const strengthFill = document.getElementById('strengthFill');
    const strengthText = document.getElementById('strengthText');
    
    if (password.length === 0) {
        strengthFill.className = 'strength-fill';
        strengthText.textContent = '';
        strengthText.className = 'strength-text';
        return;
    }
    
    let strength = 0;
    
    // Check password strength
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^a-zA-Z0-9]/)) strength++;
    
    // Update UI based on strength
    if (strength <= 1) {
        strengthFill.className = 'strength-fill weak';
        strengthText.className = 'strength-text weak';
        strengthText.textContent = 'Lemah';
    } else if (strength === 2 || strength === 3) {
        strengthFill.className = 'strength-fill medium';
        strengthText.className = 'strength-text medium';
        strengthText.textContent = 'Sedang';
    } else {
        strengthFill.className = 'strength-fill strong';
        strengthText.className = 'strength-text strong';
        strengthText.textContent = 'Kuat';
    }
});

// Validation Functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateUsername(username) {
    // Username must be 3-20 characters, alphanumeric and underscore only
    const re = /^[a-zA-Z0-9_]{3,20}$/;
    return re.test(username);
}

function validatePassword(password) {
    // Password must be at least 8 characters
    return password.length >= 8;
}

function showError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    
    input.classList.add('error');
    input.classList.remove('success');
    error.textContent = message;
    error.classList.add('show');
}

function showSuccess(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    
    input.classList.remove('error');
    input.classList.add('success');
    error.classList.remove('show');
}

function clearError(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    
    input.classList.remove('error');
    error.classList.remove('show');
}

// Real-time Validation
document.getElementById('email').addEventListener('blur', function() {
    const email = this.value.trim();
    
    if (email === '') {
        clearError('email', 'emailError');
    } else if (!validateEmail(email)) {
        showError('email', 'emailError', 'Email tidak valid');
    } else {
        showSuccess('email', 'emailError');
    }
});

document.getElementById('username').addEventListener('blur', function() {
    const username = this.value.trim();
    
    if (username === '') {
        clearError('username', 'usernameError');
    } else if (!validateUsername(username)) {
        showError('username', 'usernameError', 'Username harus 3-20 karakter (huruf, angka, underscore)');
    } else {
        showSuccess('username', 'usernameError');
    }
});

document.getElementById('password').addEventListener('blur', function() {
    const password = this.value;
    
    if (password === '') {
        clearError('password', 'passwordError');
    } else if (!validatePassword(password)) {
        showError('password', 'passwordError', 'Password minimal 8 karakter');
    } else {
        showSuccess('password', 'passwordError');
    }
});

document.getElementById('confirm_password').addEventListener('blur', function() {
    const password = document.getElementById('password').value;
    const confirmPassword = this.value;
    
    if (confirmPassword === '') {
        clearError('confirm_password', 'confirmPasswordError');
    } else if (password !== confirmPassword) {
        showError('confirm_password', 'confirmPasswordError', 'Password tidak cocok');
    } else {
        showSuccess('confirm_password', 'confirmPasswordError');
    }
});

// Clear error on input
document.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('input', function() {
        const errorId = this.id + 'Error';
        clearError(this.id, errorId);
    });
});

// Form Submit Handler
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const terms = document.getElementById('terms').checked;
    
    let isValid = true;
    
    // Validate Email
    if (email === '') {
        showError('email', 'emailError', 'Email tidak boleh kosong');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('email', 'emailError', 'Email tidak valid');
        isValid = false;
    } else {
        showSuccess('email', 'emailError');
    }
    
    // Validate Username
    if (username === '') {
        showError('username', 'usernameError', 'Username tidak boleh kosong');
        isValid = false;
    } else if (!validateUsername(username)) {
        showError('username', 'usernameError', 'Username harus 3-20 karakter (huruf, angka, underscore)');
        isValid = false;
    } else {
        showSuccess('username', 'usernameError');
    }
    
    // Validate Password
    if (password === '') {
        showError('password', 'passwordError', 'Password tidak boleh kosong');
        isValid = false;
    } else if (!validatePassword(password)) {
        showError('password', 'passwordError', 'Password minimal 8 karakter');
        isValid = false;
    } else {
        showSuccess('password', 'passwordError');
    }
    
    // Validate Confirm Password
    if (confirmPassword === '') {
        showError('confirm_password', 'confirmPasswordError', 'Konfirmasi password tidak boleh kosong');
        isValid = false;
    } else if (password !== confirmPassword) {
        showError('confirm_password', 'confirmPasswordError', 'Password tidak cocok');
        isValid = false;
    } else {
        showSuccess('confirm_password', 'confirmPasswordError');
    }
    
    // Validate Terms
    if (!terms) {
        alert('Anda harus menyetujui Syarat & Ketentuan');
        isValid = false;
    }
    
    if (!isValid) {
        return;
    }
    
    // Add loading state
    const registerBtn = this.querySelector('.btn-register');
    registerBtn.classList.add('loading');
    
    // Simulate API call (replace with actual API call)
    setTimeout(() => {
        console.log('Register attempt:', {
            email: email,
            username: username,
            password: password
        });
        
        // Success - show message and redirect
        alert('Registrasi berhasil! Redirecting to login...');
        
        // Remove loading state
        registerBtn.classList.remove('loading');
        
        // Redirect after delay
        setTimeout(() => {
            window.location.href = '/login';
        }, 500);
        
    }, 2000);
});

// Social Register Handler
document.querySelector('.btn-google').addEventListener('click', function() {
    console.log('Google register clicked');
    alert('Registrasi dengan Google akan segera tersedia!');
});