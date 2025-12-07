// Toggle sidebar untuk mobile
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

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
    
    // Update page title
    const pageTitle = document.getElementById('pageTitle');
    const titles = {
        'dashboard': 'Dashboard',
        'upload': 'Upload Pakaian',
        'history': 'History',
        'profile': 'Profile'
    };
    pageTitle.textContent = titles[page] || 'Dashboard';
    
    // Update content
    const contentBody = document.getElementById('contentBody');
    const contents = {
        'dashboard': `
            <div style="padding: 20px;">
                <h2 style="font-size: 24px; margin-bottom: 16px;">Selamat Datang!</h2>
                <p style="color: #666; margin-bottom: 20px;">Ini adalah halaman dashboard Anda.</p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
                    <div style="background: linear-gradient(135deg, #64B5F6, #42A5F5); padding: 24px; border-radius: 12px; color: white;">
                        <div style="font-size: 14px; opacity: 0.9; margin-bottom: 8px;">Total Donasi</div>
                        <div style="font-size: 32px; font-weight: 700;">12.5 kg</div>
                    </div>
                    <div style="background: linear-gradient(135deg, #4CAF50, #45a049); padding: 24px; border-radius: 12px; color: white;">
                        <div style="font-size: 14px; opacity: 0.9; margin-bottom: 8px;">Recycle Credit</div>
                        <div style="font-size: 32px; font-weight: 700;">250</div>
                    </div>
                    <div style="background: linear-gradient(135deg, #FF9800, #F57C00); padding: 24px; border-radius: 12px; color: white;">
                        <div style="font-size: 14px; opacity: 0.9; margin-bottom: 8px;">Total Upload</div>
                        <div style="font-size: 32px; font-weight: 700;">8</div>
                    </div>
                </div>
            </div>
        `,
        'upload': `
            <div style="padding: 20px;">
                <h2 style="font-size: 24px; margin-bottom: 16px;">Upload Pakaian</h2>
                <p style="color: #666; margin-bottom: 24px;">Upload foto pakaian yang ingin Anda donasikan atau jual.</p>
                <div style="border: 2px dashed #E0E0E0; border-radius: 12px; padding: 60px 20px; text-align: center;">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2" style="margin: 0 auto 16px;">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="17 8 12 3 7 8"/>
                        <line x1="12" y1="3" x2="12" y2="15"/>
                    </svg>
                    <p style="color: #999; margin-bottom: 16px;">Drag & drop foto atau klik untuk upload</p>
                    <button style="background: #4CAF50; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer;">
                        Pilih Foto
                    </button>
                </div>
            </div>
        `,
        'history': `
            <div style="padding: 20px;">
                <h2 style="font-size: 24px; margin-bottom: 16px;">History Donasi</h2>
                <p style="color: #666; margin-bottom: 24px;">Riwayat semua donasi dan transaksi Anda.</p>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div style="background: #F5F5F5; padding: 20px; border-radius: 12px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <strong>TXC-2024-A7K9M</strong>
                            <span style="color: #FF9800; font-weight: 600;">Dalam Proses</span>
                        </div>
                        <div style="color: #666; font-size: 14px;">2.0 kg • 29 Nov 2024</div>
                    </div>
                    <div style="background: #F5F5F5; padding: 20px; border-radius: 12px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <strong>TXC-2024-B3H8L</strong>
                            <span style="color: #4CAF50; font-weight: 600;">Selesai</span>
                        </div>
                        <div style="color: #666; font-size: 14px;">3.5 kg • 15 Nov 2024</div>
                    </div>
                </div>
            </div>
        `,
        'profile': `
            <div style="padding: 20px;">
                <h2 style="font-size: 24px; margin-bottom: 16px;">Profile</h2>
                <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 32px;">
                    <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #64B5F6, #42A5F5); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 32px; font-weight: 700;">
                        A
                    </div>
                    <div>
                        <h3 style="font-size: 20px; margin-bottom: 4px;">Alifah Putri</h3>
                        <p style="color: #666;">alifah@email.com</p>
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div style="background: #F5F5F5; padding: 16px; border-radius: 12px;">
                        <div style="color: #999; font-size: 12px; margin-bottom: 4px;">Nama Lengkap</div>
                        <div style="font-weight: 600;">Alifah Putri</div>
                    </div>
                    <div style="background: #F5F5F5; padding: 16px; border-radius: 12px;">
                        <div style="color: #999; font-size: 12px; margin-bottom: 4px;">Email</div>
                        <div style="font-weight: 600;">alifah@email.com</div>
                    </div>
                    <div style="background: #F5F5F5; padding: 16px; border-radius: 12px;">
                        <div style="color: #999; font-size: 12px; margin-bottom: 4px;">Telepon</div>
                        <div style="font-weight: 600;">+62 812 3456 7890</div>
                    </div>
                </div>
            </div>
        `
    };
    
    contentBody.innerHTML = contents[page] || contents['dashboard'];
    
    // Close sidebar on mobile after navigation
    if (window.innerWidth <= 768) {
        toggleSidebar();
    }
}

// Logout function
function logout() {
    if (confirm('Apakah Anda yakin ingin keluar?')) {
        alert('Logout berhasil!');
        // Redirect ke halaman login
        // window.location.href = '/login';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        const sidebar = document.getElementById('sidebar');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        
        if (window.innerWidth <= 768 && 
            sidebar.classList.contains('active') && 
            !sidebar.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            toggleSidebar();
        }
    });
});