// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeDropBin();
});

function initializeDropBin() {
    // Set current time
    updateTime();
    setInterval(updateTime, 60000);
    
    // Add event listeners
    addEventListeners();
    
    // Animate illustration on load
    animateIllustration();
}

// Update time
function updateTime() {
    const timeEl = document.querySelector('.time');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    timeEl.textContent = `${hours}:${minutes}`;
}

// Add all event listeners
function addEventListeners() {
    // Option cards
    const optionCards = document.querySelectorAll('.option-card');
    optionCards.forEach(card => {
        card.addEventListener('click', handleOptionClick);
    });
    
    // Action buttons
    const btnPrimary = document.querySelector('.btn-primary');
    const btnSecondary = document.querySelector('.btn-secondary');
    
    btnPrimary.addEventListener('click', handleScanQR);
    btnSecondary.addEventListener('click', handleFindDropBin);
    
    // Auth buttons
    const loginBtn = document.querySelector('.btn-login');
    const daftarBtn = document.querySelector('.btn-daftar');
    
    loginBtn.addEventListener('click', () => showNotification('Fitur login akan segera tersedia'));
    daftarBtn.addEventListener('click', () => showNotification('Fitur registrasi akan segera tersedia'));
    
    // Back button
    const backBtn = document.querySelector('.back-btn');
    backBtn.addEventListener('click', handleBack);
}

// Handler functions
function handleOptionClick(e) {
    const card = e.currentTarget;
    const title = card.querySelector('.option-title').textContent;
    
    console.log('Option clicked:', title);
    
    // Add click animation
    card.style.transform = 'scale(0.98) translateX(8px)';
    setTimeout(() => {
        card.style.transform = '';
    }, 150);
    
    showNotification(`Info: ${title}`);
}

function handleScanQR() {
    console.log('Scan QR Code clicked');
    
    // Simulate QR scanner opening
    showNotification('Membuka kamera untuk scan QR...', 'success');
    
    // You can integrate with a QR scanner library here
    setTimeout(() => {
        // Simulate successful scan
        console.log('QR Code scanned successfully');
    }, 1500);
}

function handleFindDropBin() {
    console.log('Find Drop Bin clicked');
    
    // Simulate finding nearest drop bin
    showNotification('Mencari Drop Bin terdekat...', 'info');
    
    // You can integrate with maps API here
    setTimeout(() => {
        console.log('Drop Bins found');
        showNotification('Ditemukan 3 Drop Bin dalam radius 2km', 'success');
    }, 1500);
}

function handleBack() {
    window.location.href = 'index.html';
}

// Animate illustration on load
function animateIllustration() {
    const illustration = document.querySelector('.dropbin-illustration');
    
    illustration.style.opacity = '0';
    illustration.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        illustration.style.transition = 'all 0.6s ease';
        illustration.style.opacity = '1';
        illustration.style.transform = 'scale(1)';
    }, 100);
}

// Utility functions
function showNotification(message, type = 'default') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    // Determine background color based on type
    let bgColor = 'rgba(0, 0, 0, 0.85)';
    if (type === 'success') {
        bgColor = '#4CAF50';
    } else if (type === 'info') {
        bgColor = '#2196F3';
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
        z-index: 10000;
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
    
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }
`;
document.head.appendChild(style);

// Parallax effect for illustration
window.addEventListener('scroll', () => {
    const illustration = document.querySelector('.bin-svg');
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.3;
    
    if (illustration) {
        illustration.style.transform = `translateY(${rate}px)`;
    }
});

// Add hover effect to option cards with icon animation
document.querySelectorAll('.option-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.option-icon svg');
        icon.style.transition = 'transform 0.3s ease';
        icon.style.transform = 'scale(1.2) rotate(5deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.option-icon svg');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Log initialization
console.log('TexCycle Drop Bin initialized successfully!');