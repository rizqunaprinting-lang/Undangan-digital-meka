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
    document.addEventListener('DOMContentLoaded', function() {
    const btnBuka = document.getElementById('btn-buka'); // Sesuai ID tombol Anda
    const music = document.getElementById('bg-music');    // Sesuai ID audio Anda

    if (btnBuka && music) {
        btnBuka.addEventListener('click', function() {
            music.play().then(() => {
                console.log("Musik berhasil diputar!");
            }).catch(error => {
                console.error("Gagal memutar musik:", error);
            });
            
            // Kode tambahan: biasanya untuk menyembunyikan sampul depan / scroll ke konten
            // document.getElementById('cover-section').style.display = 'none'; 
        });
    }
});
}

// 3. Salin Nomor Rekening
function copyAccount(accountNumber) {
    navigator.clipboard.writeText(accountNumber);
    alert("Nomor rekening berhasil disalin: " + accountNumber);
}
