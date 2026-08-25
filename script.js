// ==========================================================
// 1. DATASET PARAGRAF (INDONESIA & ENGLISH)
// ==========================================================
const paragraphs = {
    id: [
        "Teknologi berkembang sangat cepat setiap harinya. Kemampuan mengetik dengan cepat dan akurat adalah salah satu keahlian dasar yang sangat berguna di era digital saat ini.",
        "Belajar pemrograman membutuhkan kesabaran, konsistensi, dan latihan yang terus-menerus. Jangan pernah takut menghadapi error karena error adalah bagian dari proses belajar.",
        "Kreativitas dan logika bekerja bersama saat kita membuat sebuah perangkat lunak. Baris kode yang sederhana dapat menghasilkan solusi yang berdampak besar bagi banyak orang.",
        "Fokus adalah kunci utama dalam menyelesaikan pekerjaan dengan baik. Luangkan waktu sejenak untuk melatih konsentrasi dan meningkatkan produktivitas harianmu.",
        "Dunia internet menghubungkan jutaan orang di seluruh penjuru bumi. Kita dapat berbagi pengetahuan, belajar hal baru, dan berkolaborasi tanpa terbatas oleh jarak fisik.",
    ],
    en: [
        "Programming is not just about writing code, it is about solving problems and thinking logically. Clean code always looks like it was written by someone who cares.",
        "The best way to predict the future is to create it. Continuous learning and daily practice will transform your skills into extraordinary achievements.",
        "Simplicity is the soul of efficiency. Writing software that is easy to understand and maintain is the true hallmark of a great developer.",
        "Speed comes naturally when accuracy is prioritized. Focus on your typing posture, rhythm, and muscle memory to reach the highest level of performance.",
        "Technology empowers people to do what they love and explore possibilities that were once thought impossible in the modern world.",
    ],
};

// ==========================================================
// 2. DOM SELECTION
// ==========================================================
const appContainer = document.getElementById("app-container");
const textDisplay = document.getElementById("text-display");
const inputField = document.getElementById("input-field");
const typingBox = document.getElementById("typing-box");
const timeLeftTag = document.getElementById("time-left");
const wpmTag = document.getElementById("wpm-value");
const cpmTag = document.getElementById("cpm-value");
const accuracyTag = document.getElementById("accuracy-value");
const mistakesTag = document.getElementById("mistakes-value");
const restartBtn = document.getElementById("restart-btn");
const highScoreValueTag = document.getElementById("high-score-value");
const floatingContainer = document.getElementById(
    "floating-feedback-container",
);

// Toolbar Elemen
const langBtns = document.querySelectorAll(".lang-btn");
const timeBtns = document.querySelectorAll(".time-btn");

// Dual Streak Elemen
const letterStreakVal = document.getElementById("letter-streak-val");
const wordStreakVal = document.getElementById("word-streak-val");
const comboMultiplierTag = document.getElementById("combo-multiplier");
const comboBar = document.getElementById("combo-bar");

// Audio Settings Modal & Controls
const audioSettingsBtn = document.getElementById("audio-settings-btn");
const audioModal = document.getElementById("audio-modal");
const closeAudioBtn = document.getElementById("close-audio-btn");
const soundToggle = document.getElementById("sound-toggle");
const volumeSlider = document.getElementById("volume-slider");
const volumeValTag = document.getElementById("volume-val");
const currentSoundLabel = document.getElementById("current-sound-label");
const switchTypeBtns = document.querySelectorAll(".switch-type-btn");

// Result Modal Elemen
const resultModal = document.getElementById("result-modal");
const modalWpm = document.getElementById("modal-wpm");
const modalAccuracy = document.getElementById("modal-accuracy");
const modalCpm = document.getElementById("modal-cpm");
const modalLetterStreak = document.getElementById("modal-letter-streak");
const modalWordStreak = document.getElementById("modal-word-streak");
const modalMistakes = document.getElementById("modal-mistakes");
const modalRankTitle = document.getElementById("modal-rank-title");
const modalMessage = document.getElementById("modal-message");
const modalRestartBtn = document.getElementById("modal-restart-btn");
const weakKeysList = document.getElementById("weak-keys-list");

// ==========================================================
// 3. STATE PERMAINAN
// ==========================================================
let currentLang = "id";
let maxTime = 60;
let timeLeft = maxTime;
let timer = null;
let charIndex = 0;
let mistakes = 0;
let isTyping = false;

// Pelacak Streak Huruf & Kata
let letterStreak = 0;
let maxLetterStreak = 0;
let wordStreak = 0;
let maxWordStreak = 0;
let currentWordHadMistake = false; // Penanda apakah kata yang sedang diketik ada salah
let currentWordStartIndex = 0; // Indeks awal kata saat ini

// Analyzer Huruf Salah
let errorKeyMap = {};

