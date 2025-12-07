<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CycleTalk - Komunitas Fashion Berkelanjutan</title>
    <link rel="stylesheet" href="{{ asset('css/side.css') }}">
    <link rel="stylesheet" href="{{ asset('css/navbar.css') }}">
    <link rel="stylesheet" href="{{ asset('css/community.css') }}">
    <script src="{{ asset('js/community.js') }}"></script>
</head>
<body class="sidebar-layout">
    <!-- Include Navbar Component (Optional) -->
        @include('component.navbar')

    <!-- Include Sidebar Component -->
    @include('component.side')

    <!-- Main Content Wrapper -->
    <div class="sidebar-main-wrapper">
        <div class="container">
        <div class="page-header">
            <h1 class="page-title">Komunitas</h1>
            <p class="page-subtitle">Bagikan keseruan pengalaman Anda</p>
        </div>
    <div class="search-wrapper">
        <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
        </svg>
        <input type="text" class="search-input" placeholder="Cari diskusi, event, atau topik...">
    </div>

    <div class="tabs">
        <button class="tab active" data-tab="semua" onclick="switchTab('semua')">Semua</button>
        <button class="tab" data-tab="diskusi" onclick="switchTab('diskusi')">Diskusi</button>
        <button class="tab" data-tab="event" onclick="switchTab('event')">Event Live</button>
        <button class="tab" data-tab="pengalaman" onclick="switchTab('pengalaman')">Pengalaman</button>
    </div>

    <div class="live-event-card">
        <div class="live-badge">
            <span class="live-dot"></span>
            LIVE
        </div>
        <div class="event-content">
            <h3 class="event-title">Thrift Styling Workshop</h3>
            <p class="event-desc">Belajar mix & match preloved ala stylist</p>
            <p class="event-participants">+127 sedang bergabung</p>
        </div>
        <button class="join-btn">Gabung Sekarang</button>
    </div>

    <section class="community-activities">
        <h2 class="section-title">Aktivitas Komunitas</h2>
        <div class="activity-cards">
            <div class="activity-card">
                <svg class="activity-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64B5F6" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                <div class="activity-info">
                    <h3 class="activity-title">Forum Diskusi</h3>
                    <p class="activity-count">128 topik aktif</p>
                </div>
                <a href="#" class="activity-link">Lihat Diskusi →</a>
            </div>
            <div class="activity-card">
                <svg class="activity-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF9800" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <div class="activity-info">
                    <h3 class="activity-title">Share OOTD</h3>
                    <p class="activity-count">523 foto hari ini</p>
                </div>
                <a href="#" class="activity-link">Upload Foto →</a>
            </div>
        </div>
    </section>

    <section class="recent-discussions">
        <h2 class="section-title">Diskusi Terbaru</h2>
        <div class="discussion-list" id="discussionList"></div>
    </section>

    <button class="fab" onclick="createPost()">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
    </button>
    <script src="js/navbar.js"></script>
    <script src="community.js"></script>
</body>
</html>