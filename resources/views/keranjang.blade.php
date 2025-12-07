<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Keranjang - TexCycle</title>
    <link rel="stylesheet" href="{{ asset('css/side.css') }}">
    <link rel="stylesheet" href="{{ asset('css/navbar.css') }}">
    <link rel="stylesheet" href="{{ asset('css/keranjang.css') }}">
</head>
<body class="sidebar-layout">
    <!-- Include Navbar Component -->
    @include('component.navbar')

    <!-- Include Sidebar Component -->
    @include('component.side')

    <!-- Main Content Wrapper -->
    <div class="sidebar-main-wrapper">
        <div class="container">
            <!-- Select All Section -->
            <div class="select-all-section">
                <label class="checkbox-container">
                    <input type="checkbox" id="selectAll" checked>
                    <span class="checkmark"></span>
                    <span class="checkbox-label">Pilih Semua (3 item)</span>
                </label>
                <button class="btn-delete-selected" id="btnHapus">Hapus</button>
            </div>

            <!-- Cart Items Section -->
            <div class="cart-section">
                <h2 class="section-title">Item di Keranjang</h2>
                
                <div class="cart-items" id="cartItems">
                    <!-- Cart Item 1 -->
                    <div class="cart-item" data-id="1" data-price="150000">
                        <label class="checkbox-container">
                            <input type="checkbox" class="item-checkbox" checked>
                            <span class="checkmark"></span>
                        </label>
                        
                        <div class="item-image">
                            <img src="{{ asset('images/products/jaket-denim.jpg') }}" alt="Jaket Denim Vintage">
                        </div>
                        
                        <div class="item-details">
                            <h3 class="item-name">Jaket Denim Vintage</h3>
                            <p class="item-specs">Size: M | Kondisi: Sangat Baik</p>
                            <div class="item-seller">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </svg>
                                <span>@alifah_thrift</span>
                            </div>
                            <p class="item-price">Rp 150.000</p>
                            
                            <div class="item-quantity">
                                <button class="qty-btn minus" data-id="1">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <line x1="5" y1="12" x2="19" y2="12"/>
                                    </svg>
                                </button>
                                <input type="number" class="qty-input" value="1" min="1" max="10" readonly>
                                <button class="qty-btn plus" data-id="1">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <line x1="12" y1="5" x2="12" y2="19"/>
                                        <line x1="5" y1="12" x2="19" y2="12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        
                        <button class="btn-remove" data-id="1">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="18" y1="6" x2="6" y2="18"/>
                                <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        </button>
                    </div>

                    <!-- Cart Item 2 -->
                    <div class="cart-item" data-id="2" data-price="75000">
                        <label class="checkbox-container">
                            <input type="checkbox" class="item-checkbox" checked>
                            <span class="checkmark"></span>
                        </label>
                        
                        <div class="item-image">
                            <img src="{{ asset('images/products/kemeja-flanel.jpg') }}" alt="Kemeja Flanel Kotak">
                        </div>
                        
                        <div class="item-details">
                            <h3 class="item-name">Kemeja Flanel Kotak</h3>
                            <p class="item-specs">Size: L | Kondisi: Baik</p>
                            <div class="item-seller">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </svg>
                                <span>@rania_vintage</span>
                            </div>
                            <p class="item-price">Rp 75.000</p>
                            
                            <div class="item-quantity">
                                <button class="qty-btn minus" data-id="2">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <line x1="5" y1="12" x2="19" y2="12"/>
                                    </svg>
                                </button>
                                <input type="number" class="qty-input" value="1" min="1" max="10" readonly>
                                <button class="qty-btn plus" data-id="2">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <line x1="12" y1="5" x2="12" y2="19"/>
                                        <line x1="5" y1="12" x2="19" y2="12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        
                        <button class="btn-remove" data-id="2">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="18" y1="6" x2="6" y2="18"/>
                                <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        </button>
                    </div>

                    <!-- Cart Item 3 -->
                    <div class="cart-item" data-id="3" data-price="85000">
                        <label class="checkbox-container">
                            <input type="checkbox" class="item-checkbox" checked>
                            <span class="checkmark"></span>
                        </label>
                        
                        <div class="item-image">
                            <img src="{{ asset('images/products/cardigan-rajut.jpg') }}" alt="Sweater Rajut Cream">
                        </div>
                        
                        <div class="item-details">
                            <h3 class="item-name">Sweater Rajut Cream</h3>
                            <p class="item-specs">Size: S | Kondisi: Sangat Baik</p>
                            <div class="item-seller">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </svg>
                                <span>@dinda_preloved</span>
                            </div>
                            <p class="item-price">Rp 85.000</p>
                            
                            <div class="item-quantity">
                                <button class="qty-btn minus" data-id="3">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <line x1="5" y1="12" x2="19" y2="12"/>
                                    </svg>
                                </button>
                                <input type="number" class="qty-input" value="1" min="1" max="10" readonly>
                                <button class="qty-btn plus" data-id="3">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <line x1="12" y1="5" x2="12" y2="19"/>
                                        <line x1="5" y1="12" x2="19" y2="12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        
                        <button class="btn-remove" data-id="3">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="18" y1="6" x2="6" y2="18"/>
                                <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Voucher Section -->
            <div class="voucher-section">
                <div class="voucher-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="2" y="7" width="20" height="14" rx="2"/>
                        <path d="M16 3v4M8 3v4M2 11h20"/>
                    </svg>
                </div>
                <div class="voucher-content">
                    <p class="voucher-title">Voucher Tersedia!</p>
                    <p class="voucher-desc">Hemat hingga Rp 30.000</p>
                </div>
                <button class="btn-use-voucher">Gunakan</button>
            </div>

            <!-- Recommendations Section -->
            <div class="recommendations-section">
                <h3 class="section-title">Mungkin Kamu Suka</h3>
                <div class="recommendations-grid">
                    <div class="recommendation-card">
                        <div class="rec-image">
                        <img src="{{ asset('images/products/jeans-retro.jpg') }}" alt="Kaos Vintage"></div>
                        <p class="rec-name">Kaos Vintage</p>
                        <p class="rec-price">Rp 45.000</p>
                    </div>
                    <div class="recommendation-card">
                        <div class="rec-image">
                        <img src="{{ asset('images/products/rok-plisket.jpg') }}" alt="Kaos Vintage"></div>
                        <p class="rec-name">Celana Cargo</p>
                        <p class="rec-price">Rp 120.000</p>
                    </div>
                    <div class="recommendation-card">
                        <div class="rec-image">
                        <img src="{{ asset('images/products/kemeja-vintage.jpg') }}" alt="Kaos Vintage"></div>
                        <p class="rec-name">Hoodie Hitam</p>
                        <p class="rec-price">Rp 95.000</p>
                    </div>
                </div>
            </div>

            <!-- Summary Section -->
            <div class="summary-section">
                <div class="summary-header">
                    <h3 class="summary-title">Total (3 item)</h3>
                    <p class="summary-total" id="totalPrice">Rp 310.000</p>
                </div>
                <p class="summary-shipping">Belum termasuk ongkir</p>
                
                <div class="carbon-info">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <span>Hemat 4.2 kg CO₂</span>
                </div>
                
                <button class="btn-checkout" onclick="handleCheckout()">
                    Checkout (3)
                </button>
            </div>
        </div>
    </div>

    <script src="{{ asset('js/navbar.js') }}"></script>
    <script src="{{ asset('js/keranjang.js') }}"></script>
</body>
</html>