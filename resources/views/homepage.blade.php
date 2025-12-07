<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TexCycle - Fashion Sirkular untuk Masa Depan</title>
    <link rel="stylesheet" href="{{ asset('css/side.css') }}">
    <link rel="stylesheet" href="{{ asset('css/navbar.css') }}">
    <link rel="stylesheet" href="{{ asset('css/homepage.css') }}">
    <script src="{{ asset('js/homepage.js') }}"></script>
</head>
<body class="sidebar-layout">

<!-- Include Navbar Component (Optional) -->
        @include('component.navbar')

    <!-- Include Sidebar Component -->
    @include('component.side')

    <!-- Main Content Wrapper -->
    <div class="sidebar-main-wrapper">
                <div class="container">
            <!-- Header -->
            <header class="header">
                <div class="top-nav">
                    <div>
                        <!-- Search Bar -->
                        <div class="search-container-center">
                            <input type="text" class="search-input" placeholder="Cari pakaian preloved...">
                        </div>
                        <h1 class="logo">Fashion Sirkular untuk Masa Depan</h1>
                    </div>
                </div>
            </header>

            <!-- Credit Card -->
            <div class="credit-card">
                <div class="credit-content">
                    <svg class="checkmark" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div class="credit-info">
                        <p class="credit-label">Recycle Credit</p>
                        <h2 class="credit-amount">1,250</h2>
                        <p class="credit-desc">Poin yang kamu miliki</p>
                    </div>
                </div>
                <button class="btn-tukar">Tukar</button>
            </div>

            <!-- Categories -->
            <section class="categories">
                <h3 class="section-title">Kategori</h3>
                <div class="category-grid">
                    <div class="category-card" onclick="window.location.href='{{ url('/marketplace') }}'"><div class="category-icon" style="background: #E3F2FD;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#2196F3" stroke-width="2">
                                <rect x="3" y="3" width="18" height="18" rx="2"/>
                                <path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
                            </svg>
                        </div>
                        <h4 class="category-name">Marketplace</h4>
                        <p class="category-desc">Jual beli preloved</p>
                    </div>

                    <div class="category-card" onclick="window.location.href='{{ url('/dropbin') }}'"><div class="category-icon" style="background: #E8F5E9;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2">
                                <path d="M3 6h18M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                            </svg>
                        </div>
                        <h4 class="category-name">Drop Bin</h4>
                        <p class="category-desc">Donasi pakaian</p>
                    </div>

                    <div class="category-card" onclick="window.location.href='{{ url('/tracking') }}'"><div class="category-icon" style="background: #FFF3E0;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#FF9800" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M12 6v6l4 2"/>
                            </svg>
                        </div>
                        <h4 class="category-name">Tracking</h4>
                        <p class="category-desc">Lacak pakaianmu</p>
                    </div>

                    <div class="category-card" onclick="window.location.href='{{ url('/community') }}'"><div class="category-icon" style="background: #E3F2FD;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#2196F3" stroke-width="2">
                                <circle cx="9" cy="12" r="1" fill="#2196F3"/>
                                <circle cx="15" cy="12" r="1" fill="#2196F3"/>
                                <circle cx="12" cy="9" r="1" fill="#2196F3"/>
                                <circle cx="12" cy="15" r="1" fill="#2196F3"/>
                            </svg>
                        </div>
                        <h4 class="category-name">Komunitas</h4>
                        <p class="category-desc">Forum & event</p>
                    </div>
                </div>
            </section>

            <!-- Recent Activities -->
            <section class="activities">
                <div class="activities-header">
                    <h3 class="section-title">Aktivitas Terbaru</h3>
                    <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </div>

                <div class="activity-list">
                    <div class="activity-item">
                        <div class="activity-check">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="3">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <div class="activity-info">
                            <h4 class="activity-title">Donasi Berhasil</h4>
                            <p class="activity-meta">+50 poin • 2 jam lalu</p>
                        </div>
                        <span class="activity-points">+50</span>
                    </div>

                    <div class="activity-item">
                        <div class="activity-check unchecked">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#90CAF9" stroke-width="2">
                                <rect x="3" y="3" width="18" height="18" rx="2"/>
                            </svg>
                        </div>
                        <div class="activity-info">
                            <h4 class="activity-title">Terjual</h4>
                            <p class="activity-meta">Kemeja Vintage • Kemarin</p>
                        </div>
                        <span class="activity-price">Rp 75.000</span>
                    </div>
                </div>
            </section>
        </div>
    </div>

    <!-- Load Components Script FIRST -->
    <script src="js/navbar.js"></script>
    <!-- Then load page-specific scripts -->
    <script src="js/homepage.js"></script>
    <script src="js/side.js"></script>
</body>
</html>