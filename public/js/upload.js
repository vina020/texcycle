// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeUploadForm();
});

function initializeUploadForm() {
    // Setup photo uploads
    setupPhotoUploads();
    
    // Setup form validation
    setupFormValidation();
    
    // Setup price formatting
    setupPriceFormatting();
    
    // Add event listeners
    addEventListeners();
}

// Setup photo uploads
function setupPhotoUploads() {
    const photoInputs = document.querySelectorAll('.photo-input');
    
    photoInputs.forEach(input => {
        input.addEventListener('change', function(e) {
            handlePhotoUpload(e.target);
        });
    });
}

function handlePhotoUpload(input) {
    const file = input.files[0];
    if (!file) return;
    
    // Validate file type
    if (!file.type.startsWith('image/')) {
        showNotification('File harus berupa gambar', 'error');
        input.value = '';
        return;
    }
    
    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
        showNotification('Ukuran file maksimal 5MB', 'error');
        input.value = '';
        return;
    }
    
    const box = input.closest('.photo-upload-box');
    const label = box.querySelector('.photo-label');
    const preview = box.querySelector('.photo-preview');
    const img = preview.querySelector('img');
    
    // Read and display image
    const reader = new FileReader();
    reader.onload = function(e) {
        img.src = e.target.result;
        label.style.display = 'none';
        preview.style.display = 'block';
        
        // Add animation
        preview.style.opacity = '0';
        setTimeout(() => {
            preview.style.transition = 'opacity 0.3s ease';
            preview.style.opacity = '1';
        }, 10);
    };
    reader.readAsDataURL(file);
    
    // Setup remove button
    const removeBtn = preview.querySelector('.remove-photo');
    removeBtn.onclick = function(e) {
        e.preventDefault();
        removePhoto(box, input);
    };
}

function removePhoto(box, input) {
    const label = box.querySelector('.photo-label');
    const preview = box.querySelector('.photo-preview');
    
    input.value = '';
    preview.style.display = 'none';
    label.style.display = 'flex';
}

// Setup form validation
function setupFormValidation() {
    const form = document.getElementById('uploadForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitForm();
        }
    });
}

function validateForm() {
    // Check photos
    const photoInputs = document.querySelectorAll('.photo-input');
    const uploadedPhotos = Array.from(photoInputs).filter(input => input.files.length > 0);
    
    if (uploadedPhotos.length < 3) {
        showNotification('Minimal 3 foto harus diupload', 'error');
        return false;
    }
    
    // Check nama
    const nama = document.getElementById('nama').value.trim();
    if (nama.length < 3) {
        showNotification('Nama pakaian minimal 3 karakter', 'error');
        return false;
    }
    
    // Check kategori
    const kategori = document.getElementById('kategori').value;
    if (!kategori) {
        showNotification('Pilih kategori pakaian', 'error');
        return false;
    }
    
    // Check kondisi
    const kondisi = document.querySelector('input[name="kondisi"]:checked');
    if (!kondisi) {
        showNotification('Pilih kondisi pakaian', 'error');
        return false;
    }
    
    // Check harga
    const harga = document.getElementById('harga').value.replace(/\./g, '');
    if (!harga || parseInt(harga) < 1000) {
        showNotification('Harga minimal Rp 1.000', 'error');
        return false;
    }
    
    return true;
}

function submitForm() {
    const form = document.getElementById('uploadForm');
    const formData = new FormData(form);
    
    // Show loading
    showNotification('Mengupload pakaian...', 'info');
    
    // Simulate upload (replace with actual AJAX call)
    setTimeout(() => {
        showNotification('Pakaian berhasil diupload! 🎉', 'success');
        
        // Uncomment this for actual form submission
        // form.submit();
        
        // Reset form
        setTimeout(() => {
            form.reset();
            resetPhotoBoxes();
        }, 1500);
    }, 2000);
}

function resetPhotoBoxes() {
    const boxes = document.querySelectorAll('.photo-upload-box');
    boxes.forEach(box => {
        const label = box.querySelector('.photo-label');
        const preview = box.querySelector('.photo-preview');
        const input = box.querySelector('.photo-input');
        
        input.value = '';
        preview.style.display = 'none';
        label.style.display = 'flex';
    });
}

