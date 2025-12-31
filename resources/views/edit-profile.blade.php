<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Profil - TexCycle</title>
    <link rel="stylesheet" href="{{ asset('css/side.css') }}">
    <link rel="stylesheet" href="{{ asset('css/navbar.css') }}">
    <link rel="stylesheet" href="{{ asset('css/edit-profile.css') }}">
</head>
<body class="sidebar-layout">
    @include('component.navbar')
    @include('component.side')

    <div class="sidebar-main-wrapper">
        <div class="container">
            <!-- Header -->
            <div class="page-header">
                <a href="{{ route('profile') }}" class="back-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="15 18 9 12 15 6"/>
                    </svg>
                </a>
                <h1 class="page-title">Edit Profil</h1>
            </div>

            @if(session('success'))
                <div class="alert alert-success">
                    {{ session('success') }}
                </div>
            @endif

            @if($errors->any())
                <div class="alert alert-error">
                    <ul>
                        @foreach($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            <!-- Edit Profile Form -->
            <div class="form-card">
                <h2 class="form-title">Informasi Pribadi</h2>
                <form action="{{ route('profile.update') }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')

                    <div class="avatar-upload">
                        <div class="avatar-preview">
                            @if(auth()->user()->profile_photo)
                                <img src="{{ asset('storage/' . auth()->user()->profile_photo) }}" alt="Avatar" id="avatarPreview">
                            @else
                                <div id="avatarPreview" class="avatar-placeholder">
                                    {{ strtoupper(substr(auth()->user()->name, 0, 1)) }}
                                </div>
                            @endif
                        </div>
                        <div class="avatar-upload-btn">
                            <label for="avatar" class="btn-upload">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                    <polyline points="17 8 12 3 7 8"/>
                                    <line x1="12" y1="3" x2="12" y2="15"/>
                                </svg>
                                Upload Foto
                            </label>
                            <input type="file" id="avatar" name="avatar" accept="image/*" style="display: none;">
                            <p class="upload-hint">JPG, PNG max 2MB</p>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Nama Lengkap</label>
                        <input type="text" class="form-input" name="name" value="{{ old('name', auth()->user()->name) }}" required>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-input" name="email" value="{{ old('email', auth()->user()->email) }}" required>
                    </div>

                    <div class="form-group">
                        <label class="form-label">No. Telepon</label>
                        <input type="tel" class="form-input" name="phone" value="{{ old('phone', auth()->user()->phone ?? '') }}" placeholder="Contoh: 081234567890">
                    </div>

                    <div class="form-actions">
                        <a href="{{ route('profile') }}" class="btn-cancel">Batal</a>
                        <button type="submit" class="btn-save">Simpan Perubahan</button>
                    </div>
                </form>
            </div>

            <!-- Change Password Form -->
            <div class="form-card">
                <h2 class="form-title">Ubah Password</h2>
                <form action="{{ route('profile.change-password') }}" method="POST">
                    @csrf
                    @method('PUT')

                    <div class="form-group">
                        <label class="form-label">Password Lama</label>
                        <input type="password" class="form-input" name="current_password" required>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Password Baru</label>
                        <input type="password" class="form-input" name="password" required>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Konfirmasi Password Baru</label>
                        <input type="password" class="form-input" name="password_confirmation" required>
                    </div>

                    <div class="form-actions">
                        <button type="submit" class="btn-save">Ubah Password</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script src="{{ asset('js/navbar.js') }}"></script>
    <script src="{{ asset('js/edit-profile.js') }}"></script>
</body>
</html>