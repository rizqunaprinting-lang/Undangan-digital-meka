// 1. Membaca Nama Tamu Otomatis dari URL (contoh: index.html?to=Budi)
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const guestParam = urlParams.get('to');
    if (guestParam) {
        document.getElementById('guest-name').innerText = guestParam;
    }
});

// 2. Fungsi Buka Undangan & Play Musik
document.addEventListener('DOMContentLoaded', function() {
    const btnBuka = document.getElementById('btn-buka'); // Sesuaikan ID tombol
    const music = document.getElementById('bg-music');   // Sesuaikan ID audio

    if (btnBuka && music) {
        btnBuka.addEventListener('click', function() {
            // Putar audio
            music.play().catch(function(error) {
                console.log("Autoplay dicegah browser:", error);
            });
            
            // Scroll ke section berikutnya
            const couplesSection = document.querySelector('.couples');
            if (couplesSection) {
                couplesSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
}

// 3. Salin Nomor Rekening
function copyAccount(accountNumber) {
    navigator.clipboard.writeText(accountNumber);
    alert("Nomor rekening berhasil disalin: " + accountNumber);
}
