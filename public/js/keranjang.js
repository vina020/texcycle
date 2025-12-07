// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeKeranjang();
});

function initializeKeranjang() {
    // Setup event listeners
    setupEventListeners();
    
    // Calculate initial total
    calculateTotal();
    
    // Update cart badge
    updateCartBadge();
}

// Setup event listeners
function setupEventListeners() {
    // Select all checkbox
    const selectAll = document.getElementById('selectAll');
    selectAll.addEventListener('change', handleSelectAll);
    
    // Item checkboxes
    const itemCheckboxes = document.querySelectorAll('.item-checkbox');
    itemCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleItemCheckboxChange);
    });
    
    // Quantity buttons
    const minusBtns = document.querySelectorAll('.qty-btn.minus');
    const plusBtns = document.querySelectorAll('.qty-btn.plus');
    
    minusBtns.forEach(btn => {
        btn.addEventListener('click', handleMinusQty);
    });
    
    plusBtns.forEach(btn => {
        btn.addEventListener('click', handlePlusQty);
    });
    
    // Remove buttons
    const removeBtns = document.querySelectorAll('.btn-remove');
    removeBtns.forEach(btn => {
        btn.addEventListener('click', handleRemoveItem);
    });
    
    // Delete selected button
    const btnHapus = document.getElementById('btnHapus');
    btnHapus.addEventListener('click', handleDeleteSelected);
    
    // Voucher button
    const btnVoucher = document.querySelector('.btn-use-voucher');
    btnVoucher.addEventListener('click', handleUseVoucher);
    
    // Recommendation cards
    const recCards = document.querySelectorAll('.recommendation-card');
    recCards.forEach(card => {
        card.addEventListener('click', handleRecommendationClick);
    });
}

// Handle select all
function handleSelectAll(e) {
    const isChecked = e.target.checked;
    const itemCheckboxes = document.querySelectorAll('.item-checkbox');
    
    itemCheckboxes.forEach(checkbox => {
        checkbox.checked = isChecked;
    });
    
    calculateTotal();
    updateSelectAllLabel();
}

// Handle item checkbox change
function handleItemCheckboxChange() {
    const selectAll = document.getElementById('selectAll');
    const itemCheckboxes = document.querySelectorAll('.item-checkbox');
    const checkedCount = Array.from(itemCheckboxes).filter(cb => cb.checked).length;
    
    selectAll.checked = checkedCount === itemCheckboxes.length;
    
    calculateTotal();
    updateSelectAllLabel();
}

// Handle minus quantity
function handleMinusQty(e) {
    const itemId = e.currentTarget.dataset.id;
    const cartItem = document.querySelector(`.cart-item[data-id="${itemId}"]`);
    const qtyInput = cartItem.querySelector('.qty-input');
    let qty = parseInt(qtyInput.value);
    
    if (qty > 1) {
        qty--;
        qtyInput.value = qty;
        calculateTotal();
        showNotification('Jumlah item dikurangi', 'info');
    }
}

// Handle plus quantity
function handlePlusQty(e) {
    const itemId = e.currentTarget.dataset.id;
    const cartItem = document.querySelector(`.cart-item[data-id="${itemId}"]`);
    const qtyInput = cartItem.querySelector('.qty-input');
    let qty = parseInt(qtyInput.value);
    const max = parseInt(qtyInput.getAttribute('max'));
    
    if (qty < max) {
        qty++;
        qtyInput.value = qty;
        calculateTotal();
        showNotification('Jumlah item ditambah', 'info');
    } else {
        showNotification('Stok maksimal tercapai', 'warning');
    }
}

// Handle remove item
function handleRemoveItem(e) {
    const itemId = e.currentTarget.dataset.id;
    
    if (confirm('Hapus item dari keranjang?')) {
        const cartItem = document.querySelector(`.cart-item[data-id="${itemId}"]`);
        
        // Animate removal
        cartItem.style.transform = 'translateX(-100%)';
        cartItem.style.opacity = '0';
        
        setTimeout(() => {
            cartItem.remove();
            calculateTotal();
            updateCartBadge();
            updateSelectAllLabel();
            showNotification('Item dihapus dari keranjang', 'success');
            
            // Check if cart is empty
            const remainingItems = document.querySelectorAll('.cart-item');
            if (remainingItems.length === 0) {
                showEmptyCart();
            }
        }, 300);
    }
}

// Handle delete selected
function handleDeleteSelected() {
    const selectedItems = document.querySelectorAll('.item-checkbox:checked');
    
    if (selectedItems.length === 0) {
        showNotification('Pilih item yang ingin dihapus', 'warning');
        return;
    }
    
    if (confirm(`Hapus ${selectedItems.length} item yang dipilih?`)) {
        selectedItems.forEach((checkbox, index) => {
            const cartItem = checkbox.closest('.cart-item');
            
            setTimeout(() => {
                cartItem.style.transform = 'translateX(-100%)';
                cartItem.style.opacity = '0';
                
                setTimeout(() => {
                    cartItem.remove();
                    
                    if (index === selectedItems.length - 1) {
                        calculateTotal();
                        updateCartBadge();
                        updateSelectAllLabel();
                        showNotification(`${selectedItems.length} item dihapus`, 'success');
                        
                        const remainingItems = document.querySelectorAll('.cart-item');
                        if (remainingItems.length === 0) {
                            showEmptyCart();
                        }
                    }
                }, 300);
            }, index * 100);
        });
    }
}

