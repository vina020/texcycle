<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scan QR Code - TexCycle</title>
    <link rel="stylesheet" href="{{ asset('css/navbar.css') }}">
    <link rel="stylesheet" href="{{ asset('css/side.css') }}">
    <link rel="stylesheet" href="{{ asset('css/scanner.css') }}">
</head>
<body class="sidebar-layout">
    <!-- Include Navbar Component -->
    @include('component.navbar')

    <!-- Include Sidebar Component -->
    @include('component.side')

    <!-- Main Content Wrapper -->
    <div class="sidebar-main-wrapper">
        <div class="qr-scanner-container">
            <!-- Header -->
            <div class="qr-header">
                <button class="back-btn-qr" onclick="goBack()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                </button>
            </div>

            <!-- Content -->
            <div class="qr-content">
                <h1 class="qr-title">Scan QR Code</h1>
                <p class="qr-subtitle">Arahkan kamera ke QR code<br>pada drop bin</p>

                <!-- QR Scanner Frame -->
                <div class="qr-scanner-frame">
                    <div class="scanner-overlay">
                        <div class="scanner-corners">
                            <div class="corner corner-tl"></div>
                            <div class="corner corner-tr"></div>
                            <div class="corner corner-bl"></div>
                            <div class="corner corner-br"></div>
                        </div>
                        <div class="qr-icon">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2">
                                <rect x="3" y="3" width="7" height="7"/>
                                <rect x="14" y="3" width="7" height="7"/>
                                <rect x="14" y="14" width="7" height="7"/>
                                <rect x="3" y="14" width="7" height="7"/>
                            </svg>
                        </div>
                    </div>
                    <div class="scan-line"></div>
                </div>

                <!-- Info Card -->
                <div class="info-card">
                    <div class="info-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                    <div class="info-content">
                        <h3 class="info-title">Recycle Credit</h3>
                        <p class="info-desc">Dapatkan +50 poin setiap donasi<br>Minimal 1kg pakaian</p>
                    </div>
                </div>

                <!-- Tips Card -->
                <div class="tips-card">
                    <h3 class="tips-title">Tips Donasi:</h3>
                    <p class="tips-text">Pastikan pakaian dalam kondisi bersih<br>dan tidak robek parah</p>
                </div>

                <!-- Bottom Button -->
                <button class="btn-find-dropbin" onclick="findDropBin()">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.35-4.35"/>
                    </svg>
                    Cari Drop Bin Terdekat
                </button>
            </div>
        </div>
    </div>

    <script src="{{ asset('js/scanner.js') }}"></script>
</body>
</html>