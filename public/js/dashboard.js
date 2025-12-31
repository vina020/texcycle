// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
});

function initializeDashboard() {
    // Set current time
    updateTime();
    setInterval(updateTime, 60000);
    
    // Add event listeners
    addEventListeners();
    
    // Animate stats on load
    animateStats();
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
    // Notification button
    const notifBtn = document.querySelector('.notification-btn');
    notifBtn.addEventListener('click', handleNotificationClick);
    
    // Action cards
    const actionCards = document.querySelectorAll('.action-card');
    actionCards.forEach(card => {
        card.addEventListener('click', handleActionClick);
    });
    
    // Transaction items
    const transactionItems = document.querySelectorAll('.transaction-item');
    transactionItems.forEach(item => {
        item.addEventListener('click', handleTransactionClick);
    });
    
    // Achievement items
    const achievementItems = document.querySelectorAll('.achievement-item');
    achievementItems.forEach(item => {
        item.addEventListener('click', handleAchievementClick);
    });
    
    // Auth buttons
    const loginBtn = document.querySelector('.btn-login');
    const daftarBtn = document.querySelector('.btn-daftar');
    
    loginBtn.addEventListener('click', () => showNotification('Fitur login akan segera tersedia'));
    daftarBtn.addEventListener('click', () => showNotification('Fitur registrasi akan segera tersedia'));
}

function handleNotificationClick() {
    console.log('Notification clicked');
    showNotification('1 notifikasi baru: Donasi kamu berhasil! 🎉', 'success');
}

function handleActionClick(e) {
    const card = e.currentTarget;
    const title = card.querySelector('.action-title').textContent;
    
    console.log('Action clicked:', title);
    
    // Add click animation
    card.style.transform = 'scale(0.98)';
    setTimeout(() => {
        card.style.transform = '';
    }, 150);
}

function handleTransactionClick(e) {
    const item = e.currentTarget;
    const title = item.querySelector('.transaction-title').textContent;
    
    console.log('Transaction clicked:', title);
    
    // Add click animation
    item.style.transform = 'translateX(4px)';
    setTimeout(() => {
        item.style.transform = '';
    }, 150);
    
    showNotification(`Detail transaksi: ${title}`);
}

function handleAchievementClick(e) {
    const item = e.currentTarget;
    const name = item.querySelector('.achievement-name').textContent;
    const isLocked = item.classList.contains('locked');
    
    console.log('Achievement clicked:', name, 'Locked:', isLocked);
    
    if (isLocked) {
        showNotification(`Achievement "${name}" masih terkunci 🔒`, 'info');
    } else {
        showNotification(`Achievement "${name}" telah dibuka! 🎉`, 'success');
    }
}

// Animate stats
function animateStats() {
    const statCircles = document.querySelectorAll('.stat-circle');
    
    statCircles.forEach((circle, index) => {
        setTimeout(() => {
            const progress = circle.querySelector('.stat-progress');
            if (progress) {
                progress.style.strokeDashoffset = `calc(314 - (314 * ${circle.style.getPropertyValue('--progress')}) / 100)`;
            }
            
            // Animate numbers
            const value = circle.querySelector('.stat-value');
            if (value) {
                const text = value.textContent;
                const number = parseInt(text);
                if (!isNaN(number)) {
                    animateNumber(value, 0, number, 1000, text.replace(number, ''));
                }
            }
        }, index * 200);
    });
    
    // Animate achievement badge
    setTimeout(() => {
        const badge = document.querySelector('.achievement-badge');
        if (badge) {
            badge.style.opacity = '0';
            badge.style.transform = 'scale(0.8)';
            badge.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                badge.style.opacity = '1';
                badge.style.transform = 'scale(1)';
            }, 100);
        }
    }, 800);
}

function animateNumber(element, start, end, duration, suffix = '') {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 16);
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
    
    @keyframes fadeIn {
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
document.head.appendChild(style);
// Fade in sections on load
setTimeout(() => {
    const sections = document.querySelectorAll('.impact-card, .quick-actions, .transactions-section, .achievements-section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.animation = `fadeIn 0.6s ease forwards ${index * 0.1}s`;
    });
}, 100);

// Add hover effects to achievement items
document.querySelectorAll('.achievement-item.unlocked').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.achievement-icon');
        icon.style.transition = 'transform 0.3s ease';
        icon.style.transform = 'scale(1.2) rotate(10deg)';
    });
    
    item.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.achievement-icon');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Log initialization
console.log('TexCycle Dashboard initialized successfully!');