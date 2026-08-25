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

// Toolbar
const langBtns = document.querySelectorAll(".lang-btn");
const timeBtns = document.querySelectorAll(".time-btn");

// Dual Streak & Multiplier
const letterStreakVal = document.getElementById("letter-streak-val");
const wordStreakVal = document.getElementById("word-streak-val");
const comboMultiplierTag = document.getElementById("combo-multiplier");
const comboBar = document.getElementById("combo-bar");

// Audio Settings
const audioSettingsBtn = document.getElementById("audio-settings-btn");
const audioModal = document.getElementById("audio-modal");
const closeAudioBtn = document.getElementById("close-audio-btn");
const soundToggle = document.getElementById("sound-toggle");
const volumeSlider = document.getElementById("volume-slider");
const volumeValTag = document.getElementById("volume-val");
const currentSoundLabel = document.getElementById("current-sound-label");
const switchTypeBtns = document.querySelectorAll(".switch-type-btn");

// Result Modal
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
// 3. STATE PERMAINAN & MULTIPLIER TIER
// ==========================================================
let currentLang = "id";
let maxTime = 60;
let timeLeft = maxTime;
let timer = null;
let charIndex = 0;
let mistakes = 0;
let isTyping = false;

// Pelacak Streak & Multiplier
let letterStreak = 0;
let maxLetterStreak = 0;
let wordStreak = 0;
let maxWordStreak = 0;
let multiplierLevel = 1; // 1x, 2x, 3x, 4x, 5x (MAX)
let streakScoreInTier = 0; // Skor pengisi progress bar di tier aktif
const TIER_THRESHOLD = 15; // Butuh 15 skor streak per level untuk naik tier

let currentWordHadMistake = false;
let currentWordStartIndex = 0;

// Analyzer Huruf Salah
let errorKeyMap = {};

// Audio Studio
let isSoundEnabled = true;
let audioVolume = 0.8;
let currentSwitch = "blue";
let audioCtx = null;

// ==========================================================
// 4. WEB AUDIO SYNTHESIZER
// ==========================================================
function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// Suara Ketikan Per Huruf
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
        osc.frequency.setValueAtTime(120, now);
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

