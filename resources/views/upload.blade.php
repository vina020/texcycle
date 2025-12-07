<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload Pakaian - TexCycle</title>
    <link rel="stylesheet" href="{{ asset('css/navbar.css') }}">
    <link rel="stylesheet" href="{{ asset('css/side.css') }}">
    <link rel="stylesheet" href="{{ asset('css/upload.css') }}">
</head>
<body class="sidebar-layout">
    <!-- Include Navbar Component -->
    @include('component.navbar')

    <!-- Include Sidebar Component -->
    @include('component.side')

    <!-- Main Content Wrapper -->
    <div class="sidebar-main-wrapper">
        <div class="container">
            <!-- Form Container -->
            <div class="form-container">
                    <!-- Photo Upload Section -->
                    <section class="form-section">
                        <div class="section-header">
                            <h2 class="section-title">Foto Pakaian</h2>
                            <p class="section-subtitle">Tambahkan minimal 3 foto dengan kualitas baik</p>
                        </div>
                        
                        <div class="photo-upload-grid">
                            <div class="photo-upload-box" data-index="0">
                                <input type="file" id="photo0" name="photos[]" accept="image/*" class="photo-input" hidden>
                                <label for="photo0" class="photo-label">
                                    <svg class="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M12 5v14M5 12h14"/>
                                    </svg>
                                    <span class="upload-text">Upload Foto</span>
                                </label>
                                <div class="photo-preview" style="display: none;">
                                    <img src="" alt="Preview">
                                    <button type="button" class="remove-photo">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <line x1="18" y1="6" x2="6" y2="18"/>
                                            <line x1="6" y1="6" x2="18" y2="18"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div class="photo-upload-box" data-index="1">
                                <input type="file" id="photo1" name="photos[]" accept="image/*" class="photo-input" hidden>
                                <label for="photo1" class="photo-label">
                                    <svg class="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M12 5v14M5 12h14"/>
                                    </svg>
                                    <span class="upload-text">Upload Foto</span>
                                </label>
                                <div class="photo-preview" style="display: none;">
                                    <img src="" alt="Preview">
                                    <button type="button" class="remove-photo">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <line x1="18" y1="6" x2="6" y2="18"/>
                                            <line x1="6" y1="6" x2="18" y2="18"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div class="photo-upload-box" data-index="2">
                                <input type="file" id="photo2" name="photos[]" accept="image/*" class="photo-input" hidden>
                                <label for="photo2" class="photo-label">
                                    <svg class="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M12 5v14M5 12h14"/>
                                    </svg>
                                    <span class="upload-text">Upload Foto</span>
                                </label>
                                <div class="photo-preview" style="display: none;">
                                    <img src="" alt="Preview">
                                    <button type="button" class="remove-photo">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <line x1="18" y1="6" x2="6" y2="18"/>
                                            <line x1="6" y1="6" x2="18" y2="18"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Detail Pakaian Section -->
                    <section class="form-section">
                        <h2 class="section-title">Detail Pakaian</h2>
                        
                        <!-- Nama Pakaian -->
                        <div class="form-group">
                            <label for="nama" class="form-label">Nama Pakaian <span class="required">*</span></label>
                            <input 
                                type="text" 
                                id="nama" 
                                name="nama" 
                                class="form-input" 
                                placeholder="Contoh: Jaket Denim Vintage"
                                required
                            >
                        </div>

                        <!-- Kategori -->
                        <div class="form-group">
                            <label for="kategori" class="form-label">Kategori <span class="required">*</span></label>
                            <select id="kategori" name="kategori" class="form-select" required>
                                <option value="">Pilih Kategori</option>
                                <option value="atasan">Atasan</option>
                                <option value="bawahan">Bawahan</option>
                                <option value="dress">Dress</option>
                                <option value="jaket">Jaket & Outerwear</option>
                                <option value="aksesoris">Aksesoris</option>
                                <option value="sepatu">Sepatu</option>
                                <option value="tas">Tas</option>
                            </select>
                        </div>

                        <!-- Kondisi -->
                        <div class="form-group">
                            <label class="form-label">Kondisi <span class="required">*</span></label>
                            <div class="condition-buttons">
                                <input type="radio" id="kondisi_sangat_baik" name="kondisi" value="sangat_baik" class="condition-input" hidden required>
                                <label for="kondisi_sangat_baik" class="condition-btn">Sangat Baik</label>

                                <input type="radio" id="kondisi_baik" name="kondisi" value="baik" class="condition-input" hidden>
                                <label for="kondisi_baik" class="condition-btn">Baik</label>

                                <input type="radio" id="kondisi_cukup_baik" name="kondisi" value="cukup_baik" class="condition-input" hidden>
                                <label for="kondisi_cukup_baik" class="condition-btn">Cukup Baik</label>
                            </div>
                        </div>

                        <!-- Harga -->
                        <div class="form-group">
                            <label for="harga" class="form-label">Harga <span class="required">*</span></label>
                            <div class="input-group">
                                <span class="input-prefix">Rp</span>
                                <input 
                                    type="text" 
                                    id="harga" 
                                    name="harga" 
                                    class="form-input with-prefix" 
                                    placeholder="75,000"
                                    required
                                >
                            </div>
                        </div>

                        <!-- Deskripsi -->
                        <div class="form-group">
                            <label for="deskripsi" class="form-label">Deskripsi</label>
                            <textarea 
                                id="deskripsi" 
                                name="deskripsi" 
                                class="form-textarea" 
                                rows="4"
                                placeholder="Ceritakan kondisi dan detail pakaian..."
                            ></textarea>
                        </div>
                    </section>

                    <!-- Info Notice -->
                    <div class="info-notice">
                        <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="12" y1="16" x2="12" y2="12"/>
                            <line x1="12" y1="8" x2="12.01" y2="8"/>
                        </svg>
                        <p class="info-text">Pakaian akan melalui proses kurasi pihak TexCycle untuk memastikan kualitas sebelum dipublikasi</p>
                    </div>

                    <!-- Action Buttons -->
                    <div class="form-actions">
                        <button type="button" class="btn-secondary" onclick="saveDraft()">Simpan Draft</button>
                        <button type="submit" class="btn-primary">
                            Upload Sekarang
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script src="{{ asset('js/navbar.js') }}"></script>
    <script src="{{ asset('js/upload.js') }}"></script>
</body>
</html>