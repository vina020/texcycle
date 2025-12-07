// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeRiwayatAktivitas();
});

function initializeRiwayatAktivitas() {
    // Setup search
    setupSearch();
    
    // Setup filters
    setupFilters();
    
    // Setup activity cards
    setupActivityCards();
    
    // Add event listeners
    addEventListeners();
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase().trim();
        filterActivities(query);
    });
}

function filterActivities(query) {
    const activityItems = document.querySelectorAll('.activity-item');
    let visibleCount = 0;
    
    activityItems.forEach(item => {
        const title = item.querySelector('.activity-title').textContent.toLowerCase();
        const meta = item.querySelector('.activity-meta').textContent.toLowerCase();
        
        if (title.includes(query) || meta.includes(query)) {
            item.classList.remove('hidden');
            visibleCount++;
        } else {
            item.classList.add('hidden');
        }
    });
    
    // Show/hide empty state
    toggleEmptyState(visibleCount === 0);
}

// Setup filter pills
function setupFilters() {
    const filterPills = document.querySelectorAll('.filter-pill');
    
    filterPills.forEach(pill => {
        pill.addEventListener('click', function() {
            // Remove active from all
            filterPills.forEach(p => p.classList.remove('active'));
            
            // Add active to clicked
            this.classList.add('active');
            
            // Filter activities
            const filterType = this.dataset.filter;
            filterByType(filterType);
        });
    });
}

function filterByType(type) {
    const activityItems = document.querySelectorAll('.activity-item');
    let visibleCount = 0;
    
    activityItems.forEach(item => {
        const itemType = item.dataset.type;
        
        if (type === 'semua' || itemType === type) {
            item.classList.remove('hidden');
            visibleCount++;
        } else {
            item.classList.add('hidden');
        }
    });
    
    // Show/hide empty state
    toggleEmptyState(visibleCount === 0);
}

// Setup activity cards
function setupActivityCards() {
    const activityCards = document.querySelectorAll('.activity-card');
    
    activityCards.forEach(card => {
        card.addEventListener('click', function() {
            handleActivityClick(this);
        });
    });
}

function handleActivityClick(card) {
    const title = card.querySelector('.activity-title').textContent;
    const badge = card.querySelector('.activity-badge').textContent.trim();
    
    console.log('Activity clicked:', title, badge);
    
    // Add click animation
    card.style.transform = 'scale(0.98) translateX(4px)';
    setTimeout(() => {
        card.style.transform = '';
    }, 150);
    
    // Show detail notification
    showNotification(`Detail: ${title}`, 'info');
    
    // You can open a modal or navigate to detail page here
}

// Add event listeners
function addEventListeners() {
    // Filter button
    const filterBtn = document.querySelector('.filter-btn');
    filterBtn.addEventListener('click', function() {
        showNotification('Membuka filter lanjutan...', 'info');
    });
    
    // Activity badges
    const badges = document.querySelectorAll('.activity-badge');
    badges.forEach(badge => {
        badge.addEventListener('click', function(e) {
            e.stopPropagation();
            const type = this.textContent.trim();
            console.log('Badge clicked:', type);
        });
    });
}

// Toggle empty state
function toggleEmptyState(show) {
    const emptyState = document.getElementById('emptyState');
    const timelineSections = document.querySelectorAll('.timeline-section');
    
    if (show) {
        emptyState.style.display = 'block';
        timelineSections.forEach(section => {
            section.style.display = 'none';
        });
    } else {
        emptyState.style.display = 'none';
        timelineSections.forEach(section => {
            section.style.display = 'block';
        });
    }
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
`;
document.head.appendChild(style);

// Infinite scroll (optional)
let loadingMore = false;
window.addEventListener('scroll', function() {
    if (loadingMore) return;
    
    const scrollPosition = window.innerHeight + window.pageYOffset;
    const pageHeight = document.documentElement.scrollHeight;
    
    // Load more when 200px from bottom
    if (scrollPosition >= pageHeight - 200) {
        loadMoreActivities();
    }
});

function loadMoreActivities() {
    loadingMore = true;
    console.log('Loading more activities...');
    
    // Simulate loading
    setTimeout(() => {
        loadingMore = false;
        // Add more activities here if needed
    }, 1000);
}

// Real-time updates (simulation)
function simulateRealTimeUpdate() {
    // Simulate new activity every 30 seconds
    setInterval(() => {
        const random = Math.random();
        if (random > 0.7) {
            console.log('New activity received!');
            showNotification('Ada aktivitas baru! 🔔', 'info');
            // You can add the new activity to the list here
        }
    }, 30000);
}

// Start real-time updates
simulateRealTimeUpdate();

// Export data functionality
function exportActivities(format = 'json') {
    const activityItems = document.querySelectorAll('.activity-item:not(.hidden)');
    const activities = [];
    
    activityItems.forEach(item => {
        const title = item.querySelector('.activity-title').textContent;
        const meta = item.querySelector('.activity-meta').textContent;
        const time = item.querySelector('.activity-time').textContent;
        const badge = item.querySelector('.activity-badge').textContent.trim();
        
        activities.push({
            title,
            meta,
            time,
            type: badge
        });
    });
    
    if (format === 'json') {
        const dataStr = JSON.stringify(activities, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
        
        const exportFileDefaultName = `aktivitas_${new Date().toISOString()}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    }
}

// Statistics calculation
function calculateStatistics() {
    const activityItems = document.querySelectorAll('.activity-item');
    
    const stats = {
        total: activityItems.length,
        donasi: 0,
        penjualan: 0,
        upload: 0
    };
    
    activityItems.forEach(item => {
        const type = item.dataset.type;
        if (stats[type] !== undefined) {
            stats[type]++;
        }
    });
    
    console.log('Activity Statistics:', stats);
    return stats;
}

// Initialize statistics
const stats = calculateStatistics();
console.log('Total activities:', stats.total);

// Log initialization
console.log('Riwayat Aktivitas initialized successfully!');