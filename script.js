// ==========================================================
// 1. KUMPULAN PARAGRAF / KALIMAT LATIHAN
// ==========================================================
const paragraphs = [
    "Teknologi berkembang sangat cepat setiap harinya. Kemampuan mengetik dengan cepat dan akurat adalah salah satu keahlian dasar yang sangat berguna di era digital saat ini.",
    "Belajar pemrograman membutuhkan kesabaran, konsistensi, dan latihan yang terus-menerus. Jangan pernah takut menghadapi error karena error adalah bagian dari proses belajar.",
    "Kreativitas dan logika bekerja bersama saat kita membuat sebuah perangkat lunak. Baris kode yang sederhana dapat menghasilkan solusi yang berdampak besar bagi banyak orang.",
    "Fokus adalah kunci utama dalam menyelesaikan pekerjaan dengan baik. Luangkan waktu sejenak untuk melatih konsentrasi dan meningkatkan produktivitas harianmu.",
    "Dunia internet menghubungkan jutaan orang di seluruh penjuru bumi. Kita dapat berbagi pengetahuan, belajar hal baru, dan berkolaborasi tanpa terbatas oleh jarak fisik.",
];

// ==========================================================
// 2. MENGAMBIL ELEMEN DARI HTML (DOM SELECTION)
// ==========================================================
const textDisplay = document.getElementById("text-display");
const inputField = document.getElementById("input-field");
const typingBox = document.getElementById("typing-box");
const timeLeftTag = document.getElementById("time-left");
const wpmTag = document.getElementById("wpm-value");
const cpmTag = document.getElementById("cpm-value");
const accuracyTag = document.getElementById("accuracy-value");
const mistakesTag = document.getElementById("mistakes-value");
const restartBtn = document.getElementById("restart-btn");

// ==========================================================
// 3. VARIABEL STATE (KONDISI PERMAINAN)
// ==========================================================
const MAX_TIME = 60; // Durasi tes dalam detik
let timeLeft = MAX_TIME; // Sisa waktu yang berjalan
let timer = null; // Menyimpan ID interval timer
let charIndex = 0; // Posisi karakter yang sedang diketik
let mistakes = 0; // Jumlah salah ketik
let isTyping = false; // Penanda apakah pengetikan sudah dimulai

// ==========================================================
// 4. FUNGSI: MEMUAT PARAGRAF BARU KE TAMPILAN
// ==========================================================
function loadParagraph() {
    // Memilih satu paragraf secara acak dari array paragraphs
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    const selectedText = paragraphs[randomIndex];

    // Kosongkan area tampilan teks sebelumnya
    textDisplay.innerHTML = "";

    // Pecah teks menjadi array karakter, lalu bungkus tiap karakter dengan <span class="char">
    selectedText.split("").forEach((char) => {
        const span = document.createElement("span");
        span.className = "char";
        span.innerText = char;
        textDisplay.appendChild(span);
    });

    // Beri kelas 'active' pada karakter pertama sebagai kursor awal
    const characters = textDisplay.querySelectorAll(".char");
    if (characters.length > 0) {
        characters[0].classList.add("active");
    }

    // Fokuskan kursor keyboard ke input tersembunyi
    inputField.focus();
}

// ==========================================================
// 5. FUNGSI: MENGHITUNG MUNDUR WAKTU (TIMER)
// ==========================================================
function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeLeftTag.innerText = `${timeLeft}s`;

        // Hitung WPM dan CPM setiap detik berjalan
        updateMetrics();
    } else {
        // Jika waktu habis (0 detik), hentikan timer dan akhiri permainan
        clearInterval(timer);
        inputField.disabled = true;
        removeActiveCursor();
    }
}

// ==========================================================
// 6. FUNGSI: MENGHITUNG WPM, CPM, & AKURASI
// ==========================================================
function updateMetrics() {
    // Waktu yang sudah berjalan (dalam detik)
    const timeElapsed = MAX_TIME - timeLeft;

    if (timeElapsed > 0) {
        // Total karakter yang benar
        const correctChars = charIndex - mistakes;

        // Standar internasional: 1 kata = 5 karakter
        // Rumus WPM = (Karakter Benar / 5) / (Waktu Berlalu dalam Menit)
        let wpm = Math.round(correctChars / 5 / (timeElapsed / 60));
        // Jika nilai WPM negatif, 0, atau tidak valid, ubah jadi 0
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        wpmTag.innerText = wpm;

        // Rumus CPM = Karakter Benar / (Waktu Berlalu dalam Menit)
        let cpm = Math.round(correctChars / (timeElapsed / 60));
        cpm = cpm < 0 || !cpm || cpm === Infinity ? 0 : cpm;
        cpmTag.innerText = cpm;
    }

    // Rumus Akurasi = (Karakter Benar / Total Karakter yang sudah diketik) * 100%
    if (charIndex > 0) {
        const correctChars = Math.max(0, charIndex - mistakes);
        const accuracy = Math.round((correctChars / charIndex) * 100);
        accuracyTag.innerText = `${accuracy}%`;
    } else {
        accuracyTag.innerText = "100%";
    }

    // Update jumlah kesalahan ketik
    mistakesTag.innerText = mistakes;
}

