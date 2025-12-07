// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeProfilSaya();
});

function initializeProfilSaya() {
    // Setup event listeners
    addEventListeners();
    
    // Load user data
    loadUserData();
    
    // Animate stats on load
    animateStats();
}

// Add event listeners
function addEventListeners() {
    // Edit button
    const btnEdit = document.querySelector('.btn-edit');
    btnEdit.addEventListener('click', openEditModal);
    
    // Avatar edit button
    const avatarEdit = document.querySelector('.avatar-edit');
    avatarEdit.addEventListener('click', handleAvatarChange);
    
    // Menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', handleMenuClick);
    });
    
    // Stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('click', handleStatClick);
    });
    
    // Edit profile form
    const editForm = document.getElementById('editProfileForm');
    editForm.addEventListener('submit', handleSaveProfile);
    
    // Menu button
    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', handleMenuButton);
}

// Open edit modal
function openEditModal() {
    const modal = document.getElementById('editProfileModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('editProfileModal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

// Handle avatar change
function handleAvatarChange() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (!file) return;
        
        // Validate file
        if (!file.type.startsWith('image/')) {
            showNotification('File harus berupa gambar', 'error');
            return;
        }
        
        if (file.size > 5 * 1024 * 1024) {
            showNotification('Ukuran file maksimal 5MB', 'error');
            return;
        }
        
        // Read and display
        const reader = new FileReader();
        reader.onload = function(e) {
            const avatarImg = document.querySelector('.avatar-img');
            avatarImg.src = e.target.result;
            showNotification('Foto profil berhasil diubah', 'success');
        };
        reader.readAsDataURL(file);
    };
    
    input.click();
}

// Handle menu click
function handleMenuClick(e) {
    e.preventDefault();
    const menuText = this.querySelector('.menu-text').textContent;
    console.log('Menu clicked:', menuText);
    
    // Add click animation
    this.style.transform = 'scale(0.98) translateX(4px)';
    setTimeout(() => {
        this.style.transform = '';
    }, 150);
    
    showNotification(`Membuka ${menuText}...`, 'info');
    
    // Navigate after animation
    setTimeout(() => {
        const href = this.getAttribute('href');
        if (href && href !== '#') {
            // window.location.href = href; // Uncomment for actual navigation
        }
    }, 300);
}

// Handle stat click
function handleStatClick() {
    const label = this.querySelector('.stat-label').textContent;
    const value = this.querySelector('.stat-value').textContent;
    
    console.log('Stat clicked:', label, value);
    showNotification(`Detail ${label}: ${value}`, 'info');
}

// Handle save profile
function handleSaveProfile(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        nama: formData.get('nama'),
        username: formData.get('username'),
        email: formData.get('email'),
        telepon: formData.get('telepon')
    };
    
    console.log('Saving profile:', data);
    
    // Show loading
    showNotification('Menyimpan perubahan...', 'info');
    
    // Simulate API call
    setTimeout(() => {
        // Update profile display
        document.querySelector('.profile-name').textContent = data.nama;
        document.querySelector('.profile-username').textContent = '@' + data.username;
        
        closeModal();
        showNotification('Profil berhasil diperbarui! 🎉', 'success');
    }, 1500);
}

// Handle menu button
function handleMenuButton() {
    showNotification('Membuka menu opsi...', 'info');
}

// Handle logout
function handleLogout() {
    if (confirm('Yakin ingin keluar dari akun?')) {
        showNotification('Logging out...', 'info');
        
        setTimeout(() => {
            // Clear session/localStorage
            localStorage.clear();
            sessionStorage.clear();
            
            showNotification('Berhasil logout', 'success');
            
            // Redirect to login
            setTimeout(() => {
                window.location.href = '/login';
            }, 1000);
        }, 1000);
    }
}

// Load user data
function loadUserData() {
    // Simulate loading user data
    console.log('Loading user data...');
    
    // You can load from API or localStorage here
    const userData = {
        nama: 'Vina Nur Aini',
        username: 'vina_nuraini',
        email: 'vina@example.com',
        telepon: '081234567890',
        member_since: 'Nov 2024',
        poin_recycle: 1250,
        terjual: 12,
        didonasikan: 25
    };
    
    // Update display (if needed)
    console.log('User data loaded:', userData);
}

// Animate stats
function animateStats() {
    const statValues = document.querySelectorAll('.stat-value');
    
    statValues.forEach((statValue, index) => {
        const text = statValue.textContent;
        const number = parseInt(text.replace(/\D/g, ''));
        
        if (!isNaN(number)) {
            statValue.textContent = '0';
            
            setTimeout(() => {
                animateNumber(statValue, 0, number, 1000);
            }, index * 200);
        }
    });
}

function animateNumber(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString('id-ID');
    }, 16);
}

// Utility functions
function showNotification(message, type = 'default') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    // Determine background color
    let bgColor = 'rgba(0, 0, 0, 0.85)';
    if (type === 'success') {
        bgColor = '#4CAF50';
    } else if (type === 'info') {
        bgColor = '#2196F3';
    } else if (type === 'error') {
        bgColor = '#F44336';
    } else if (type === 'warning') {
        bgColor = '#FF9800';
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: ${bgColor};
        color: white;
        padding: 14px 28px;
        border-radius: 24px;
        font-size: 14px;
        z-index: 10001;
        animation: slideDown 0.3s ease;
        max-width: 400px;
        text-align: center;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 2.5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2500);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translate(-50%, -20px);
        }
        to {
            opacity: 1;
            transform: translate(-50%, 0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translate(-50%, 0);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -20px);
        }
    }
`;
document.head.appendChild(style);

// Close modal on outside click
window.addEventListener('click', function(e) {
    const modal = document.getElementById('editProfileModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Fade in sections on load
setTimeout(() => {
    const sections = document.querySelectorAll('.profile-card, .stats-grid, .menu-section, .btn-logout');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.1}s`;
    });
}, 100);

const fadeInStyle = document.createElement('style');
fadeInStyle.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(fadeInStyle);

// Log initialization
console.log('Profil Saya initialized successfully!');