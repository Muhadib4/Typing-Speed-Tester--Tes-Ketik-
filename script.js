// ==========================================================
// 1. KUMPULAN PARAGRAF LATIHAN
// ==========================================================
const paragraphs = [
    "Teknologi berkembang sangat cepat setiap harinya. Kemampuan mengetik dengan cepat dan akurat adalah salah satu keahlian dasar yang sangat berguna di era digital saat ini.",
    "Belajar pemrograman membutuhkan kesabaran, konsistensi, dan latihan yang terus-menerus. Jangan pernah takut menghadapi error karena error adalah bagian dari proses belajar.",
    "Kreativitas dan logika bekerja bersama saat kita membuat sebuah perangkat lunak. Baris kode yang sederhana dapat menghasilkan solusi yang berdampak besar bagi banyak orang.",
    "Fokus adalah kunci utama dalam menyelesaikan pekerjaan dengan baik. Luangkan waktu sejenak untuk melatih konsentrasi dan meningkatkan produktivitas harianmu.",
    "Dunia internet menghubungkan jutaan orang di seluruh penjuru bumi. Kita dapat berbagi pengetahuan, belajar hal baru, dan berkolaborasi tanpa terbatas oleh jarak fisik.",
];

// ==========================================================
// 2. DOM SELECTION (MENGAMBIL ELEMEN HTML)
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

// Elemen Fitur Baru
const soundBtn = document.getElementById("sound-btn");
const soundStatusTag = document.getElementById("sound-status");
const highScoreValueTag = document.getElementById("high-score-value");
const timeBtns = document.querySelectorAll(".time-btn");

// Elemen Modal Hasil
const resultModal = document.getElementById("result-modal");
const modalWpm = document.getElementById("modal-wpm");
const modalAccuracy = document.getElementById("modal-accuracy");
const modalCpm = document.getElementById("modal-cpm");
const modalMistakes = document.getElementById("modal-mistakes");
const modalRankTitle = document.getElementById("modal-rank-title");
const modalMessage = document.getElementById("modal-message");
const modalRestartBtn = document.getElementById("modal-restart-btn");

// ==========================================================
// 3. VARIABEL STATE & AUDIO ENGINE
// ==========================================================
let maxTime = 60; // Durasi terpilih (default: 60s)
let timeLeft = maxTime; // Sisa waktu berjalan
let timer = null;
let charIndex = 0;
let mistakes = 0;
let isTyping = false;
let isSoundEnabled = true; // Status suara aktif / nonaktif

// Inisialisasi Web Audio Context untuk Efek Suara Mekanik
let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// Fungsi menghasilkan suara klik mechanical keyboard secara sintetis
function playKeySound(isError = false) {
    if (!isSoundEnabled) return;
    initAudio();
    if (audioCtx.state === "suspended") {
        audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (isError) {
        // Suara nada rendah jika salah ketik (thud / error)
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(140, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(
            0.001,
            audioCtx.currentTime + 0.08,
        );
        osc.start();
        osc.stop(audioCtx.currentTime + 0.08);
    } else {
        // Suara 'click' switch mechanical keyboard (Blue/Brown switch effect)
        osc.type = "sine";
        osc.frequency.setValueAtTime(
            600 + Math.random() * 150,
            audioCtx.currentTime,
        );
        gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(
            0.001,
            audioCtx.currentTime + 0.04,
        );
        osc.start();
        osc.stop(audioCtx.currentTime + 0.04);
    }
}

// ==========================================================
// 4. SISTEM HIGH SCORE (LOCAL STORAGE)
// ==========================================================
function loadHighScore() {
    const savedHighScore = localStorage.getItem("typesprint_high_wpm") || 0;
    highScoreValueTag.innerText = savedHighScore;
    return parseInt(savedHighScore, 10);
}

function checkAndSaveHighScore(currentWpm) {
    const currentHighScore = loadHighScore();
    if (currentWpm > currentHighScore) {
        localStorage.setItem("typesprint_high_wpm", currentWpm);
        highScoreValueTag.innerText = currentWpm;
        return true; // Berhasil pecah rekor baru!
    }
    return false;
}

// ==========================================================
// 5. FUNGSI LOAD PARAGRAF
// ==========================================================
function loadParagraph() {
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    const selectedText = paragraphs[randomIndex];

    textDisplay.innerHTML = "";
    selectedText.split("").forEach((char) => {
        const span = document.createElement("span");
        span.className = "char";
        span.innerText = char;
        textDisplay.appendChild(span);
    });

    const characters = textDisplay.querySelectorAll(".char");
    if (characters.length > 0) {
        characters[0].classList.add("active");
    }

    inputField.focus();
}

// ==========================================================
// 6. TIMER & METRIK REALTIME
// ==========================================================
function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeLeftTag.innerText = `${timeLeft}s`;
        updateMetrics();
    } else {
        finishGame();
    }
}

function updateMetrics() {
    const timeElapsed = maxTime - timeLeft;
    let wpm = 0;
    let cpm = 0;

    if (timeElapsed > 0) {
        const correctChars = Math.max(0, charIndex - mistakes);
        wpm = Math.round(correctChars / 5 / (timeElapsed / 60));
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        wpmTag.innerText = wpm;

        cpm = Math.round(correctChars / (timeElapsed / 60));
        cpm = cpm < 0 || !cpm || cpm === Infinity ? 0 : cpm;
        cpmTag.innerText = cpm;
    }

    let accuracy = 100;
    if (charIndex > 0) {
        const correctChars = Math.max(0, charIndex - mistakes);
        accuracy = Math.round((correctChars / charIndex) * 100);
        accuracyTag.innerText = `${accuracy}%`;
    } else {
        accuracyTag.innerText = "100%";
    }

    mistakesTag.innerText = mistakes;
    return { wpm, cpm, accuracy };
}

