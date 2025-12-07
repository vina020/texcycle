<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drop Bin - TexCycle</title>
    <link rel="stylesheet" href="{{ asset('css/side.css') }}">
    <link rel="stylesheet" href="{{ asset('css/navbar.css') }}">
    <link rel="stylesheet" href="{{ asset('css/dropbin.css') }}">
    <script src="{{ asset('js/dropbin.js') }}"></script>
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
            <h1 class="page-title">Drop Bin</h1>
            <p class="page-subtitle">Mulai dari 1kg sudah bisa membantu bumi jadi lebih bersih</p>
        </div>
        <!-- Main Content -->
        <div class="content-wrapper">
            <!-- Illustration Card -->
            <div class="illustration-card">
                <div class="dropbin-illustration">
                    <svg viewBox="0 0 200 200" class="bin-svg">
                        <!-- Trash bin body -->
                        <rect x="50" y="70" width="100" height="100" rx="8" fill="#E8F5E9" stroke="#4CAF50" stroke-width="3"/>
                        
                        <!-- Trash bin lid -->
                        <rect x="40" y="60" width="120" height="15" rx="4" fill="#4CAF50"/>
                        
                        <!-- Arrow down -->
                        <path d="M100 90 L100 120 M90 110 L100 120 L110 110" stroke="#4CAF50" stroke-width="4" stroke-linecap="round" fill="none"/>
                        
                        <!-- Horizontal line -->
                        <line x1="70" y1="130" x2="130" y2="130" stroke="#4CAF50" stroke-width="3" stroke-linecap="round"/>
                        
                        <!-- QR Code symbol -->
                        <rect x="80" y="145" width="40" height="20" rx="2" fill="white" stroke="#4CAF50" stroke-width="2"/>
                        <rect x="85" y="150" width="4" height="4" fill="#4CAF50"/>
                        <rect x="91" y="150" width="4" height="4" fill="#4CAF50"/>
                        <rect x="97" y="150" width="4" height="4" fill="#4CAF50"/>
                        <rect x="103" y="150" width="4" height="4" fill="#4CAF50"/>
                        <rect x="109" y="150" width="4" height="4" fill="#4CAF50"/>
                        <rect x="85" y="157" width="4" height="4" fill="#4CAF50"/>
                        <rect x="97" y="157" width="4" height="4" fill="#4CAF50"/>
                        <rect x="109" y="157" width="4" height="4" fill="#4CAF50"/>
                        
                        <!-- Floating particles -->
                        <rect x="75" y="40" width="8" height="8" rx="2" fill="#90CAF9" opacity="0.6"/>
                        <rect x="120" y="45" width="6" height="6" rx="2" fill="#FFB74D" opacity="0.6"/>
                    </svg>
                </div>
                
                <h2 class="main-title">Donasi Pakaianmu</h2>
                <p class="main-desc">Temukan drop bin terdekat dan dapatkan Recycle Credit</p>
            </div>

            <!-- Options List -->
            <div class="options-list">
                <!-- Option 1 -->
                <div class="option-card">
                    <div class="option-icon" style="background: #E3F2FD;">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#64B5F6" stroke-width="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                    <div class="option-content">
                        <h3 class="option-title">Donasi Mudah</h3>
                        <p class="option-desc">Scan QR & masukkan pakaian</p>
                    </div>
                </div>

                <!-- Option 2 -->
                <div class="option-card">
                    <div class="option-icon" style="background: #FFF3E0;">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#FFB74D" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 6v6l4 2"/>
                        </svg>
                    </div>
                    <div class="option-content">
                        <h3 class="option-title">Dapatkan Recycle Credit</h3>
                        <p class="option-desc">Kumpulkan Recycle Credit</p>
                    </div>
                </div>

                <!-- Option 3 -->
                <div class="option-card">
                    <div class="option-icon" style="background: #E8F5E9;">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2">
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                            <path d="M8 12h8"/>
                        </svg>
                    </div>
                    <div class="option-content">
                        <h3 class="option-title">Selamatkan Bumi</h3>
                        <p class="option-desc">Kurangi limbah tekstil</p>
                    </div>
                </div>
            </div>

            <!-- Action Buttons -->
            <button class="btn-primary" onclick="window.location.href='{{ url('/scanner') }}'">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="2" y="2" width="20" height="20" rx="2" ry="2"/>
        <path d="M16 2v4M8 2v4M2 10h20"/>
    </svg>
    Scan QR Code
</button>
                
                <button class="btn-secondary">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.35-4.35"/>
                    </svg>
                    Cari Drop Bin Terdekat
                </button>
            </div>
        </div>
    </div>
    <script src="js/navbar.js"></script>
    <script src="dropbin.js"></script>
</body>
</html>