// Suara Harmoni Kata Sempurna
function playWordChime() {
    if (!isSoundEnabled || audioVolume <= 0) return;
    initAudio();
    if (audioCtx.state === "suspended") audioCtx.resume();

    const now = audioCtx.currentTime;
    const frequencies = [523.25, 659.25, 783.99, 1046.5]; // Chord C Major E5 - G5 - C6

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

// Suara Ledakan Bass saat Streak Tinggi Hancur
function playCrashSound(level) {
    if (!isSoundEnabled || audioVolume <= 0) return;
    initAudio();
    if (audioCtx.state === "suspended") audioCtx.resume();

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(100 - level * 10, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.35);

    gain.gain.setValueAtTime(audioVolume * (0.2 + level * 0.08), now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.35);
}

// ==========================================================
// 5. GUNCANGAN LAYAR BERTINGKAT (DYNAMIC SHAKE)
// ==========================================================
function triggerDynamicShake(level) {
    // Hapus kelas shake sebelumnya
    appContainer.classList.remove(
        "shake-sm",
        "shake-md",
        "shake-lg",
        "shake-extreme",
    );
    playCrashSound(level);

    let shakeClass = "shake-sm";
    let duration = 200;

    if (level >= 5) {
        shakeClass = "shake-extreme"; // Berguncang hebat gempa!
        duration = 500;
    } else if (level >= 4) {
        shakeClass = "shake-lg";
        duration = 350;
    } else if (level >= 3) {
        shakeClass = "shake-md";
        duration = 250;
    }

    appContainer.classList.add(shakeClass);
    setTimeout(() => appContainer.classList.remove(shakeClass), duration);
}

// ==========================================================
// 6. HIGH SCORE
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
// 7. MEMUAT PARAGRAF
// ==========================================================
function loadParagraph() {
    const textList = paragraphs[currentLang];
    const randomIndex = Math.floor(Math.random() * textList.length);
    const selectedText = textList[randomIndex];

    textDisplay.innerHTML = "";
    selectedText.split("").forEach((char) => {
        const span = document.createElement("span");
        span.className = "char";
        span.textContent = char;
        span.setAttribute("data-char", char);
        textDisplay.appendChild(span);
    });

    const characters = textDisplay.querySelectorAll(".char");
    if (characters.length > 0) characters[0].classList.add("active");

    inputField.focus();
}

// ==========================================================
// 8. TIMER & METRIK
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
// 9. LOGIKA TIER MULTIPLIER & VISUAL STREAK
// ==========================================================
function addStreakPoints(points = 1) {
    streakScoreInTier += points;

    // Jika progress bar di tier aktif penuh -> Naik ke Multiplier berikutnya
    if (streakScoreInTier >= TIER_THRESHOLD) {
        if (multiplierLevel < 5) {
            multiplierLevel++;
            streakScoreInTier = 0; // Reset bar untuk mengisi tier selanjutnya
        } else {
            streakScoreInTier = TIER_THRESHOLD; // Max tier 5x
        }
    }

    updateStreakUI();
}

function resetMultiplier() {
    multiplierLevel = 1;
    streakScoreInTier = 0;
    appContainer.classList.remove("overdrive-mode");
    updateStreakUI();
}

function updateStreakUI() {
    letterStreakVal.innerText = letterStreak;
    wordStreakVal.innerText = wordStreak;

    // Update Multiplier Label & Class
    comboMultiplierTag.className = `multiplier-pill tier-${multiplierLevel}`;
    if (multiplierLevel >= 5) {
        comboMultiplierTag.innerText = "5x OVERDRIVE 🔥";
        appContainer.classList.add("overdrive-mode");
    } else {
        comboMultiplierTag.innerText = `${multiplierLevel}x MULTIPLIER`;
        appContainer.classList.remove("overdrive-mode");
    }

    // Progress bar percentage di dalam tier aktif
    const percent = Math.min(100, (streakScoreInTier / TIER_THRESHOLD) * 100);
    comboBar.style.width = multiplierLevel >= 5 ? "100%" : `${percent}%`;
}

// 1. Partikel Angka Melayang (+1) Tepat di Atas Huruf
function spawnCharSparkle(targetElement) {
    if (!targetElement) return;
    const rect = targetElement.getBoundingClientRect();
    const boxRect = typingBox.getBoundingClientRect();

    const sparkle = document.createElement("span");
    sparkle.className = "char-sparkle";
    sparkle.innerText = `+${multiplierLevel}`;

    // Posisikan tepat di atas karakter yang diketik
    sparkle.style.left = `${rect.left - boxRect.left}px`;
    sparkle.style.top = `${rect.top - boxRect.top - 14}px`;

    floatingContainer.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 600);
}

// 2. Banner Pop-Up Per Kata
function showWordBanner(message) {
    const banner = document.createElement("div");
    banner.className = "floating-word-banner";
    banner.innerText = message;
    floatingContainer.appendChild(banner);
    setTimeout(() => banner.remove(), 1100);
}

function highlightCompletedWord(startIndex, endIndex) {
    const characters = textDisplay.querySelectorAll(".char");
    for (let i = startIndex; i <= endIndex; i++) {
        if (characters[i]) {
            characters[i].classList.add("word-perfect");
            setTimeout(
                () => characters[i]?.classList.remove("word-perfect"),
                500,
            );
        }
    }
}