function removeActiveCursor() {
    const characters = textDisplay.querySelectorAll(".char");
    characters.forEach((char) => char.classList.remove("active"));
}

// ==========================================================
// 7. MENANGANI KETIKAN PENGGUNA
// ==========================================================
function handleTyping() {
    const characters = textDisplay.querySelectorAll(".char");
    const typedValue = inputField.value.split("");
    const currentTypedChar = typedValue[charIndex];

    if (!isTyping) {
        timer = setInterval(initTimer, 1000);
        isTyping = true;
    }

    // Pengguna menekan Backspace (menghapus)
    if (typedValue.length < charIndex) {
        if (charIndex > 0) {
            charIndex--;
            if (characters[charIndex].classList.contains("incorrect")) {
                mistakes--;
            }
            characters[charIndex].classList.remove("correct", "incorrect");
            playKeySound(false);
        }
    }
    // Pengguna mengetik karakter baru
    else if (charIndex < characters.length && timeLeft > 0) {
        const expectedChar = characters[charIndex].innerText;

        if (currentTypedChar === expectedChar) {
            characters[charIndex].classList.add("correct");
            characters[charIndex].classList.remove("incorrect");
            playKeySound(false); // Suara klik normal
        } else {
            mistakes++;
            characters[charIndex].classList.add("incorrect");
            characters[charIndex].classList.remove("correct");
            playKeySound(true); // Suara error thud
        }

        charIndex++;
    }

    // Pindahkan kursor
    removeActiveCursor();
    if (charIndex < characters.length && timeLeft > 0) {
        characters[charIndex].classList.add("active");
    } else if (charIndex >= characters.length) {
        finishGame();
    }

    updateMetrics();
}

// ==========================================================
// 8. SELESAI PERMAINAN & MODAL HASIL (GAME OVER)
// ==========================================================
function finishGame() {
    clearInterval(timer);
    inputField.disabled = true;
    removeActiveCursor();

    const finalStats = updateMetrics();
    const isNewRecord = checkAndSaveHighScore(finalStats.wpm);

    // Tentukan Peringkat / Gelar berdasarkan WPM
    let rankTitle = "";
    let rankMessage = "";

    if (finalStats.wpm >= 90) {
        rankTitle = "⚡ Dewa Ketik!";
        rankMessage =
            "Kecepatan jarimu luar biasa spektakuler setara profesional esports!";
    } else if (finalStats.wpm >= 70) {
        rankTitle = "🚀 Master Ketik";
        rankMessage =
            "Kecepatanmu sangat mengesankan di atas rata-rata pengguna umum!";
    } else if (finalStats.wpm >= 50) {
        rankTitle = "🚗 Pengetik Mahir";
        rankMessage =
            "Kerja bagus! Kecepatan mengetikmu sudah sangat lancar dan produktif.";
    } else if (finalStats.wpm >= 30) {
        rankTitle = "🚲 Tingkat Menengah";
        rankMessage =
            "Kemampuan yang solid! Terus berlatih untuk meningkatkan akurasi dan ritme.";
    } else {
        rankTitle = "🐢 Pengetik Pemula";
        rankMessage =
            "Awal yang baik! Luangkan waktu latihan 5 menit setiap hari untuk hasil maksimal.";
    }

    if (isNewRecord && finalStats.wpm > 0) {
        rankMessage +=
            " 🎉 SELAMAT! Kamu berhasil memecahkan Rekor Terbaik baru!";
    }

    // Isi data ke dalam modal popup
    modalWpm.innerText = finalStats.wpm;
    modalAccuracy.innerText = `${finalStats.accuracy}%`;
    modalCpm.innerText = finalStats.cpm;
    modalMistakes.innerText = mistakes;
    modalRankTitle.innerText = rankTitle;
    modalMessage.innerText = rankMessage;

    // Tampilkan modal
    resultModal.classList.add("show");
}

// ==========================================================
// 9. RESET GAME
// ==========================================================
function resetGame() {
    clearInterval(timer);
    resultModal.classList.remove("show"); // Sembunyikan modal

    timeLeft = maxTime;
    charIndex = 0;
    mistakes = 0;
    isTyping = false;
    timer = null;

    inputField.disabled = false;
    inputField.value = "";

    timeLeftTag.innerText = `${maxTime}s`;
    wpmTag.innerText = "0";
    cpmTag.innerText = "0";
    accuracyTag.innerText = "100%";
    mistakesTag.innerText = "0";

    loadParagraph();
}

// ==========================================================
// 10. EVENT LISTENERS
// ==========================================================

// Input ketikan & area klik
inputField.addEventListener("input", handleTyping);
typingBox.addEventListener("click", () => inputField.focus());

// Tombol Reset utama dan tombol coba lagi di modal
restartBtn.addEventListener("click", resetGame);
modalRestartBtn.addEventListener("click", resetGame);

// Toggle Suara Mechanical Keyboard
soundBtn.addEventListener("click", () => {
    isSoundEnabled = !isSoundEnabled;
    soundStatusTag.innerText = isSoundEnabled ? "ON" : "OFF";
    soundBtn.style.opacity = isSoundEnabled ? "1" : "0.6";
});

// Pemilihan Durasi Waktu (15s, 30s, 60s)
timeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Hapus kelas active dari tombol lain
        timeBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        // Ambil waktu dari atribut data-time
        maxTime = parseInt(btn.getAttribute("data-time"), 10);
        resetGame();
    });
});

// ==========================================================
// 11. INISIALISASI SAAT HALAMAN DIBUKA
// ==========================================================
loadHighScore();
loadParagraph();
