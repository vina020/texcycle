<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tracking Donasi</title>
    <link rel="stylesheet" href="{{ asset('css/side.css') }}">
    <link rel="stylesheet" href="{{ asset('css/navbar.css') }}">
    <link rel="stylesheet" href="{{ asset('css/tracking.css') }}">
    <script src="{{ asset('js/tracking.js') }}"></script>
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
            <h1 class="page-title">Tracking</h1>
            <p class="page-subtitle">Kami berkomintmen untuk memberikan transparansi kepada Anda</p>
        </div>
    <div class="tabs">
        <button class="tab active" data-tab="semua" onclick="switchTab('semua')">Semua</button>
        <button class="tab" data-tab="proses" onclick="switchTab('proses')">Dalam Proses</button>
        <button class="tab" data-tab="selesai" onclick="switchTab('selesai')">Selesai</button>
    </div>

    <div class="summary-card">
        <div class="summary-header">
            <div class="recycle-icon">♻️</div>
            <div class="summary-title">Total Kontribusi Anda</div>
        </div>
        <div class="summary-amount" id="totalWeight">12.5 kg</div>
        <div class="summary-details" id="summaryDetails">8 donasi • 250 Recycle Credit</div>
    </div>

    <div class="donation-list" id="donationList"></div>
    <script src="js/navbar.js"></script>
    <script src="tracking.js"></script>
</body>
</html>