// Audio Studio State
let isSoundEnabled = true;
let audioVolume = 0.8;
let currentSwitch = "blue";
let audioCtx = null;

// ==========================================================
// 4. WEB AUDIO SYNTHESIZER (KEY CLICK & WORD CHIME)
// ==========================================================
function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// 1. Suara Ketikan Per Huruf
function playKeySound(isError = false) {
    if (!isSoundEnabled || audioVolume <= 0) return;
    initAudio();
    if (audioCtx.state === "suspended") audioCtx.resume();

    const now = audioCtx.currentTime;
    const gain = audioCtx.createGain();
    gain.connect(audioCtx.destination);

    if (isError) {
        const osc = audioCtx.createOscillator();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(130, now);
        gain.gain.setValueAtTime(audioVolume * 0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        osc.connect(gain);
        osc.start(now);
        osc.stop(now + 0.1);
        return;
    }

    switch (currentSwitch) {
        case "thock": {
            const osc = audioCtx.createOscillator();
            osc.type = "triangle";
            osc.frequency.setValueAtTime(220 + Math.random() * 40, now);
            gain.gain.setValueAtTime(audioVolume * 0.35, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
            osc.connect(gain);
            osc.start(now);
            osc.stop(now + 0.05);
            break;
        }
        case "bubble": {
            const osc = audioCtx.createOscillator();
            osc.type = "sine";
            osc.frequency.setValueAtTime(750, now);
            osc.frequency.exponentialRampToValueAtTime(200, now + 0.06);
            gain.gain.setValueAtTime(audioVolume * 0.3, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
            osc.connect(gain);
            osc.start(now);
            osc.stop(now + 0.06);
            break;
        }
        case "retro": {
            const osc = audioCtx.createOscillator();
            osc.type = "square";
            osc.frequency.setValueAtTime(880 + (charIndex % 3) * 110, now);
            gain.gain.setValueAtTime(audioVolume * 0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
            osc.connect(gain);
            osc.start(now);
            osc.stop(now + 0.04);
            break;
        }
        case "blue":
        default: {
            const osc = audioCtx.createOscillator();
            osc.type = "sine";
            osc.frequency.setValueAtTime(650 + Math.random() * 150, now);
            gain.gain.setValueAtTime(audioVolume * 0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);
            osc.connect(gain);
            osc.start(now);
            osc.stop(now + 0.035);
            break;
        }
    }
}

// 2. Harmoni Chime Saat 1 Kata Selesai Sempurna
function playWordChime() {
    if (!isSoundEnabled || audioVolume <= 0) return;
    initAudio();
    if (audioCtx.state === "suspended") audioCtx.resume();

    const now = audioCtx.currentTime;
    const frequencies = [523.25, 659.25, 783.99]; // Nada C5 - E5 - G5 (Major Crystal Chord)

    frequencies.forEach((freq, index) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + index * 0.04);

        gain.gain.setValueAtTime(audioVolume * 0.18, now + index * 0.04);
        gain.gain.exponentialRampToValueAtTime(
            0.001,
            now + index * 0.04 + 0.25,
        );

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + index * 0.04);
        osc.stop(now + index * 0.04 + 0.25);
    });
}

function triggerScreenShake() {
    appContainer.classList.add("shake-screen");
    setTimeout(() => appContainer.classList.remove("shake-screen"), 250);
}

// ==========================================================
// 5. HIGH SCORE & LOCAL STORAGE
// ==========================================================
function loadHighScore() {
    const saved =
        localStorage.getItem(`typesprint_high_${currentLang}_${maxTime}`) || 0;
    highScoreValueTag.innerText = saved;
    return parseInt(saved, 10);
}

function checkAndSaveHighScore(currentWpm) {
    const currentHigh = loadHighScore();
    if (currentWpm > currentHigh) {
        localStorage.setItem(
            `typesprint_high_${currentLang}_${maxTime}`,
            currentWpm,
        );
        highScoreValueTag.innerText = currentWpm;
        return true;
    }
    return false;
}

// ==========================================================
// 6. MEMUAT PARAGRAF
// ==========================================================
function loadParagraph() {
    const textList = paragraphs[currentLang];
    const randomIndex = Math.floor(Math.random() * textList.length);
    const selectedText = textList[randomIndex];

    textDisplay.innerHTML = "";
    selectedText.split("").forEach((char) => {
        const span = document.createElement("span");
        span.className = "char";
        span.innerText = char;
        textDisplay.appendChild(span);
    });

    const characters = textDisplay.querySelectorAll(".char");
    if (characters.length > 0) characters[0].classList.add("active");

    inputField.focus();
}

// ==========================================================
// 7. TIMER & UPDATE METRIK
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
// 8. LOGIKA DUAL STREAK & FLOATING FEEDBACK
// ==========================================================
function updateStreakUI() {
    letterStreakVal.innerText = letterStreak;
    wordStreakVal.innerText = wordStreak;

    // Hitung Multiplier
    let multiplier = "1x MULTIPLIER";
    if (wordStreak >= 10 || letterStreak >= 60) multiplier = "5x ULTRA 🔥";
    else if (wordStreak >= 5 || letterStreak >= 30) multiplier = "3x MEGA ⚡";
    else if (wordStreak >= 2 || letterStreak >= 15) multiplier = "2x COMBO ✨";
    comboMultiplierTag.innerText = multiplier;

    // Progress bar berdasarkan letter streak
    const progressPercent = Math.min(100, (letterStreak / 60) * 100);
    comboBar.style.width = `${progressPercent}%`;
}

// Menampilkan Animasi Pop-up Melayang saat Kata Sempurna
function showFloatingFeedback(message) {
    const badge = document.createElement("div");
    badge.className = "floating-badge";
    badge.innerText = message;
    floatingContainer.appendChild(badge);

    // Hapus elemen setelah animasi selesai (1.2 detik)
    setTimeout(() => {
        badge.remove();
    }, 1200);
}

// Efek Kilau Emas pada Kata yang Selesai
function highlightCompletedWord(startIndex, endIndex) {
    const characters = textDisplay.querySelectorAll(".char");
    for (let i = startIndex; i <= endIndex; i++) {
        if (characters[i]) {
            characters[i].classList.add("word-perfect");
            setTimeout(
                () => characters[i]?.classList.remove("word-perfect"),
                600,
            );
        }
    }
}

// ==========================================================
// 9. LOGIKA UTAMA MENGETIK
// ==========================================================
function handleTyping() {
    const characters = textDisplay.querySelectorAll(".char");
    const typedValue = inputField.value.split("");
    const currentTypedChar = typedValue[charIndex];

    if (!isTyping) {
        timer = setInterval(initTimer, 1000);
        isTyping = true;
    }

    // Tombol Backspace Ditekan
    if (typedValue.length < charIndex) {
        if (charIndex > 0) {
            charIndex--;
            if (characters[charIndex].classList.contains("incorrect")) {
                mistakes--;
            }
            characters[charIndex].classList.remove("correct", "incorrect");
            playKeySound(false);

            // Backspace mereset streak huruf & menandai kata saat ini ada salah
            letterStreak = 0;
            currentWordHadMistake = true;
            updateStreakUI();
        }
    }
    // Karakter Baru Diketik
    else if (charIndex < characters.length && timeLeft > 0) {
        const expectedChar = characters[charIndex].innerText;

        if (currentTypedChar === expectedChar) {
            characters[charIndex].classList.add("correct");
            characters[charIndex].classList.remove("incorrect");
            playKeySound(false);

            // 1. TAMBAH STREAK HURUF
            letterStreak++;
            if (letterStreak > maxLetterStreak) maxLetterStreak = letterStreak;

            // 2. CEK APAKAH INI AKHIR DARI SUATU KATA (Spasi atau Huruf Terakhir Paragraf)
            const isSpace = expectedChar === " ";
            const isLastChar = charIndex === characters.length - 1;

            if (isSpace || isLastChar) {
                const wordEndIndex = isLastChar ? charIndex : charIndex - 1;

                if (!currentWordHadMistake) {
                    // Kata selesai 100% sempurna!
                    wordStreak++;
                    if (wordStreak > maxWordStreak) maxWordStreak = wordStreak;

                    playWordChime();
                    highlightCompletedWord(currentWordStartIndex, wordEndIndex);

                    // Tentukan Pesan Pop-up
                    if (wordStreak >= 10)
                        showFloatingFeedback(`💎 GODLIKE! ${wordStreak} WORDS`);
                    else if (wordStreak >= 5)
                        showFloatingFeedback(
                            `🔥 UNSTOPPABLE! ${wordStreak} WORDS`,
                        );
                    else if (wordStreak >= 3)
                        showFloatingFeedback(`⚡ GREAT! +1 WORD`);
                    else showFloatingFeedback(`✨ PERFECT! +1 WORD`);
                } else {
                    // Kata ini pernah ada salah ketik
                    wordStreak = 0;
                }

                // Reset untuk kata berikutnya
                currentWordHadMistake = false;
                currentWordStartIndex = charIndex + 1;
            }

            updateStreakUI();
        } else {
            mistakes++;
            characters[charIndex].classList.add("incorrect");
            characters[charIndex].classList.remove("correct");
            playKeySound(true);

            // Catat huruf salah
            const targetChar = expectedChar.toLowerCase();
            errorKeyMap[targetChar] = (errorKeyMap[targetChar] || 0) + 1;

            // Tandai kata saat ini salah & reset streak
            currentWordHadMistake = true;
            if (letterStreak >= 15 || wordStreak >= 3) {
                triggerScreenShake();
            }
            letterStreak = 0;
            wordStreak = 0;
            updateStreakUI();
        }

        charIndex++;
    }

    // Pindahkan Kursor
    removeActiveCursor();
    if (charIndex < characters.length && timeLeft > 0) {
        characters[charIndex].classList.add("active");
    } else if (charIndex >= characters.length) {
        finishGame();
    }

    updateMetrics();
}

// ==========================================================
// 10. GAME OVER & WEAK KEY ANALYZER
// ==========================================================
function finishGame() {
    clearInterval(timer);
    inputField.disabled = true;
    removeActiveCursor();

    const finalStats = updateMetrics();
    const isNewRecord = checkAndSaveHighScore(finalStats.wpm);

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
        rankMessage += " 🎉 REKOR TERBARU BERHASIL DIPECAHKAN!";
    }

    // Isi data modal
    modalWpm.innerText = finalStats.wpm;
    modalAccuracy.innerText = `${finalStats.accuracy}%`;
    modalCpm.innerText = finalStats.cpm;
    modalLetterStreak.innerText = maxLetterStreak;
    modalWordStreak.innerText = maxWordStreak;
    modalMistakes.innerText = mistakes;
    modalRankTitle.innerText = rankTitle;
    modalMessage.innerText = rankMessage;

    // Weak Key List
    const sortedErrors = Object.entries(errorKeyMap).sort(
        (a, b) => b[1] - a[1],
    );
    if (sortedErrors.length > 0) {
        weakKeysList.innerHTML = "";
        sortedErrors.slice(0, 4).forEach(([char, count]) => {
            const displayChar = char === " " ? "SPASI" : char.toUpperCase();
            const tag = document.createElement("span");
            tag.className = "weak-key-tag";
            tag.innerText = `${displayChar} (${count}x)`;
            weakKeysList.appendChild(tag);
        });
    } else {
        weakKeysList.innerHTML =
            "✨ <b>Sempurna!</b> Kamu tidak melakukan salah ketik sama sekali.";
    }

    resultModal.classList.add("show");
}

