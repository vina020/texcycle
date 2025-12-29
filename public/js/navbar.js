// TAMBAHKAN DI PALING BAWAH FILE navbar.js
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // Biarkan link berfungsi normal
        console.log('Link clicked:', this.href);
    });
});