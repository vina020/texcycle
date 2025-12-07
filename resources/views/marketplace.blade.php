<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marketplace - TexCycle</title>
    <link rel="stylesheet" href="{{ asset('css/side.css') }}">
    <link rel="stylesheet" href="{{ asset('css/marketplace.css') }}">
    <link rel="stylesheet" href="{{ asset('css/navbar.css') }}">
    <script src="{{ asset('js/marketplace.js') }}"></script>
</head>
<body class="sidebar-layout">
<!-- Include Navbar Component (Optional) -->
        @include('component.navbar')

    <!-- Include Sidebar Component -->
    @include('component.side')

<div class="sidebar-main-wrapper">
    <div class="container">
        <div class="page-header">
            <h1 class="page-title">Marketplace</h1>
            <p class="page-subtitle">Temukan pakaian preloved berkualitas dengan harga terbaik</p>
        </div>
        <!-- Search & Filter -->
        <div class="search-filter-section">
            <div class="search-wrapper">
                <input type="text" class="search-input" placeholder="Cari pakaian...">
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

            <!-- Category Pills -->
            <div class="category-pills">
                <button class="pill active">Semua</button>
                <button class="pill">Atasan</button>
                <button class="pill">Bawahan</button>
                <button class="pill">Dress</button>
                <button class="pill">Jaket</button>
                <button class="pill">Aksesoris</button>
            </div>
        </div>

        <!-- Product Grid -->
        <div class="products-section">
            <div class="products-grid">
                <!-- Product 1 -->
<div class="product-card">
    <div class="product-image">
        <span class="product-badge badge-a">Baik Sekali</span>
        <img src="images/products/kemeja-vintage.jpg" alt="Kemeja Vintage" class="product-img">
    </div>
    <div class="product-info">
        <h3 class="product-name">Kemeja Vintage</h3>
        <p class="product-seller">Thrift Store Indo</p>
        <div class="product-footer">
            <span class="product-price">Rp 75.000</span>
            <button class="btn-add-cart">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
            </button>
        </div>
    </div>
</div>
                <!-- Product 2 -->
                <div class="product-card">
                    <div class="product-image">
                        <span class="product-badge badge-b">Baik</span>
                        <img src="images/products/dress-vintage.jpg" alt="Dress Vintage" class="product-img">
                        </div>
                    <div class="product-info">
                        <h3 class="product-name">Mini Dress Y2K</h3>
                        <p class="product-seller">Preloved Heaven</p>
                        <div class="product-footer">
                            <span class="product-price">Rp 95.000</span>
                            <button class="btn-add-cart">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="9" cy="21" r="1"/>
                                    <circle cx="20" cy="21" r="1"/>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Product 3 -->
                <div class="product-card">
                    <div class="product-image">
                        <span class="product-badge badge-a">Baik Sekali</span>
                        <img src="images/products/jeans-retro.jpg" alt="Dress Vintage" class="product-img">
                    </div>
                    <div class="product-info">
                        <h3 class="product-name">Jeans Retro 90s</h3>
                        <p class="product-seller">Vintage Collector</p>
                        <div class="product-footer">
                            <span class="product-price">Rp 125.000</span>
                            <button class="btn-add-cart">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="9" cy="21" r="1"/>
                                    <circle cx="20" cy="21" r="1"/>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Product 4 -->
                <div class="product-card">
                    <div class="product-image">
                        <span class="product-badge badge-b">Baik</span>
                            <img src="images/products/bomber-jacket.jpg" alt="Dress Vintage" class="product-img">
                    </div>
                    <div class="product-info">
                        <h3 class="product-name">Bomber Jacket</h3>
                        <p class="product-seller">Second Chic</p>
                        <div class="product-footer">
                            <span class="product-price">Rp 150.000</span>
                            <button class="btn-add-cart">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="9" cy="21" r="1"/>
                                    <circle cx="20" cy="21" r="1"/>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Product 5 -->
                <div class="product-card">
                    <div class="product-image">
                        <span class="product-badge badge-a">Baik Sekali</span>
                        <img src="images/products/cardigan-rajut.jpg" alt="Dress Vintage" class="product-img">
                    </div>
                    <div class="product-info">
                        <h3 class="product-name">Cardigan Rajut</h3>
                        <p class="product-seller">Thrift Store Indo</p>
                        <div class="product-footer">
                            <span class="product-price">Rp 75.000</span>
                            <button class="btn-add-cart">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="9" cy="21" r="1"/>
                                    <circle cx="20" cy="21" r="1"/>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Product 6 -->
                <div class="product-card">
                    <div class="product-image">
                        <span class="product-badge badge-b">Baik</span>
                        <img src="images/products/rok-plisket.jpg" alt="Dress Vintage" class="product-img">
                    </div>
                    <div class="product-info">
                        <h3 class="product-name">Rok Plisket</h3>
                        <p class="product-seller">Preloved Heaven</p>
                        <div class="product-footer">
                            <span class="product-price">Rp 50.000</span>
                            <button class="btn-add-cart">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="9" cy="21" r="1"/>
                                    <circle cx="20" cy="21" r="1"/>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="js/navbar.js"></script>
    <script src="marketplace.js"></script>
</body>
</html>