// Handle use voucher
function handleUseVoucher() {
    showNotification('Fitur voucher akan segera tersedia', 'info');
}

// Handle recommendation click
function handleRecommendationClick() {
    const name = this.querySelector('.rec-name').textContent;
    showNotification(`Membuka: ${name}`, 'info');
}

// Calculate total
function calculateTotal() {
    const checkedItems = document.querySelectorAll('.item-checkbox:checked');
    let total = 0;
    let count = 0;
    
    checkedItems.forEach(checkbox => {
        const cartItem = checkbox.closest('.cart-item');
        const price = parseInt(cartItem.dataset.price);
        const qty = parseInt(cartItem.querySelector('.qty-input').value);
        total += price * qty;
        count++;
    });
    
    // Update total display
    const totalPriceEl = document.getElementById('totalPrice');
    totalPriceEl.textContent = 'Rp ' + total.toLocaleString('id-ID');
    
    // Update summary title
    const summaryTitle = document.querySelector('.summary-title');
    summaryTitle.textContent = `Total (${count} item)`;
    
    // Update checkout button
    const checkoutBtn = document.querySelector('.btn-checkout');
    checkoutBtn.textContent = `Checkout (${count})`;
}

// Update cart badge
function updateCartBadge() {
    const cartItems = document.querySelectorAll('.cart-item');
    const badge = document.querySelector('.cart-badge');
    badge.textContent = cartItems.length;
    
    // Animate badge
    badge.style.transform = 'scale(1.3)';
    setTimeout(() => {
        badge.style.transform = 'scale(1)';
    }, 200);
}

// Update select all label
function updateSelectAllLabel() {
    const itemCheckboxes = document.querySelectorAll('.item-checkbox');
    const checkedCount = Array.from(itemCheckboxes).filter(cb => cb.checked).length;
    const label = document.querySelector('.checkbox-label');
    label.textContent = `Pilih Semua (${itemCheckboxes.length} item)`;
}

// Show empty cart
function showEmptyCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = `
        <div class="empty-cart">
            <div class="empty-icon">🛒</div>
            <h3 class="empty-title">Keranjang Kosong</h3>
            <p class="empty-desc">Yuk belanja pakaian preloved favorit kamu!</p>
            <button class="btn-shop-now" onclick="window.location.href='marketplace.html'">
                Mulai Belanja
            </button>
        </div>
    `;
    
    // Hide summary section
    document.querySelector('.summary-section').style.display = 'none';
}

// Handle checkout
function handleCheckout() {
    const checkedItems = document.querySelectorAll('.item-checkbox:checked');
    
    if (checkedItems.length === 0) {
        showNotification('Pilih item yang ingin dibeli', 'warning');
        return;
    }
    
    showNotification('Memproses checkout...', 'info');
    
    setTimeout(() => {
        showNotification('Berhasil! Menuju halaman pembayaran...', 'success');
        // window.location.href = '/checkout'; // Uncomment for actual navigation
    }, 1500);
}

// Utility function
function showNotification(message, type = 'default') {
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    let bgColor = 'rgba(0, 0, 0, 0.85)';
    if (type === 'success') {
        bgColor = '#4CAF50';
    } else if (type === 'info') {
        bgColor = '#2196F3';
    } else if (type === 'error') {
        bgColor = '#F44336';
    } else if (type === 'warning') {
        bgColor = '#FF9800';
    }
    
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
        z-index: 10001;
        animation: slideDown 0.3s ease;
        max-width: 400px;
        text-align: center;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2500);
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
    
    .empty-cart {
        text-align: center;
        padding: 80px 20px;
    }
    
    .empty-icon {
        font-size: 64px;
        margin-bottom: 16px;
    }
    
    .empty-title {
        font-size: 24px;
        font-weight: 700;
        color: #1a1a1a;
        margin-bottom: 8px;
    }
    
    .empty-desc {
        font-size: 15px;
        color: #666;
        margin-bottom: 24px;
    }
    
    .btn-shop-now {
        background: linear-gradient(135deg, #66BB6A, #4CAF50);
        color: white;
        border: none;
        padding: 14px 32px;
        border-radius: 12px;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .btn-shop-now:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
    }
`;
document.head.appendChild(style);

// Save cart to localStorage
function saveCartToStorage() {
    const cartItems = document.querySelectorAll('.cart-item');
    const cartData = [];
    
    cartItems.forEach(item => {
        const id = item.dataset.id;
        const qty = item.querySelector('.qty-input').value;
        const checked = item.querySelector('.item-checkbox').checked;
        
        cartData.push({ id, qty, checked });
    });
    
    localStorage.setItem('cart', JSON.stringify(cartData));
}

// Auto-save cart every 5 seconds
setInterval(saveCartToStorage, 5000);

// Log initialization
console.log('Keranjang initialized successfully!');