// 1. Membaca Nama Tamu Otomatis dari URL (contoh: index.html?to=Budi)
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const guestParam = urlParams.get('to');
    const guestElement = document.getElementById('guest-name');
    
    // Pengecekan aman agar tidak error jika elemen guest-name tidak ada
    if (guestParam && guestElement) {
        guestElement.innerText = guestParam;
    }
});

// 2. Fungsi Buka Undangan & Autoplay Musik
function openInvitation() {
    // Scroll ke section couples
    const couplesSection = document.querySelector('.couples');
    if (couplesSection) {
        couplesSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
    // Putar musik
    const music = document.getElementById('bg-music');
    if (music) {
        music.play().catch(error => {
            console.log("Autoplay dicegah browser:", error);
        });
    }
}
// 3. Salin Nomor Rekening
function copyAccount(accountNumber) {
    navigator.clipboard.writeText(accountNumber);
    alert("Nomor rekening berhasil disalin: " + accountNumber);
}
// 4. Kirim dan Tampilkan Komentar
document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('commentForm');
    const commentsList = document.getElementById('commentsList');

    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah reload

            const nameInput = document.getElementById('name');
            const messageInput = document.getElementById('message');

            if (nameInput && messageInput) {
                const name = nameInput.value;
                const message = messageInput.value;

                // Buat elemen komentar baru
                const commentItem = document.createElement('div');
                commentItem.className = 'comment-item';
                commentItem.innerHTML = `<strong>${name}</strong><p>${message}</p>`;

                // Tambahkan ke daftar komentar
                if (commentsList) {
                    commentsList.appendChild(commentItem);
                }

                // Reset form
                commentForm.reset();
            }
        });
    }
});
