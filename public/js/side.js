// Handle navigation
function navigateTo(page) {
    // Update active state
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const activeItem = document.querySelector(`[data-page="${page}"]`);
    if (activeItem) {
        activeItem.classList.add('active');
    }
    
    // Update page title (optional, kalo ada element #pageTitle)
    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle) {
        const titles = {
            'dashboard': 'Dashboard',
            'upload': 'Upload Pakaian',
            'history': 'History',
            'profile': 'Profile'
        };
        pageTitle.textContent = titles[page] || 'Dashboard';
    }

    // Close sidebar on mobile after navigation
    if (window.innerWidth <= 768) {
        toggleSidebar();
    }
}