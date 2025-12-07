<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Riwayat Aktivitas - TexCycle</title>
    <link rel="stylesheet" href="{{ asset('css/side.css') }}">
    <link rel="stylesheet" href="{{ asset('css/navbar.css') }}">
    <link rel="stylesheet" href="{{ asset('css/history.css') }}">
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
                <h1 class="page-title">Riwayat Aktivitas</h1>
            </div>

            <!-- Search & Filter Bar -->
            <div class="search-filter-bar">
                <div class="search-box">
                    <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.35-4.35"/>
                    </svg>
                    <input type="text" class="search-input" placeholder="Cari aktivitas..." id="searchInput">
                </div>
                <button class="filter-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="4" y1="6" x2="4" y2="6"/>
                        <line x1="8" y1="6" x2="20" y2="6"/>
                        <line x1="4" y1="12" x2="12" y2="12"/>
                        <line x1="16" y1="12" x2="20" y2="12"/>
                        <line x1="4" y1="18" x2="8" y2="18"/>
                        <line x1="12" y1="18" x2="20" y2="18"/>
                        <circle cx="4" cy="6" r="2"/>
                        <circle cx="14" cy="12" r="2"/>
                        <circle cx="10" cy="18" r="2"/>
                    </svg>
                </button>
            </div>

            <!-- Filter Aktivitas -->
            <div class="filter-section">
                <h3 class="filter-title">Filter Aktivitas</h3>
                <div class="filter-pills">
                    <button class="filter-pill active" data-filter="semua">Semua</button>
                    <button class="filter-pill" data-filter="donasi">Donasi</button>
                    <button class="filter-pill" data-filter="penjualan">Penjualan</button>
                    <button class="filter-pill" data-filter="upload">Upload Item</button>
                </div>
            </div>

            <!-- Timeline Container -->
            <div class="timeline-container">
                <!-- Hari Ini -->
                <div class="timeline-section">
                    <h2 class="timeline-date">Hari Ini</h2>
                    <div class="timeline-content">
                        <!-- Activity 1 - Donasi -->
                        <div class="activity-item" data-type="donasi">
                            <div class="activity-icon success">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <div class="activity-line"></div>
                            <div class="activity-card">
                                <div class="activity-header">
                                    <div class="activity-badge dropbin">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M3 6h18M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                        </svg>
                                        Drop Bin
                                    </div>
                                    <span class="activity-time">14:30</span>
                                </div>
                                <h3 class="activity-title">Donasi Pakaian Berhasil</h3>
                                <p class="activity-meta">2.0 kg | TXC-2024-A7K9M</p>
                                <div class="activity-footer">
                                    <span class="activity-reward positive">+50 Recycle Credit</span>
                                </div>
                            </div>
                        </div>

                        <!-- Activity 2 - Penjualan -->
                        <div class="activity-item" data-type="penjualan">
                            <div class="activity-icon info">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="9" cy="21" r="1"/>
                                    <circle cx="20" cy="21" r="1"/>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                                </svg>
                            </div>
                            <div class="activity-line"></div>
                            <div class="activity-card">
                                <div class="activity-header">
                                    <div class="activity-badge sale">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <circle cx="9" cy="21" r="1"/>
                                            <circle cx="20" cy="21" r="1"/>
                                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                                        </svg>
                                        Penjualan
                                    </div>
                                    <span class="activity-time">11:20</span>
                                </div>
                                <h3 class="activity-title">Jaket Denim Vintage Terjual</h3>
                                <p class="activity-meta">Rp 150.000 | Pembeli: @sarah_id</p>
                                <div class="activity-footer">
                                    <span class="activity-commission">Komisi: Rp 15.000</span>
                                </div>
                            </div>
                        </div>

                        <!-- Activity 3 - Upload -->
                        <div class="activity-item" data-type="upload">
                            <div class="activity-icon warning">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                    <polyline points="17 8 12 3 7 8"/>
                                    <line x1="12" y1="3" x2="12" y2="15"/>
                                </svg>
                            </div>
                            <div class="activity-line"></div>
                            <div class="activity-card">
                                <div class="activity-header">
                                    <div class="activity-badge upload">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="17 8 12 3 7 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                        Upload Item
                                    </div>
                                    <span class="activity-time">09:15</span>
                                </div>
                                <h3 class="activity-title">Kemeja Flanel Diupload</h3>
                                <p class="activity-meta">Rp 75.000 | Kondisi: Sangat Baik</p>
                                <div class="activity-footer">
                                    <span class="activity-views">2 views</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Kemarin -->
                <div class="timeline-section">
                    <h2 class="timeline-date">Kemarin</h2>
                    <div class="timeline-content">
                        <!-- Activity 4 - Donasi -->
                        <div class="activity-item" data-type="donasi">
                            <div class="activity-icon success">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <div class="activity-line"></div>
                            <div class="activity-card">
                                <div class="activity-header">
                                    <div class="activity-badge dropbin">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M3 6h18M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                        </svg>
                                        Drop Bin
                                    </div>
                                    <span class="activity-time">28 Nov, 14:00</span>
                                </div>
                                <h3 class="activity-title">Donasi Pakaian Berhasil</h3>
                                <p class="activity-meta">2.0 kg | TXC-2024-A7K9N</p>
                                <div class="activity-footer">
                                    <span class="activity-reward positive">+50 Recycle Credit</span>
                                </div>
                            </div>
                        </div>

                        <!-- Activity 5 - Disliked Item -->
                        <div class="activity-item" data-type="penjualan">
                            <div class="activity-icon error">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                                </svg>
                            </div>
                            <div class="activity-line"></div>
                            <div class="activity-card">
                                <div class="activity-header">
                                    <div class="activity-badge disliked">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                                        </svg>
                                        Disukai
                                    </div>
                                    <span class="activity-time">28 Nov, 14:20</span>
                                </div>
                                <h3 class="activity-title">Item Kamu Disukai</h3>
                                <p class="activity-meta">Sweater Rajut | @dinda_preloved</p>
                                <div class="activity-footer">
                                    <span class="activity-likes">+3 likes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Empty State (hidden by default) -->
            <div class="empty-state" style="display: none;" id="emptyState">
                <div class="empty-icon">📭</div>
                <h3 class="empty-title">Tidak Ada Aktivitas</h3>
                <p class="empty-desc">Aktivitas yang kamu cari tidak ditemukan</p>
            </div>
        </div>
    </div>

    <script src="{{ asset('js/navbar.js') }}"></script>
    <script src="{{ asset('js/history.js') }}"></script>
</body>
</html>