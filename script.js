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

    // ==========================================
// 1. Inisialisasi Firebase dengan Data Anda
// ==========================================
const firebaseConfig = {
  apiKey: "AIzaSyBcxTpPfSMB8qwHXdPZCpaIC7qjWh0gdyw",
  authDomain: "undangan-meka.firebaseapp.com",
  projectId: "undangan-meka",
  storageBucket: "undangan-meka.firebasestorage.app",
  messagingSenderId: "1038306527608",
  appId: "1:1038306527608:web:531864c7a92e375a44608d",
  measurementId: "G-Y5MR4Z0DD3",
  databaseURL: "https://undangan-meka-default-rtdb.firebaseio.com" // Tambahkan URL Realtime Database
};

// Inisialisasi App dan Realtime Database
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ==========================================
// 2. Simpan Ucapan ke Database Cloud
// ==========================================
document.getElementById('commentForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nameInput = document.getElementById('name');
  const messageInput = document.getElementById('message');

  // Push data ke Realtime Database
  db.ref('comments').push({
    name: nameInput.value,
    message: messageInput.value,
    timestamp: Date.now()
  });

  // Reset form input
  nameInput.value = '';
  messageInput.value = '';
});

// ==========================================
// 3. Tampilkan Ucapan di Semua Device Secara Realtime
// ==========================================
db.ref('comments').on('value', function(snapshot) {
  const commentList = document.getElementById('commentsList');
  commentList.innerHTML = ''; // Kosongkan daftar agar tidak terjadi duplikasi

  const data = snapshot.val();

  if (data) {
    Object.keys(data).forEach(function(key) {
      const item = data[key];

      const newComment = document.createElement('div');
      newComment.classList.add('comment-item');

      newComment.innerHTML = `
        <div class="comment-header">
          <strong class="comment-name">${item.name}</strong>
          <span class="comment-time">Baru saja</span>
        </div>
        <p class="comment-text">${item.message}</p>
        <div class="comment-action">
          <span>Reply</span>
        </div>
      `;

      // Menampilkan komentar terbaru di atas
      commentList.prepend(newComment);
    });
  }
});

  // Reset input form setelah dikirim
  nameInput.value = '';
  messageInput.value = '';
});

// ==========================================
// 3. Menampilkan Komentar di Semua Device secara Realtime
// ==========================================
db.ref('comments').on('value', function(snapshot) {
  const commentList = document.getElementById('commentsList');
  commentList.innerHTML = ''; // Reset kontainer agar data tidak duplikat

  const data = snapshot.val();

  if (data) {
    // Loop mengambil setiap komentar yang tersimpan
    Object.keys(data).forEach(function(key) {
      const item = data[key];

      const newComment = document.createElement('div');
      newComment.classList.add('comment-item');

      // Template HTML disesuaikan persis dengan struktur CSS & class yang Anda miliki
      newComment.innerHTML = `
        <div class="comment-header">
          <strong class="comment-name">${item.name}</strong>
          <span class="comment-time">Baru saja</span>
        </div>
        <p class="comment-text">${item.message}</p>
        
        <!-- Tombol Reply dengan onclick -->
        <button class="comment-reply" onclick="toggleReplyForm('${key}')">Reply</button>

        <!-- Form Reply (tersembunyi secara bawaan) -->
        <div class="reply-form-container" id="reply-form-${key}" style="display: none;">
          <input type="text" class="reply-input" placeholder="Tulis balasan..." id="reply-input-${key}">
          <button class="btn-send-reply" onclick="submitReply('${key}')">Kirim</button>
        </div>

        <!-- Wadah Tempat Hasil Balasan Ditampilkan -->
        <div class="replies-list" id="replies-list-${key}"></div>
      `;

      // Menampilkan komentar terbaru di posisi paling atas
      commentList.prepend(newComment);
    });
  }
});
// Fungsi untuk menampilkan/menyembunyikan form reply saat tombol Reply diklik
function toggleReplyForm(key) {
  const form = document.getElementById(`reply-form-${key}`);
  if (form.style.display === "none" || form.style.display === "") {
    form.style.display = "flex";
  } else {
    form.style.display = "none";
  }
}

// Fungsi untuk mengirim balasan dan menyimpannya ke Firebase
function submitReply(key) {
  const input = document.getElementById(`reply-input-${key}`);
  const replyText = input.value.trim();

  if (replyText === "") return;

  // 1. Simpan ke Firebase (ganti 'comments' jika nama node database Anda berbeda)
  const replyRef = firebase.database().ref('comments/' + key + '/replies');
  
  replyRef.push({
    name: 'Admin',
    message: replyText,
    timestamp: Date.now()
  }).then(() => {
    // 2. Tampilkan balasan di layar setelah berhasil terkirim
    const repliesContainer = document.getElementById(`replies-list-${key}`);
    const newReply = document.createElement("div");
    newReply.className = "reply-item";
    newReply.innerHTML = `<strong>Anda:</strong> ${replyText}`;
    repliesContainer.appendChild(newReply);

    // 3. Bersihkan input & sembunyikan form
    input.value = "";
    toggleReplyForm(key);
  }).catch((error) => {
    console.error("Gagal menyimpan balasan: ", error);
  });
}