// ==========================================================
// 10. LOGIKA KETIKAN UTAMA
// ==========================================================
function handleTyping() {
    const characters = textDisplay.querySelectorAll(".char");
    const typedValue = inputField.value.split("");
    const currentTypedChar = typedValue[charIndex];

    if (!isTyping) {
        timer = setInterval(initTimer, 1000);
        isTyping = true;
    }

    // Backspace
    if (typedValue.length < charIndex) {
        if (charIndex > 0) {
            charIndex--;
            if (characters[charIndex].classList.contains("incorrect")) {
                mistakes--;
            }
            characters[charIndex].classList.remove("correct", "incorrect");
            playKeySound(false);

            letterStreak = 0;
            currentWordHadMistake = true;
            resetMultiplier();
        }
    }
    // Karakter Baru
    else if (charIndex < characters.length && timeLeft > 0) {
        const expectedChar = characters[charIndex].getAttribute("data-char");

        if (currentTypedChar === expectedChar) {
            characters[charIndex].classList.add("correct");
            characters[charIndex].classList.remove("incorrect");
            playKeySound(false);

            // Partikel +1 per huruf
            spawnCharSparkle(characters[charIndex]);

            // Tambah Streak Huruf & Poin Tier
            letterStreak++;
            if (letterStreak > maxLetterStreak) maxLetterStreak = letterStreak;
            addStreakPoints(1);

            // Cek Selesai Kata
            const isSpace = expectedChar === " ";
            const isLastChar = charIndex === characters.length - 1;

            if (isSpace || isLastChar) {
                const wordEndIndex = isLastChar ? charIndex : charIndex - 1;

                if (!currentWordHadMistake) {
                    wordStreak++;
                    if (wordStreak > maxWordStreak) maxWordStreak = wordStreak;

                    playWordChime();
                    highlightCompletedWord(currentWordStartIndex, wordEndIndex);
                    addStreakPoints(3); // Bonus 3 poin untuk kata sempurna!

                    // Pesan Banner Keren
                    if (multiplierLevel >= 5)
                        showWordBanner(`💎 OVERDRIVE! (${wordStreak} Words)`);
                    else if (multiplierLevel >= 4)
                        showWordBanner(`🔥 UNSTOPPABLE! (${wordStreak} Words)`);
                    else if (multiplierLevel >= 3)
                        showWordBanner(`⚡ SICK COMBO! (${wordStreak} Words)`);
                    else showWordBanner(`✨ PERFECT WORD!`);
                } else {
                    wordStreak = 0;
                }

                currentWordHadMistake = false;
                currentWordStartIndex = charIndex + 1;
            }
        } else {
            mistakes++;
            characters[charIndex].classList.add("incorrect");
            characters[charIndex].classList.remove("correct");
            playKeySound(true);

            const targetChar = expectedChar.toLowerCase();
            errorKeyMap[targetChar] = (errorKeyMap[targetChar] || 0) + 1;

            // 🌋 Guncangkan Layar Sesuai Multiplier Level yang Hancur!
            triggerDynamicShake(multiplierLevel);

            currentWordHadMistake = true;
            letterStreak = 0;
            wordStreak = 0;
            resetMultiplier();
        }

        charIndex++;
    }

    removeActiveCursor();
    if (charIndex < characters.length && timeLeft > 0) {
        characters[charIndex].classList.add("active");
    } else if (charIndex >= characters.length) {
        finishGame();
    }

    updateMetrics();
}

// ==========================================================
// 11. GAME OVER
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

    modalWpm.innerText = finalStats.wpm;
    modalAccuracy.innerText = `${finalStats.accuracy}%`;
    modalCpm.innerText = finalStats.cpm;
    modalLetterStreak.innerText = maxLetterStreak;
    modalWordStreak.innerText = maxWordStreak;
    modalMistakes.innerText = mistakes;
    modalRankTitle.innerText = rankTitle;
    modalMessage.innerText = rankMessage;

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
// 12. RESET GAME
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
    multiplierLevel = 1;
    streakScoreInTier = 0;
    currentWordHadMistake = false;
    currentWordStartIndex = 0;
    errorKeyMap = {};

    appContainer.classList.remove("overdrive-mode");
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
// 13. EVENT LISTENERS & AUDIO CONTROLS
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

// Inisialisasi Pertama Kali
loadHighScore();
loadParagraph();
