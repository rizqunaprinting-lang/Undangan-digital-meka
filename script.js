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

      
// 4. Hitung Mundur Waktu Pernikahan (Countdown)
const weddingDate = new Date(2026, 9, 9, 9, 0, 0).getTime();

const updateCountdown = setInterval(function() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  // Hitung Hari, Jam, Menit, Detik
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Ambil elemen HTML
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  // Update nilai angka jika elemen ditemukan
  if (daysEl && hoursEl && minutesEl && secondsEl) {
    daysEl.innerText = days < 10 ? "0" + days : days;
    hoursEl.innerText = hours < 10 ? "0" + hours : hours;
    minutesEl.innerText = minutes < 10 ? "0" + minutes : minutes;
    secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;
  }

  // Jika waktu acara sudah lewat
  if (distance < 0) {
    clearInterval(updateCountdown);
    const container = document.querySelector(".countdown-container");
    if (container) {
      container.innerHTML = "<p style='color:#8b7d6b; font-weight:bold;'>Acara Telah Berlangsung</p>";
    }
  }
}, 1000);
    // Bersihkan isi form
    commentForm.reset();
  });
}
