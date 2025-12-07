// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeMarketplace();
});

function initializeMarketplace() {
    // Set current time
    updateTime();
    setInterval(updateTime, 60000);
    
    // Add event listeners
    addEventListeners();
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
    // Search input
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', handleSearch);
    
    // Filter button
    const filterBtn = document.querySelector('.filter-btn');
    filterBtn.addEventListener('click', handleFilterClick);
    
    // Category pills
    const pills = document.querySelectorAll('.pill');
    pills.forEach(pill => {
        pill.addEventListener('click', handleCategoryPillClick);
    });
    
    // Product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', handleProductClick);
    });
    
    // Add to cart buttons
    const addCartBtns = document.querySelectorAll('.btn-add-cart');
    addCartBtns.forEach(btn => {
        btn.addEventListener('click', handleAddToCartClick);
    });
    
    // Cart button
    const cartBtn = document.querySelector('.btn-cart');
    cartBtn.addEventListener('click', handleCartClick);
    
    // Auth buttons
    const loginBtn = document.querySelector('.btn-login');
    const daftarBtn = document.querySelector('.btn-daftar');
    loginBtn.addEventListener('click', () => showNotification('Fitur login akan segera tersedia'));
    daftarBtn.addEventListener('click', () => showNotification('Fitur registrasi akan segera tersedia'));
}

function handleSearch(e) {
    const query = e.target.value;
    console.log('Searching:', query);
    
    if (query.length > 2) {
        debounce(() => {
            showNotification(`Mencari "${query}"...`);
        }, 500)();
    }
}

function handleFilterClick() {
    console.log('Filter clicked');
    showNotification('Membuka filter...');
}

function handleCategoryPillClick(e) {
    // Remove active from all pills
    document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    
    // Add active to clicked pill
    e.target.classList.add('active');
    
    const category = e.target.textContent;
    console.log('Category selected:', category);
    showNotification(`Menampilkan kategori: ${category}`);
}

function handleProductClick(e) {
    // Don't trigger if clicking on buttons
    if (e.target.closest('button')) return;
    
    const productName = e.currentTarget.querySelector('.product-name').textContent;
    console.log('Product clicked:', productName);
    showNotification(`Membuka detail: ${productName}`);
}

function handleAddToCartClick(e) {
    e.stopPropagation();
    const productCard = e.target.closest('.product-card');
    const productName = productCard.querySelector('.product-name').textContent;
    const productPrice = productCard.querySelector('.product-price').textContent;
    
    // Animate button
    const btn = e.currentTarget;
    btn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        btn.style.transform = '';
    }, 200);
    
    // Update cart badge
    updateCartBadge();
    
    console.log('Added to cart:', productName);
    showNotification(`${productName} ditambahkan ke keranjang 🛒`);
}

function handleCartClick() {
    console.log('Cart clicked');
    showNotification('Membuka keranjang belanja...');
}

// Utility functions
function updateCartBadge() {
    const badge = document.querySelector('.cart-badge');
    const currentCount = parseInt(badge.textContent);
    badge.textContent = currentCount + 1;
    
    // Animate badge
    badge.style.transform = 'scale(1.3)';
    setTimeout(() => {
        badge.style.transform = '';
    }, 200);
}

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
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.85);
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

// Log initialization
console.log('TexCycle Marketplace initialized successfully!');