// ==========================================================
// 11. RESET GAME
// ==========================================================
function resetGame() {
    clearInterval(timer);
    resultModal.classList.remove("show");

    timeLeft = maxTime;
    charIndex = 0;
    mistakes = 0;
    isTyping = false;
    timer = null;
    letterStreak = 0;
    maxLetterStreak = 0;
    wordStreak = 0;
    maxWordStreak = 0;
    currentWordHadMistake = false;
    currentWordStartIndex = 0;
    errorKeyMap = {};

    inputField.disabled = false;
    inputField.value = "";
    floatingContainer.innerHTML = "";

    timeLeftTag.innerText = `${maxTime}s`;
    wpmTag.innerText = "0";
    cpmTag.innerText = "0";
    accuracyTag.innerText = "100%";
    mistakesTag.innerText = "0";

    updateStreakUI();
    loadHighScore();
    loadParagraph();
}

// ==========================================================
// 12. EVENT LISTENERS
// ==========================================================
inputField.addEventListener("input", handleTyping);
typingBox.addEventListener("click", () => inputField.focus());

restartBtn.addEventListener("click", resetGame);
modalRestartBtn.addEventListener("click", resetGame);

langBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        langBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentLang = btn.getAttribute("data-lang");
        resetGame();
    });
});

timeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        timeBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        maxTime = parseInt(btn.getAttribute("data-time"), 10);
        resetGame();
    });
});

