// Load Component Function
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

// Load Sidebar
async function loadSidebar() {
    await loadComponent('sidebar-container', 'components/sidebar.html');
    setActiveMenu();
}

// Load Navbar
async function loadNavbar() {
    await loadComponent('navbar-container', 'components/navbar.html');
    setActiveMenu();
    updateTime();
}

// Set active menu based on current page
function setActiveMenu() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'homepage';
    
    // Set active untuk sidebar
    document.querySelectorAll('.sidebar .nav-item').forEach(item => {
        const page = item.getAttribute('data-page');
        if (page === currentPage) {
            item.classList.add('active');
        }
    });
    
    // Set active untuk navbar
    document.querySelectorAll('.top-navbar .nav-link').forEach(link => {
        const page = link.getAttribute('data-page');
        if (page === currentPage) {
            link.classList.add('active');
        }
    });
}

// Toggle sidebar untuk mobile
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (sidebar && overlay) {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

// Close sidebar (untuk tombol X di header sidebar)
function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (sidebar && overlay) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }
}

// Logout function
function logout() {
    if (confirm('Apakah Anda yakin ingin keluar?')) {
        alert('Logout berhasil!');
        window.location.href = 'login.html';
    }
}

// Update current time
function updateTime() {
    const timeElement = document.getElementById('currentTime');
    if (timeElement) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        timeElement.textContent = `${hours}:${minutes}`;
    }
}

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load sidebar if container exists
    if (document.getElementById('sidebar-container')) {
        loadSidebar();
    }
    
    // Load navbar if container exists
    if (document.getElementById('navbar-container')) {
        loadNavbar();
    }
    
    // Update time every minute
    setInterval(updateTime, 60000);
});