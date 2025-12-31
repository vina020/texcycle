// Preview avatar when file is selected
document.getElementById('avatar')?.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('avatarPreview');
            if (preview.tagName === 'IMG') {
                preview.src = e.target.result;
            } else {
                preview.outerHTML = `<img src="${e.target.result}" alt="Avatar" id="avatarPreview">`;
            }
        };
        reader.readAsDataURL(file);
    }
});

// Auto-hide success/error messages after 5 seconds
setTimeout(() => {
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        alert.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => alert.remove(), 300);
    });
}, 5000);

// Add slideUp animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-10px);
        }
    }
`;
document.head.appendChild(style);

console.log('Edit Profile initialized successfully!');