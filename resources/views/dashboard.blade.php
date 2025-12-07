<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - TexCycle</title>
    <link rel="stylesheet" href="{{ asset('css/side.css') }}">
    <link rel="stylesheet" href="{{ asset('css/navbar.css') }}">
    <link rel="stylesheet" href="{{ asset('css/dashboard.css') }}">
    <script src="{{ asset('js/dashboard.js') }}"></script>
</head>
<body class="sidebar-layout">
    <!-- Include Navbar Component (Optional) -->
        @include('component.navbar')

    <!-- Include Sidebar Component -->
    @include('component.side')

    <!-- Main Content Wrapper -->
    <div class="sidebar-main-wrapper">
    <div class="container">
        <!-- Header Section -->
        <header class="dashboard-header">
            <div class="welcome-section">
                <p class="dashboard-label">Dashboard</p>
                <h1 class="welcome-text">Halo, Alifah! 👋</h1>
            </div>
        </header>

        <div class="content-wrapper">
            <!-- Impact Stats Card -->
            <div class="impact-card">
                <div class="impact-header">
                    <h3 class="impact-title">Dampak Kamu Bulan Ini</h3>
                    <p class="impact-date">November 2024</p>
                </div>
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-circle" style="--progress: 75; --color: #4CAF50;">
                            <svg viewBox="0 0 120 120">
                                <circle cx="60" cy="60" r="50" class="stat-bg"/>
                                <circle cx="60" cy="60" r="50" class="stat-progress"/>
                            </svg>
                            <div class="stat-content">
                                <span class="stat-value">15kg</span>
                                <span class="stat-label">CO₂ Saved</span>
                            </div>
                        </div>
                    </div>

                    <div class="stat-item">
                        <div class="stat-circle" style="--progress: 60; --color: #2196F3;">
                            <svg viewBox="0 0 120 120">
                                <circle cx="60" cy="60" r="50" class="stat-bg"/>
                                <circle cx="60" cy="60" r="50" class="stat-progress"/>
                            </svg>
                            <div class="stat-content">
                                <span class="stat-value">450L</span>
                                <span class="stat-label">Air Hemat</span>
                            </div>
                        </div>
                    </div>

                    <div class="stat-item">
                        <div class="stat-circle" style="--progress: 50; --color: #FF9800;">
                            <svg viewBox="0 0 120 120">
                                <circle cx="60" cy="60" r="50" class="stat-bg"/>
                                <circle cx="60" cy="60" r="50" class="stat-progress"/>
                            </svg>
                            <div class="stat-content">
                                <span class="stat-value">25</span>
                                <span class="stat-label">Item Divisi</span>
                            </div>
                        </div>
                    </div>

                    <div class="achievement-badge">
                        <div class="badge-icon">🏆</div>
                        <span class="badge-text">Top 10%</span>
                    </div>
                </div>
            </div>

            <!-- Quick Actions -->
            <section class="quick-actions">
                <h2 class="section-title">Aksi Cepat</h2>
                <div class="actions-grid">
                    <div class="action-card green">
                        <div class="action-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M3 6h18M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                            </svg>
                        </div>
                        <div class="action-content">
                            <h3 class="action-title">Donasi Sekarang</h3>
                            <p class="action-desc">Drop bin terdekat</p>
                        </div>
                    </div>

                    <div class="action-card blue">
                        <div class="action-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="9" cy="21" r="1"/>
                                <circle cx="20" cy="21" r="1"/>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                            </svg>
                        </div>
                        <div class="action-content">
                            <h3 class="action-title">Belanja Preloved</h3>
                            <p class="action-desc">Hemat & eco-friendly</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Recent Transactions -->
            <section class="transactions-section">
                <h2 class="section-title">Transaksi Terbaru</h2>
                <div class="transactions-list">
                    <!-- Transaction 1 -->
                    <div class="transaction-item">
                        <div class="transaction-icon success">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <div class="transaction-info">
                            <h4 class="transaction-title">Donasi Berhasil</h4>
                            <p class="transaction-meta">Drop Bin Surabaya • Hari ini</p>
                        </div>
                        <span class="transaction-amount positive">+50</span>
                    </div>

                    <!-- Transaction 2 -->
                    <div class="transaction-item">
                        <div class="transaction-icon shopping">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="3" width="18" height="18" rx="2"/>
                            </svg>
                        </div>
                        <div class="transaction-info">
                            <h4 class="transaction-title">Pembelian</h4>
                            <p class="transaction-meta">Kemeja Vintage • Kemarin</p>
                        </div>
                        <span class="transaction-amount negative">-Rp 75.000</span>
                    </div>

                    <!-- Transaction 3 -->
                    <div class="transaction-item">
                        <div class="transaction-icon pending">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M12 6v6l4 2"/>
                            </svg>
                        </div>
                        <div class="transaction-info">
                            <h4 class="transaction-title">Sedang Diproses</h4>
                            <p class="transaction-meta">Tracking ID: #TX12345</p>
                        </div>
                        <div class="transaction-status">
                            <span class="status-dot"></span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Achievements -->
            <section class="achievements-section">
                <h2 class="section-title">Pencapaian</h2>
                <div class="achievements-grid">
                    <div class="achievement-item unlocked">
                        <div class="achievement-icon">🌱</div>
                        <p class="achievement-name">Pemula</p>
                    </div>
                    <div class="achievement-item unlocked">
                        <div class="achievement-icon">♻️</div>
                        <p class="achievement-name">Eco Warrior</p>
                    </div>
                    <div class="achievement-item unlocked">
                        <div class="achievement-icon">💚</div>
                        <p class="achievement-name">Green Hero</p>
                    </div>
                    <div class="achievement-item locked">
                        <div class="achievement-icon">🔒</div>
                        <p class="achievement-name">Master</p>
                    </div>
                    <div class="achievement-item locked">
                        <div class="achievement-icon">🔒</div>
                        <p class="achievement-name">Legend</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <script src="js/navbar.js"></script>
    <script src="dashboard.js"></script>
</body>
</html>