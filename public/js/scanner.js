// Go back to previous page
function goBack() {
    window.history.back();
}

// Find nearest drop bin
function findDropBin() {
    // Redirect to drop bin location page
    window.location.href = '/dropbin/locations';
}

// Simulate QR Code scanning
function simulateScan() {
    // This would be replaced with actual camera/QR scanning library
    console.log('Starting QR scan simulation...');
    
    setTimeout(() => {
        // Simulate successful scan
        const scanned = confirm('QR Code terdeteksi!\n\nDrop Bin: Surabaya Plaza\nLanjutkan donasi?');
        
        if (scanned) {
            // Redirect to donation form or confirmation
            window.location.href = '/dropbin/donate';
        }
    }, 3000);
}

// Initialize camera access (for actual implementation)
async function initCamera() {
    try {
        // Request camera permission
        const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { facingMode: 'environment' } 
        });
        
        // Create video element to show camera feed
        const video = document.createElement('video');
        video.srcObject = stream;
        video.play();
        
        // Add video to scanner frame
        const scannerFrame = document.querySelector('.qr-scanner-frame');
        if (scannerFrame) {
            // Replace background with video feed
            video.style.width = '100%';
            video.style.height = '100%';
            video.style.objectFit = 'cover';
            video.style.borderRadius = '16px';
            scannerFrame.insertBefore(video, scannerFrame.firstChild);
        }
        
        console.log('Camera initialized successfully');
    } catch (error) {
        console.error('Camera access denied:', error);
        alert('Tidak dapat mengakses kamera. Pastikan Anda memberikan izin akses kamera.');
    }
}

// Show success animation after scan
function showScanSuccess() {
    const scannerFrame = document.querySelector('.qr-scanner-frame');
    
    // Add success animation
    scannerFrame.style.borderColor = '#4CAF50';
    scannerFrame.style.background = 'rgba(76, 175, 80, 0.2)';
    
    // Play success sound (optional)
    // const audio = new Audio('/sounds/success.mp3');
    // audio.play();
    
    // Vibrate device (if supported)
    if (navigator.vibrate) {
        navigator.vibrate(200);
    }
    
    setTimeout(() => {
        // Redirect to donation page
        window.location.href = '/dropbin/donate';
    }, 1000);
}

// Handle scanning errors
function handleScanError(error) {
    console.error('Scan error:', error);
    
    const errorMessages = {
        'NotFoundError': 'QR Code tidak ditemukan. Pastikan QR code terlihat jelas.',
        'NotAllowedError': 'Akses kamera ditolak. Mohon izinkan akses kamera.',
        'NotReadableError': 'Kamera sedang digunakan aplikasi lain.',
        'OverconstrainedError': 'Kamera tidak memenuhi persyaratan.',
        'TypeError': 'Terjadi kesalahan. Coba lagi.'
    };
    
    const message = errorMessages[error.name] || 'Terjadi kesalahan saat scanning.';
    alert(message);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Uncomment to enable actual camera
    // initCamera();
    
    // For demo purposes, simulate scanning after 3 seconds
    // setTimeout(simulateScan, 3000);
    
    // Add click handler to scanner frame
    const scannerFrame = document.querySelector('.qr-scanner-frame');
    if (scannerFrame) {
        scannerFrame.addEventListener('click', function() {
            console.log('Scanner frame clicked');
            // Could trigger manual scan or show instructions
        });
    }
});