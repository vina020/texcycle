<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profil Saya - TexCycle</title>
    <link rel="stylesheet" href="{{ asset('css/side.css') }}">
    <link rel="stylesheet" href="{{ asset('css/navbar.css') }}">
    <link rel="stylesheet" href="{{ asset('css/profile.css') }}">
</head>
<body class="sidebar-layout">
    <!-- Include Navbar Component -->
    @include('component.navbar')

    <!-- Include Sidebar Component -->
    @include('component.side')

    <!-- Main Content Wrapper -->
    <div class="sidebar-main-wrapper">
        <div class="container">
            <!-- Header -->
            <div class="page-header">
                <h1 class="page-title">Profil Saya</h1>
                <button class="menu-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="1"/>
                        <circle cx="12" cy="5" r="1"/>
                        <circle cx="12" cy="19" r="1"/>
                    </svg>
                </button>
            </div>

            <!-- Profile Card -->
            <div class="profile-card">
                <div class="profile-avatar">
                    <img src="{{ asset('images/foto-profil.jpg') }}" alt="Avatar" class="avatar-img">
                    <button class="avatar-edit">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                        </svg>
                    </button>
                </div>
                <div class="profile-info">
                    <h2 class="profile-name">Alifah Putri</h2>
                    <p class="profile-username">@alifah_putri</p>
                    <p class="profile-member">Member sejak Nov 2024</p>
                </div>
                <button class="btn-edit">Edit</button>
            </div>

            <!-- Stats Grid -->
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon success">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                    <div class="stat-value">1,250</div>
                    <div class="stat-label">Poin Recycle</div>
                </div>

                <div class="stat-card">
                    <div class="stat-icon info">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="3" width="18" height="18" rx="2"/>
                        </svg>
                    </div>
                    <div class="stat-value">12</div>
                    <div class="stat-label">Terjual</div>
                </div>

                <div class="stat-card">
                    <div class="stat-icon warning">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 6h18M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                        </svg>
                    </div>
                    <div class="stat-value">25</div>
                    <div class="stat-label">Didonasikan</div>
                </div>
            </div>

            <!-- Menu Section -->
            <section class="menu-section">
                <h3 class="section-title">Menu</h3>
                <div class="menu-list">
                    <a href="{{ url('/marketplace') }}" class="menu-item"><div class="menu-icon" style="background: #E3F2FD;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#2196F3" stroke-width="2">
                                <rect x="3" y="3" width="18" height="18" rx="2"/>
                            </svg>
                        </div>
                        <span class="menu-text">Barang Saya</span>
                        <svg class="menu-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 18 15 12 9 6"/>
                        </svg>
                    </a>
<a href="{{ url('/history') }}" class="menu-item">                        <div class="menu-icon" style="background: #E8F5E9;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M12 6v6l4 2"/>
                            </svg>
                        </div>
                        <span class="menu-text">Riwayat Pesanan</span>
                        <svg class="menu-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 18 15 12 9 6"/>
                        </svg>
                    </a>
<a href="{{ url('/tracking') }}" class="menu-item">                        
    <div class="menu-icon" style="background: #FFF3E0;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#FF9800" stroke-width="2">
                                <path d="M3 6h18M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                            </svg>
                        </div>
                        <span class="menu-text">Riwayat Donasi</span>
                        <svg class="menu-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 18 15 12 9 6"/>
                        </svg>
                    </a>
<a href="{{ url('/marketplace') }}" class="menu-item">                        <div class="menu-icon" style="background: #FFEBEE;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#F44336" stroke-width="2">
                                <circle cx="9" cy="21" r="1"/>
                                <circle cx="20" cy="21" r="1"/>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                            </svg>
                        </div>
                        <span class="menu-text">Keranjang</span>
                        <div class="menu-badge">3</div>
                        <svg class="menu-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 18 15 12 9 6"/>
                        </svg>
                    </a>
                </div>
            </section>

            <!-- Settings Section -->
            <section class="menu-section">
                <h3 class="section-title">Pengaturan</h3>
                <div class="menu-list">
                    <a href="{{ url('/profile') }}" class="menu-item"><div class="menu-icon" style="background: #E3F2FD;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#2196F3" stroke-width="2">
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                            </svg>
                        </div>
                        <span class="menu-text">Notifikasi</span>
                        <svg class="menu-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 18 15 12 9 6"/>
                        </svg>
                    </a>

                    <a href="{{ url('/homepage') }}" class="menu-item"><div class="menu-icon" style="background: #E8F5E9;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                                <line x1="12" y1="17" x2="12.01" y2="17"/>
                            </svg>
                        </div>
                        <span class="menu-text">Bantuan & Dukungan</span>
                        <svg class="menu-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 18 15 12 9 6"/>
                        </svg>
                    </a>
                </div>
            </section>

            <!-- Logout Button -->
            <button class="btn-logout" onclick="handleLogout()">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                    <polyline points="16 17 21 12 16 7"/>
                    <line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
                Logout
            </button>
        </div>
    </div>

    <!-- Edit Profile Modal -->
    <div class="modal" id="editProfileModal" style="display: none;">
        <div class="modal-overlay" onclick="closeModal()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">Edit Profil</h2>
                <button class="modal-close" onclick="closeModal()">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
            </div>
            <form id="editProfileForm" class="modal-body">
                <div class="form-group">
                    <label class="form-label">Nama Lengkap</label>
                    <input type="text" class="form-input" name="nama" value="Alifah Putri" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Username</label>
                    <input type="text" class="form-input" name="username" value="alifah_putri" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-input" name="email" value="alifah@email.com" required>
                </div>
                <div class="form-group">
                    <label class="form-label">No. Telepon</label>
                    <input type="tel" class="form-input" name="telepon" value="081234567890">
                </div>
                <div class="modal-actions">
                    <button type="button" class="btn-cancel" onclick="closeModal()">Batal</button>
                    <button type="submit" class="btn-save">Simpan</button>
                </div>
            </form>
        </div>
    </div>

    <script src="{{ asset('js/navbar.js') }}"></script>
    <script src="{{ asset('js/profile.js') }}"></script>
</body>
</html>