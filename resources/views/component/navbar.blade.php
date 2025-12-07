<nav class="top-navbar" >

    <!-- Hamburger Menu untuk Sidebar -->
<button id="nav-toggle" class="hamburger-menu" onclick="toggleSidebar()">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
</button>

    <div class="nav-left">
        <img src="{{ asset('images/logo.png') }}" alt="TexCycle Logo" class="nav-logo-image">
        <span class="nav-logo">TexCycle</span>
    </div>

    <!-- MENU BAGIAN TENGAH -->
    <div id="nav-menu" class="nav-center ">
        <a href="{{ url('/homepage') }}" class="nav-link {{ request()->is('homepage') ? 'active' : '' }}">Homepage</a>
        <a href="{{ url('/marketplace') }}" class="nav-link {{ request()->is('marketplace') ? 'active' : '' }}">Marketplace</a><a href="{{ url('/dropbin') }}" class="nav-link {{ request()->is('dropbin') ? 'active' : '' }}">Drop Bin</a>
        <a href="{{ url('/tracking') }}" class="nav-link {{ request()->is('tracking') ? 'active' : '' }}">Tracking</a>
        <a href="{{ url('/community') }}" class="nav-link {{ request()->is('community') ? 'active' : '' }}">Komunitas</a>
    </div>

    <!-- BAGIAN KANAN -->
    <div class="nav-right">
        <span class="time">{{ \Carbon\Carbon::now()->timezone('Asia/Jakarta')->format('H:i') }}</span>
        <button class="btn-cart" onclick="window.location.href='{{ url('/keranjang') }}'">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="9" cy="21" r="1"/>
        <circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
    </svg>
    <span class="cart-badge">3</span>
</button>

        <button class="btn-login">Login</button>
        <button class="btn-daftar">Daftar</button>
    </div>
</nav>

<script src="{{ asset('js/navbar.js') }}"></script>
