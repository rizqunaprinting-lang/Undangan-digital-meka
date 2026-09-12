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
    document.querySelector('.couple-wrapper').scrollIntoView({ behavior: 'smooth' });
    
    // Putar musik
    const music = document.getElementById('bg-music');
    music.play();
}

// 3. Salin Nomor Rekening
function copyAccount(accountNumber) {
    navigator.clipboard.writeText(accountNumber);
    alert("Nomor rekening berhasil disalin: " + accountNumber);
}
const targetDate = new Date("October 9, 2026 08:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.querySelector(".countdown-container").innerHTML = "<p>Acara Telah Dimulai!</p>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? '0' + days : days;
    document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Mengambil parameter 'to' dari URL (URL Search Params)
window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const guestName = urlParams.get('to');

  // Jika parameter 'to' ada di link, ubah teks nama tamu
  if (guestName) {
    document.getElementById('guest-name').innerText = decodeURIComponent(guestName);
  }
});
document.addEventListener('DOMContentLoaded', function() {

    // Tempelkan kode event listener form di sini
    document.getElementById('commentForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah reload

        const nameInput = document.getElementById('name');
        const messageInput = document.getElementById('message');
        
        const nameValue = nameInput.value;
        const messageValue = messageInput.value;

        const commentList = document.getElementById('commentsList');
        const newComment = document.createElement('div');
        newComment.classList.add('comment-item');
        
        newComment.innerHTML = `
            <strong>${nameValue}</strong>
            <p>${messageValue}</p>
        `;

        commentList.appendChild(newComment);

        // Reset input
        nameInput.value = '';
        messageInput.value = '';
    });

});
