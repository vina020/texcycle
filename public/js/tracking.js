// Data donasi
const donations = [
    {
        id: 'TXC-2024-A7K9M',
        weight: 2.0,
        status: 'Pemilahan AI',
        statusType: 'proses',
        date: '29 Nov 2024'
    },
    {
        id: 'TXC-2024-B3H8L',
        weight: 3.5,
        status: 'Marketplace',
        statusType: 'selesai',
        date: '15 Nov 2024'
    },
    {
        id: 'TXC-2024-C9X2P',
        weight: 1.5,
        status: 'Daur Ulang',
        statusType: 'selesai',
        date: '08 Nov 2024'
    },
    {
        id: 'TXC-2024-D5M4K',
        weight: 5.5,
        status: 'Marketplace',
        statusType: 'selesai',
        date: '01 Nov 2024'
    }
];

// Render daftar donasi
function renderDonations(filter = 'semua') {
    const container = document.getElementById('donationList');
    let filteredDonations = donations;

    if (filter !== 'semua') {
        filteredDonations = donations.filter(d => d.statusType === filter);
    }

    if (filteredDonations.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📦</div>
                <div class="empty-state-text">Tidak ada donasi ${filter === 'proses' ? 'dalam proses' : 'selesai'}</div>
            </div>
        `;
        return;
    }

    container.innerHTML = filteredDonations.map(donation => `
        <div class="donation-card">
            <div class="status-badge ${donation.statusType}">
                ${donation.statusType === 'proses' ? 'Dalam Proses' : 'Selesai'}
            </div>
            <div class="donation-id">${donation.id}</div>
            <div class="donation-details">
                <div class="detail-item">
                    <div class="detail-label">Berat Donasi</div>
                    <div class="detail-value">${donation.weight} kg</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Status</div>
                    <div class="detail-value status-${donation.status.toLowerCase().replace(' ', '-')}">${donation.status}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Tanggal</div>
                    <div class="detail-value">${donation.date}</div>
                </div>
            </div>
            <button class="detail-btn" onclick="viewDetail('${donation.id}')">
                Lihat Detail
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
            </button>
        </div>
    `).join('');

    updateSummary(filteredDonations);
}

// Update ringkasan total kontribusi
function updateSummary(donations) {
    const totalWeight = donations.reduce((sum, d) => sum + d.weight, 0);
    const totalDonations = donations.length;
    const totalCredits = Math.floor(totalWeight * 20);

    document.getElementById('totalWeight').textContent = `${totalWeight.toFixed(1)} kg`;
    document.getElementById('summaryDetails').textContent = `${totalDonations} donasi • ${totalCredits} Recycle Credit`;
}

// Switch tab filter
function switchTab(tab) {
    document.querySelectorAll('.tab').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
    renderDonations(tab);
}

// Lihat detail donasi
function viewDetail(id) {
    alert(`Melihat detail untuk ${id}`);
    // Anda bisa ganti dengan navigasi ke halaman detail atau modal
}

// Tombol kembali
function goBack() {
    window.history.back();
}

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    renderDonations();
});