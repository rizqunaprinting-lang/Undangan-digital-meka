// 1. Membaca Nama Tamu Otomatis dari URL (contoh: index.html?to=Budi)
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const guestParam = urlParams.get('to');
    if (guestParam) {
        document.getElementById('guest-name').innerText = guestParam;
    }
});

// 2. Fungsi Buka Undangan & Autoplay Musik
function openInvitation() {
    // Scroll ke section berikutnya secara mulus
    document.querySelector('.couples').scrollIntoView({ behavior: 'smooth' });
    
    // Putar musik
    const music = document.getElementById('bg-music');
    music.play();
}

// 3. Salin Nomor Rekening
function copyAccount(accountNumber) {
    navigator.clipboard.writeText(accountNumber);
    alert("Nomor rekening berhasil disalin: " + accountNumber);
}

// 4. Kirim dan Tampilkan Komentar
const commentForm = document.getElementById('commentForm');
const commentsList = document.getElementById('commentsList');

if (commentForm) {
  commentForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah reload/kembali ke atas

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Buat elemen komentar baru
    const commentItem = document.createElement('div');
    commentItem.className = 'comment-item';
    commentItem.innerHTML = `<strong>${name}</strong><p>${message}</p>`;

    // Tambahkan ke daftar komentar
    commentsList.appendChild(commentItem);

    // Bersihkan isi form
    commentForm.reset();
  });
}
