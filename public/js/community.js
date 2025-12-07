// Data diskusi
const discussions = [
    {
        id: 1,
        type: 'hot',
        user: {
            name: 'Alifah Putri',
            avatar: 'A',
            avatarColor: 'avatar-a'
        },
        time: '2 jam yang lalu',
        title: 'Tips thrifting untuk pemula?',
        preview: 'Ada yang bisa share pengalaman pertama kali thrifting...',
        stats: {
            replies: 47,
            likes: 152
        },
        liked: true
    },
    {
        id: 2,
        type: 'pengalaman',
        user: {
            name: 'Rania Safira',
            avatar: 'R',
            avatarColor: 'avatar-r'
        },
        time: '5 jam yang lalu',
        title: 'Donasi 5kg, dapat 200 poin! 🎉',
        preview: 'Pengalaman pertama pakai drop bin super mudah...',
        stats: {
            replies: 23,
            likes: 89
        },
        liked: false
    },
    {
        id: 3,
        type: 'diskusi',
        user: {
            name: 'Maya Sari',
            avatar: 'M',
            avatarColor: 'avatar-a'
        },
        time: '8 jam yang lalu',
        title: 'Rekomendasi thrift store terbaik?',
        preview: 'Lagi cari thrift store yang koleksinya lengkap...',
        stats: {
            replies: 31,
            likes: 67
        },
        liked: false
    },
    {
        id: 4,
        type: 'pengalaman',
        user: {
            name: 'Dinda Azura',
            avatar: 'D',
            avatarColor: 'avatar-r'
        },
        time: '1 hari yang lalu',
        title: 'Cara styling outfit thrift',
        preview: 'Share outfit mix & match dari hasil thrifting kemarin...',
        stats: {
            replies: 18,
            likes: 124
        },
        liked: true
    }
];

// Render daftar diskusi
function renderDiscussions(filter = 'semua') {
    const container = document.getElementById('discussionList');
    let filteredDiscussions = discussions;

    if (filter !== 'semua') {
        filteredDiscussions = discussions.filter(d => {
            if (filter === 'diskusi') return d.type === 'hot' || d.type === 'diskusi';
            if (filter === 'pengalaman') return d.type === 'pengalaman';
            if (filter === 'event') return false; // No events in current data
            return true;
        });
    }

    if (filteredDiscussions.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #999;">
                <p>Belum ada diskusi untuk kategori ini</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filteredDiscussions.map(discussion => `
        <div class="discussion-card" onclick="openDiscussion(${discussion.id})">
            ${discussion.type === 'hot' ? '<div class="discussion-badge badge-hot">🔥 HOT</div>' : ''}
            ${discussion.type === 'pengalaman' ? '<div class="discussion-badge badge-pengalaman">📝 Pengalaman</div>' : ''}
            
            <div class="discussion-header">
                <div class="user-avatar ${discussion.user.avatarColor}">
                    ${discussion.user.avatar}
                </div>
                <div class="discussion-info">
                    <div class="discussion-user">
                        <span class="user-name">${discussion.user.name}</span>
                    </div>
                    <span class="discussion-time">${discussion.time}</span>
                </div>
            </div>
            
            <h3 class="discussion-title">${discussion.title}</h3>
            <p class="discussion-preview">${discussion.preview}</p>
            
            <div class="discussion-stats">
                <div class="stat-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    ${discussion.stats.replies} balasan
                </div>
                <div class="stat-item ${discussion.liked ? 'liked' : ''}">
                    <svg viewBox="0 0 24 24" fill="${discussion.liked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    ${discussion.stats.likes} like
                </div>
            </div>
        </div>
    `).join('');
}

// Switch tab filter
function switchTab(tab) {
    document.querySelectorAll('.tab').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
    renderDiscussions(tab);
}

// Buka detail diskusi
function openDiscussion(id) {
    console.log('Opening discussion:', id);
    alert(`Membuka diskusi ID: ${id}`);
    // Anda bisa ganti dengan navigasi ke halaman detail
}

// Buat post baru
function createPost() {
    console.log('Creating new post');
    alert('Membuat post baru');
    // Anda bisa ganti dengan modal atau navigasi ke halaman create post
}

// Tombol kembali
function goBack() {
    window.history.back();
}

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    renderDiscussions();
    
    // Handle search input
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', function(e) {
        console.log('Searching:', e.target.value);
        // Implementasi search functionality
    });
});