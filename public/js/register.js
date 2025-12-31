document.getElementById('registerForm').addEventListener('submit', function(e) {
    const terms = document.getElementById('terms').checked;
    
    if (!terms) {
        e.preventDefault();
        alert('Anda harus menyetujui Syarat & Ketentuan');
        return false;
    }
    
    console.log('FORM WILL SUBMIT NOW!');
    // Biarkan form submit secara natural
});