// ==========================================================
// 7. FUNGSI: MENGHAPUS SEMUA KURSOR AKTIF
// ==========================================================
function removeActiveCursor() {
    const characters = textDisplay.querySelectorAll(".char");
    characters.forEach((char) => char.classList.remove("active"));
}

// ==========================================================
// 8. FUNGSI: LOGIKA UTAMA SAAT PENGGUNA MENGETIK
// ==========================================================
function handleTyping() {
    const characters = textDisplay.querySelectorAll(".char");
    const typedValue = inputField.value.split("");
    const currentTypedChar = typedValue[charIndex];

    // Jalankan timer saat ketikan pertama dimulai
    if (!isTyping) {
        timer = setInterval(initTimer, 1000);
        isTyping = true;
    }

    // Cek apakah pengguna menekan tombol Backspace (menghapus)
    if (typedValue.length < charIndex) {
        if (charIndex > 0) {
            charIndex--;
            // Jika karakter yang dihapus sebelumnya salah, kurangi jumlah mistake
            if (characters[charIndex].classList.contains("incorrect")) {
                mistakes--;
            }
            // Hapus kelas benar/salah pada huruf yang dihapus
            characters[charIndex].classList.remove("correct", "incorrect");
        }
    }
    // Jika pengguna mengetik karakter baru
    else if (charIndex < characters.length && timeLeft > 0) {
        const expectedChar = characters[charIndex].innerText;

        if (currentTypedChar === expectedChar) {
            characters[charIndex].classList.add("correct");
            characters[charIndex].classList.remove("incorrect");
        } else {
            mistakes++;
            characters[charIndex].classList.add("incorrect");
            characters[charIndex].classList.remove("correct");
        }

        charIndex++;
    }

    // Pindahkan indikator kursor (.active) ke karakter selanjutnya
    removeActiveCursor();
    if (charIndex < characters.length && timeLeft > 0) {
        characters[charIndex].classList.add("active");
    } else if (charIndex >= characters.length) {
        // Jika semua kalimat sudah selesai diketik sebelum waktu habis
        clearInterval(timer);
        inputField.disabled = true;
    }

    // Perbarui metrik skor secara langsung
    updateMetrics();
}

// ==========================================================
// 9. FUNGSI: RESET PERMAINAN
// ==========================================================
function resetGame() {
    // Hentikan timer yang sedang berjalan
    clearInterval(timer);

    // Reset semua variabel state ke nilai awal
    timeLeft = MAX_TIME;
    charIndex = 0;
    mistakes = 0;
    isTyping = false;
    timer = null;

    // Aktifkan kembali input field dan bersihkan isinya
    inputField.disabled = false;
    inputField.value = "";

    // Reset teks tampilan skor di HTML
    timeLeftTag.innerText = `${MAX_TIME}s`;
    wpmTag.innerText = "0";
    cpmTag.innerText = "0";
    accuracyTag.innerText = "100%";
    mistakesTag.innerText = "0";

    // Muat paragraf baru
    loadParagraph();
}

// ==========================================================
// 10. EVENT LISTENERS (MENGHUBUNGKAN AKSI PENGGUNA)
// ==========================================================

// 1. Dengarkan setiap input ketikan pada input field
inputField.addEventListener("input", handleTyping);

// 2. Jika area kotak teks diklik di mana saja, otomatis fokuskan ke input
typingBox.addEventListener("click", () => inputField.focus());

// 3. Jika tombol Restart diklik, jalankan fungsi resetGame
restartBtn.addEventListener("click", resetGame);

// ==========================================================
// 11. INISIALISASI PERTAMA KALI KETIKA HALAMAN DIBUKA
// ==========================================================
loadParagraph();