// Setup price formatting
function setupPriceFormatting() {
    const priceInput = document.getElementById('harga');
    
    priceInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value) {
            value = parseInt(value).toLocaleString('id-ID');
            e.target.value = value;
        }
    });
    
    priceInput.addEventListener('blur', function(e) {
        let value = e.target.value.replace(/\./g, '');
        if (value && parseInt(value) > 0) {
            e.target.value = parseInt(value).toLocaleString('id-ID');
        }
    });
}

// Save draft
function saveDraft() {
    const form = document.getElementById('uploadForm');
    const formData = new FormData(form);
    
    // Convert to object
    const draftData = {};
    for (let [key, value] of formData.entries()) {
        draftData[key] = value;
    }
    
    // Save to localStorage
    localStorage.setItem('pakaianDraft', JSON.stringify(draftData));
    
    showNotification('Draft berhasil disimpan', 'success');
}

// Load draft
function loadDraft() {
    const draft = localStorage.getItem('pakaianDraft');
    if (!draft) return;
    
    try {
        const data = JSON.parse(draft);
        
        // Fill form
        if (data.nama) document.getElementById('nama').value = data.nama;
        if (data.kategori) document.getElementById('kategori').value = data.kategori;
        if (data.kondisi) {
            const kondisiRadio = document.getElementById(`kondisi_${data.kondisi}`);
            if (kondisiRadio) kondisiRadio.checked = true;
        }
        if (data.harga) document.getElementById('harga').value = data.harga;
        if (data.deskripsi) document.getElementById('deskripsi').value = data.deskripsi;
        
        showNotification('Draft dimuat', 'info');
    } catch (e) {
        console.error('Error loading draft:', e);
    }
}

// Add event listeners
function addEventListeners() {
    // Condition buttons animation
    const conditionInputs = document.querySelectorAll('.condition-input');
    conditionInputs.forEach(input => {
        input.addEventListener('change', function() {
            const label = this.nextElementSibling;
            label.style.transform = 'scale(0.95)';
            setTimeout(() => {
                label.style.transform = '';
            }, 150);
        });
    });
    
    // Category select animation
    const categorySelect = document.getElementById('kategori');
    categorySelect.addEventListener('change', function() {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
}

// Utility functions
function showNotification(message, type = 'default') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    // Determine background color
    let bgColor = 'rgba(0, 0, 0, 0.85)';
    if (type === 'success') {
        bgColor = '#4CAF50';
    } else if (type === 'info') {
        bgColor = '#2196F3';
    } else if (type === 'error') {
        bgColor = '#F44336';
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: ${bgColor};
        color: white;
        padding: 14px 28px;
        border-radius: 24px;
        font-size: 14px;
        z-index: 10000;
        animation: slideDown 0.3s ease;
        max-width: 400px;
        text-align: center;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(notification);
    
    // Remove after duration
    const duration = type === 'info' ? 3000 : 2500;
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, duration);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translate(-50%, -20px);
        }
        to {
            opacity: 1;
            transform: translate(-50%, 0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translate(-50%, 0);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -20px);
        }
    }
`;
document.head.appendChild(style);

// Check for draft on load
window.addEventListener('load', function() {
    if (localStorage.getItem('pakaianDraft')) {
        if (confirm('Ditemukan draft yang tersimpan. Muat draft?')) {
            loadDraft();
        }
    }
});

// Auto-save draft every 30 seconds
setInterval(() => {
    const nama = document.getElementById('nama').value;
    if (nama.trim().length > 0) {
        saveDraft();
        console.log('Auto-saved draft');
    }
}, 30000);

// Warn before leaving if form has data
window.addEventListener('beforeunload', function(e) {
    const nama = document.getElementById('nama').value;
    const photoInputs = document.querySelectorAll('.photo-input');
    const hasPhotos = Array.from(photoInputs).some(input => input.files.length > 0);
    
    if (nama.trim().length > 0 || hasPhotos) {
        e.preventDefault();
        e.returnValue = '';
    }
});

console.log('Upload Pakaian form initialized successfully!');