audioSettingsBtn.addEventListener("click", () =>
    audioModal.classList.add("show"),
);
closeAudioBtn.addEventListener("click", () =>
    audioModal.classList.remove("show"),
);

soundToggle.addEventListener("change", (e) => {
    isSoundEnabled = e.target.checked;
    updateAudioLabel();
});

volumeSlider.addEventListener("input", (e) => {
    audioVolume = parseInt(e.target.value, 10) / 100;
    volumeValTag.innerText = `${e.target.value}%`;
    updateAudioLabel();
    playKeySound(false);
});

switchTypeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        switchTypeBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentSwitch = btn.getAttribute("data-switch");
        updateAudioLabel();
        playKeySound(false);
    });
});

function updateAudioLabel() {
    if (!isSoundEnabled || audioVolume === 0) {
        currentSoundLabel.innerText = "Muted 🔇";
    } else {
        const switchNames = {
            blue: "Blue Clicky",
            thock: "Thocky Cream",
            bubble: "Bubble ASMR",
            retro: "8-Bit Retro",
        };
        currentSoundLabel.innerText = `${switchNames[currentSwitch]} (${Math.round(audioVolume * 100)}%)`;
    }
}

// ==========================================================
// 13. INIT
// ==========================================================
loadHighScore();
loadParagraph();
