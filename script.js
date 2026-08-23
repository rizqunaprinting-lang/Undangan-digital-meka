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

<section class="comments-section">
  <h2>Best Wishes</h2>
  <p class="subtitle">Sampaikan doa dan ucapan terbaik Anda</p>

  <div class="comment-box">
    <!-- Form Input -->
    <form id="commentForm">
      <input type="text" id="name" placeholder="Nama" required />
      <textarea id="message" rows="3" placeholder="Ucapan" required></textarea>
      <button type="submit" class="btn-send">Kirim</button>
    </form>

    <!-- Daftar Komentar -->
    <div class="comments-list" id="commentsList">
      <div class="comment-item">
    <strong class="author-name"></strong>
        <p class="comment-text"></p>
        <span class="comment-time"></span>
        <button class="btn-reply">Reply</button>
      </div>
      <div class="comment-item">
        <strong class="author-name"></strong>
        <p class="comment-text"></p>
        <span class="comment-time"></span>
        <button class="btn-reply">Reply</button>
      </div>
    </div>
  </div>
</section>
