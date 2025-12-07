// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Set current time
    updateTime();
    setInterval(updateTime, 60000);
    
    // Add event listeners
    addEventListeners();
}

// Update time in status bar
function updateTime() {
    const timeEl = document.querySelector('.time');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    timeEl.textContent = `${hours}:${minutes}`;
}

// Add all event listeners
function addEventListeners() {
    // Auth buttons
    const loginBtn = document.querySelector('.btn-login');
    const daftarBtn = document.querySelector('.btn-daftar');
    
    loginBtn.addEventListener('click', handleLogin);
    daftarBtn.addEventListener('click', handleDaftar);
    
    // Search input
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('focus', handleSearchFocus);
    searchInput.addEventListener('blur', handleSearchBlur);
    
    // Credit card button
    const tukarBtn = document.querySelector('.btn-tukar');
    tukarBtn.addEventListener('click', handleTukar);
    
    // Category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', handleCategoryClick);
    });
    
    // Activity items
    const activityItems = document.querySelectorAll('.activity-item');
    activityItems.forEach(item => {
        item.addEventListener('click', handleActivityClick);
    });
    

// Handler functions
function handleLogin() {
    console.log('Login clicked');
    showNotification('Fitur login akan segera tersedia');
}

function handleDaftar() {
    console.log('Daftar clicked');
    showNotification('Fitur registrasi akan segera tersedia');
}

function handleSearch(e) {
    const query = e.target.value;
    console.log('Searching for:', query);
    
    if (query.length > 2) {
        // Simulate search
        debounce(() => {
            console.log('Executing search for:', query);
        }, 500)();
    }
}

function handleSearchFocus(e) {
    e.target.parentElement.style.transform = 'scale(1.02)';
    e.target.parentElement.style.transition = 'transform 0.2s ease';
}

function handleSearchBlur(e) {
    e.target.parentElement.style.transform = 'scale(1)';
}

function handleTukar() {
    console.log('Tukar points clicked');
    showNotification('Penukaran poin akan segera tersedia');
}

function handleCategoryClick(e) {
    const card = e.currentTarget;
    const categoryName = card.querySelector('.category-name').textContent;
    console.log('Category clicked:', categoryName);
    
    // Add click animation
    card.style.transform = 'scale(0.95)';
    setTimeout(() => {
        card.style.transform = '';
    }, 150);
    
    showNotification(`Membuka ${categoryName}...`);
}

function handleActivityClick(e) {
    const item = e.currentTarget;
    const title = item.querySelector('.activity-title').textContent;
    console.log('Activity clicked:', title);
    
    showNotification(`Detail: ${title}`);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function showNotification(message) {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.85);
        color: white;
        padding: 12px 24px;
        border-radius: 24px;
        font-size: 14px;
        z-index: 1000;
        animation: slideDown 0.3s ease;
        max-width: 80%;
        text-align: center;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 2 seconds
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
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

// Simulate credit points animation on load
setTimeout(() => {
    const creditAmount = document.querySelector('.credit-amount');
    animateNumber(creditAmount, 0, 1250, 1500);
}, 500);

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
}}