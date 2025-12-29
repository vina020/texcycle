function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (sidebar && overlay) {
        // Mobile: toggle 'active'
        if (window.innerWidth <= 992) {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        } 
        // Desktop: toggle 'hidden'
        else {
            sidebar.classList.toggle('hidden');
        }
    }
}