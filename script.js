// ==========================================================
// 1. KAMUS BAHASA (i18n) & PARAGRAF
// ==========================================================
const i18n = {
    id: {
        brandTag: "DIMENSION FX",
        highScoreTitle: "Rekor:",
        language: "Bahasa:",
        time: "Waktu:",
        letterStreak: "Streak Huruf",
        wordStreak: "Streak Kata",
        multiplier: "MULTIPLIER",
        celestial10x: "CELESTIAL GODLY 10x 🌟",
        backrooms: "BACKROOMS HORROR",
        timeLeft: "Sisa Waktu",
        timeElapsed: "Waktu Berlalu",
        accuracy: "Akurasi",
        mistakes: "Salah Ketik",
        restartBtn: "Reset / Ganti Teks",
        audioTitle: "🎛️ Audio & Switch Studio",
        audioSubtitle: "Atur profil suara ketikan dan volume",
        soundToggle: "Suara Keyboard & Chime:",
        volume: "Volume:",
        switchType: "Tipe Switch / Efek Suara:",
        saveAudio: "Simpan & Tutup",
        resultBadge: "🏆 Hasil Tes",
        modalWpmDesc: "WPM (Kata/Menit)",
        modalAccDesc: "Akurasi",
        modalCpmDesc: "CPM (Karakter/Menit)",
        modalLetterStreakDesc: "Max Letter Streak 🔤",
        modalWordStreakDesc: "Max Word Streak 📖",
        modalMistakesDesc: "Salah Ketik",
        weakKeysTitle: "🎯 Analisis Huruf Terlemah:",
        weakKeysClean:
            "✨ <b>Sempurna!</b> Kamu tidak melakukan salah ketik sama sekali.",
        modalRestart: "🚀 Main Lagi",
        newRecord: "🎉 REKOR TERBARU BERHASIL DIPECAHKAN!",
        ranks: {
            godlike: {
                title: "⚡ Dewa Ketik!",
                msg: "Kecepatan jarimu luar biasa spektakuler setara profesional esports!",
            },
            master: {
                title: "🚀 Master Ketik",
                msg: "Kecepatanmu sangat mengesankan di atas rata-rata pengguna umum!",
            },
            pro: {
                title: "🚗 Pengetik Mahir",
                msg: "Kerja bagus! Kecepatan mengetikmu sudah sangat lancar dan produktif.",
            },
            intermediate: {
                title: "🚲 Tingkat Menengah",
                msg: "Kemampuan yang solid! Terus berlatih untuk meningkatkan ritme.",
            },
            beginner: {
                title: "🐢 Pengetik Pemula",
                msg: "Awal yang baik! Luangkan waktu latihan 5 menit setiap hari.",
            },
        },
        banners: {
            celestial: "🌟 CELESTIAL GODLY 10X!",
            superCombo: "🔥 SICK COMBO!",
            perfectWord: "✨ KATA SEMPURNA!",
            horrorCurse: "💀 ENTITY ATTACK! (-1 MULTIPLIER)",
        },
    },
    en: {
        brandTag: "DIMENSION FX",
        highScoreTitle: "Best:",
        language: "Language:",
        time: "Time:",
        letterStreak: "Letter Streak",
        wordStreak: "Word Streak",
        multiplier: "MULTIPLIER",
        celestial10x: "CELESTIAL GODLY 10x 🌟",
        backrooms: "BACKROOMS HORROR",
        timeLeft: "Time Left",
        timeElapsed: "Time Elapsed",
        accuracy: "Accuracy",
        mistakes: "Mistakes",
        restartBtn: "Reset / New Text",
        audioTitle: "🎛️ Audio & Switch Studio",
        audioSubtitle: "Customize typing sound profile & volume",
        soundToggle: "Keyboard & Chime Sound:",
        volume: "Volume:",
        switchType: "Switch Profile / Sound FX:",
        saveAudio: "Save & Close",
        resultBadge: "🏆 Test Results",
        modalWpmDesc: "WPM (Words/Min)",
        modalAccDesc: "Accuracy",
        modalCpmDesc: "CPM (Chars/Min)",
        modalLetterStreakDesc: "Max Letter Streak 🔤",
        modalWordStreakDesc: "Max Word Streak 📖",
        modalMistakesDesc: "Mistakes",
        weakKeysTitle: "🎯 Weak Keys Analysis:",
        weakKeysClean: "✨ <b>Flawless!</b> You made zero typing mistakes.",
        modalRestart: "🚀 Play Again",
        newRecord: "🎉 NEW HIGH SCORE RECORD ACHIEVED!",
        ranks: {
            godlike: {
                title: "⚡ Godlike Speed!",
                msg: "Your typing speed is extraordinary, rivaling professional esports players!",
            },
            master: {
                title: "🚀 Typing Master",
                msg: "Remarkable speed! You type significantly faster than average.",
            },
            pro: {
                title: "🚗 Advanced Typist",
                msg: "Great job! Your typing is super smooth, fluent, and productive.",
            },
            intermediate: {
                title: "🚲 Intermediate",
                msg: "Solid performance! Keep practicing to maintain your rhythm.",
            },
            beginner: {
                title: "🐢 Novice Typist",
                msg: "Good start! Practice 5 minutes daily for steady improvements.",
            },
        },
        banners: {
            celestial: "🌟 CELESTIAL GODLY 10X!",
            superCombo: "🔥 SICK COMBO!",
            perfectWord: "✨ PERFECT WORD!",
            horrorCurse: "💀 ENTITY ATTACK! (-1 MULTIPLIER)",
        },
    },
};

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
const bodyRoot = document.getElementById("body-root");
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

// UI Translatable
const highScoreTitleTag = document.getElementById("high-score-title");
const lblLanguage = document.getElementById("lbl-language");
const lblTime = document.getElementById("lbl-time");
const lblLetterStreak = document.getElementById("lbl-letter-streak");
const lblWordStreak = document.getElementById("lbl-word-streak");
const lblTimeStat = document.getElementById("lbl-time-stat");
const lblAccuracyStat = document.getElementById("lbl-accuracy-stat");
const lblMistakesStat = document.getElementById("lbl-mistakes-stat");
const lblRestartBtn = document.getElementById("lbl-restart-btn");

const audioModalTitle = document.getElementById("audio-modal-title");
const audioModalSubtitle = document.getElementById("audio-modal-subtitle");
const lblSoundToggle = document.getElementById("lbl-sound-toggle");
const lblVolume = document.getElementById("lbl-volume");
const lblSwitchType = document.getElementById("lbl-switch-type");
const lblSaveAudioBtn = document.getElementById("lbl-save-audio-btn");

const rankBadge = document.getElementById("rank-badge");
const lblModalWpm = document.getElementById("lbl-modal-wpm");
const lblModalAccuracy = document.getElementById("lbl-modal-accuracy");
const lblModalCpm = document.getElementById("lbl-modal-cpm");
const lblModalLetterStreak = document.getElementById("lbl-modal-letter-streak");
const lblModalWordStreak = document.getElementById("lbl-modal-word-streak");
const lblModalMistakes = document.getElementById("lbl-modal-mistakes");
const lblWeakKeysTitle = document.getElementById("lbl-weak-keys-title");
const lblModalRestartBtn = document.getElementById("lbl-modal-restart-btn");

const letterStreakIcon = document.getElementById("letter-streak-icon");
const wordStreakIcon = document.getElementById("word-streak-icon");

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
// 3. STATE DUAL DIMENSION (-10 s/d +10)
// ==========================================================
let currentLang = "id";
let maxTime = 60;
let timeLeft = maxTime;
let timeElapsedZen = 0;
let timer = null;
let charIndex = 0;
let mistakes = 0;
let isTyping = false;

// Pelacak Streak
let letterStreak = 0;
let maxLetterStreak = 0;
let wordStreak = 0;
let maxWordStreak = 0;

// MULTIPLIER LEVEL: Rentang -10 s/d +10 (TIDAK ADA 0)
// Positif: +1, +2, +3, +4, +5, +6, +7, +8, +9, +10 (Celestial)
// Negatif: -1, -2, -3, -4, -5, -6, -7, -8, -9, -10 (Backrooms)
let multiplierLevel = 1;
let streakPointsInTier = 0;
const TIER_THRESHOLD = 10; // Butuh 10 skor untuk naik tier

let currentWordHadMistake = false;
let currentWordStartIndex = 0;
let errorKeyMap = {};

// Audio Studio
let isSoundEnabled = true;
let audioVolume = 0.8;
let currentSwitch = "blue";
let audioCtx = null;

// ==========================================================
// 4. APPLY LANGUAGE (i18n)
// ==========================================================
function applyLanguage(lang) {
    currentLang = lang;
    const t = i18n[lang];

    highScoreTitleTag.innerText = t.highScoreTitle;
    lblLanguage.innerText = t.language;
    lblTime.innerText = t.time;

    lblLetterStreak.innerText = t.letterStreak;
    lblWordStreak.innerText = t.wordStreak;
    lblTimeStat.innerText = maxTime === 0 ? t.timeElapsed : t.timeLeft;
    lblAccuracyStat.innerText = t.accuracy;
    lblMistakesStat.innerText = t.mistakes;
    lblRestartBtn.innerText = t.restartBtn;

    audioModalTitle.innerText = t.audioTitle;
    audioModalSubtitle.innerText = t.audioSubtitle;
    lblSoundToggle.innerText = t.soundToggle;
    lblVolume.innerText = t.volume;
    lblSwitchType.innerText = t.switchType;
    lblSaveAudioBtn.innerText = t.saveAudio;

    rankBadge.innerText = t.resultBadge;
    lblModalWpm.innerText = t.modalWpmDesc;
    lblModalAccuracy.innerText = t.modalAccDesc;
    lblModalCpm.innerText = t.modalCpmDesc;
    lblModalLetterStreak.innerText = t.modalLetterStreakDesc;
    lblModalWordStreak.innerText = t.modalWordStreakDesc;
    lblModalMistakes.innerText = t.modalMistakesDesc;
    lblWeakKeysTitle.innerText = t.weakKeysTitle;
    lblModalRestartBtn.innerText = t.modalRestart;

    updateAudioLabel();
    updateStreakDimensionUI();
}

// ==========================================================
// 5. WEB AUDIO SYNTHESIZER (CELESTIAL & HORROR SOUNDS)
// ==========================================================
function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playKeySound(isError = false) {
    if (!isSoundEnabled || audioVolume <= 0) return;
    initAudio();
    if (audioCtx.state === "suspended") audioCtx.resume();

    const now = audioCtx.currentTime;
    const gain = audioCtx.createGain();
    gain.connect(audioCtx.destination);

    if (isError) {
        // Suara Error Horror Thud
        const osc = audioCtx.createOscillator();
        osc.type = multiplierLevel < 0 ? "sawtooth" : "square";
        osc.frequency.setValueAtTime(
            120 - Math.min(80, Math.abs(multiplierLevel) * 8),
            now,
        );
        gain.gain.setValueAtTime(audioVolume * 0.28, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.connect(gain);
        osc.start(now);
        osc.stop(now + 0.12);
        return;
    }

    // Suara Switch Normal / Celestial
    const pitchMod =
        multiplierLevel === 10
            ? 200
            : multiplierLevel > 0
              ? multiplierLevel * 15
              : 0;

    switch (currentSwitch) {
        case "thock": {
            const osc = audioCtx.createOscillator();
            osc.type = "triangle";
            osc.frequency.setValueAtTime(
                220 + pitchMod + Math.random() * 30,
                now,
            );
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
            osc.frequency.setValueAtTime(750 + pitchMod, now);
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
            osc.frequency.setValueAtTime(
                880 + pitchMod + (charIndex % 4) * 90,
                now,
            );
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
            osc.frequency.setValueAtTime(
                650 + pitchMod + Math.random() * 120,
                now,
            );
            gain.gain.setValueAtTime(audioVolume * 0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);
            osc.connect(gain);
            osc.start(now);
            osc.stop(now + 0.035);
            break;
        }
    }
}

// Chime Kata Sempurna
function playWordChime() {
    if (!isSoundEnabled || audioVolume <= 0) return;
    initAudio();
    if (audioCtx.state === "suspended") audioCtx.resume();

    const now = audioCtx.currentTime;
    const frequencies =
        multiplierLevel === 10
            ? [523.25, 659.25, 783.99, 1046.5, 1318.51] // 10x Celestial Chord (Mega Harmony)
            : [523.25, 659.25, 783.99, 1046.5];

    frequencies.forEach((freq, index) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + index * 0.04);
        gain.gain.setValueAtTime(audioVolume * 0.2, now + index * 0.04);
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

// Horror Drone & Dissonance saat masuk Backrooms
function playHorrorDropSound(lvl) {
    if (!isSoundEnabled || audioVolume <= 0) return;
    initAudio();
    if (audioCtx.state === "suspended") audioCtx.resume();

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(90 - lvl * 5, now);
    osc.frequency.exponentialRampToValueAtTime(25, now + 0.45);

    gain.gain.setValueAtTime(audioVolume * (0.2 + lvl * 0.05), now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.45);
}

// Suara khusus saat multiplier berpindah satu level
function playStreakLevelSound(newLevel, oldLevel) {
    if (!isSoundEnabled || audioVolume <= 0 || newLevel === oldLevel) return;
    initAudio();
    if (audioCtx.state === "suspended") audioCtx.resume();

    const now = audioCtx.currentTime;

    if (newLevel > oldLevel) {
        const base = 300 + Math.max(1, newLevel) * 42;
        [1, 1.25, 1.5].forEach((ratio, index) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = index === 2 ? "triangle" : "sine";
            osc.frequency.setValueAtTime(base * ratio, now + index * 0.055);
            gain.gain.setValueAtTime(audioVolume * 0.2, now + index * 0.055);
            gain.gain.exponentialRampToValueAtTime(
                0.001,
                now + index * 0.055 + 0.22,
            );
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now + index * 0.055);
            osc.stop(now + index * 0.055 + 0.22);
        });
    } else {
        const depth = Math.min(10, Math.abs(newLevel));
        [0, 0.08].forEach((delay, index) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = index === 0 ? "sawtooth" : "triangle";
            osc.frequency.setValueAtTime(170 - depth * 7, now + delay);
            osc.frequency.exponentialRampToValueAtTime(
                Math.max(38, 92 - depth * 5),
                now + delay + 0.28,
            );
            gain.gain.setValueAtTime(audioVolume * 0.18, now + delay);
            gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.3);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now + delay);
            osc.stop(now + delay + 0.3);
        });
    }
}

function playVictorySound() {
    if (!isSoundEnabled || audioVolume <= 0) return;
    initAudio();
    if (audioCtx.state === "suspended") audioCtx.resume();

    const now = audioCtx.currentTime;
    const melody = [523.25, 659.25, 783.99, 1046.5, 1318.51];

    melody.forEach((frequency, index) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = index < 3 ? "triangle" : "sine";
        osc.frequency.setValueAtTime(frequency, now + index * 0.11);
        gain.gain.setValueAtTime(audioVolume * 0.24, now + index * 0.11);
        gain.gain.exponentialRampToValueAtTime(
            0.001,
            now + index * 0.11 + 0.65,
        );
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + index * 0.11);
        osc.stop(now + index * 0.11 + 0.65);
    });

    [261.63, 392, 523.25].forEach((frequency) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(frequency, now + 0.62);
        gain.gain.setValueAtTime(audioVolume * 0.12, now + 0.62);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.7);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + 0.62);
        osc.stop(now + 1.7);
    });
}

function playFailureSound() {
    if (!isSoundEnabled || audioVolume <= 0) return;
    initAudio();
    if (audioCtx.state === "suspended") audioCtx.resume();

    const now = audioCtx.currentTime;
    [246.94, 196, 146.83].forEach((frequency, index) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(frequency, now + index * 0.16);
        gain.gain.setValueAtTime(audioVolume * 0.2, now + index * 0.16);
        gain.gain.exponentialRampToValueAtTime(
            0.001,
            now + index * 0.16 + 0.38,
        );
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + index * 0.16);
        osc.stop(now + index * 0.16 + 0.38);
    });
}

// ==========================================================
// 6. GUNCANGAN LAYAR BERTINGKAT (DYNAMIC SHAKE)
// ==========================================================
function triggerDynamicShake(magnitude) {
    appContainer.classList.remove(
        "shake-sm",
        "shake-md",
        "shake-lg",
        "shake-extreme",
    );
    playHorrorDropSound(Math.abs(multiplierLevel));

    let shakeClass = "shake-sm";
    let duration = 200;

    if (magnitude >= 8) {
        shakeClass = "shake-extreme";
        duration = 500;
    } else if (magnitude >= 5) {
        shakeClass = "shake-lg";
        duration = 350;
    } else if (magnitude >= 3) {
        shakeClass = "shake-md";
        duration = 250;
    }

    appContainer.classList.add(shakeClass);
    setTimeout(() => appContainer.classList.remove(shakeClass), duration);
}

// ==========================================================
// 7. HIGH SCORE
// ==========================================================
function loadHighScore() {
    const modeKey = maxTime === 0 ? "zen" : maxTime;
    const saved =
        localStorage.getItem(`typesprint_high_${currentLang}_${modeKey}`) || 0;
    highScoreValueTag.innerText = saved;
    return parseInt(saved, 10);
}

function checkAndSaveHighScore(currentWpm) {
    const currentHigh = loadHighScore();
    if (currentWpm > currentHigh) {
        const modeKey = maxTime === 0 ? "zen" : maxTime;
        localStorage.setItem(
            `typesprint_high_${currentLang}_${modeKey}`,
            currentWpm,
        );
        highScoreValueTag.innerText = currentWpm;
        return true;
    }
    return false;
}

// ==========================================================
// 8. LOAD PARAGRAF
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
// 9. TIMER & METRIK
// ==========================================================
function initTimer() {
    if (maxTime > 0) {
        if (timeLeft > 0) {
            timeLeft--;
            timeLeftTag.innerText = `${timeLeft}s`;
            updateMetrics();
        } else {
            finishGame();
        }
    } else {
        timeElapsedZen++;
        timeLeftTag.innerText = `${timeElapsedZen}s`;
        updateMetrics();
    }
}

function updateMetrics() {
    const timeElapsed = maxTime > 0 ? maxTime - timeLeft : timeElapsedZen;
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
// 10. ENGINE DUAL DIMENSION (+10 CELESTIAL s/d -10 BACKROOMS)
// ==========================================================

// Naikkan Poin (Saat Ketik Benar)
function addDimensionPoints(pts = 1) {
    const previousLevel = multiplierLevel;
    streakPointsInTier += pts;

    if (streakPointsInTier >= TIER_THRESHOLD) {
        streakPointsInTier = 0;
        if (multiplierLevel < 0) {
            multiplierLevel = multiplierLevel === -1 ? 1 : multiplierLevel + 1;
        } else if (multiplierLevel < 10) {
            multiplierLevel++;
        }
    }

    if (multiplierLevel !== previousLevel) {
        playStreakLevelSound(multiplierLevel, previousLevel);
    }
    updateStreakDimensionUI();
}

// Kurangi Poin (Saat Salah Ketik / Backspace)
function deductDimensionPoints(penalty = 3) {
    const previousLevel = multiplierLevel;
    streakPointsInTier -= penalty;

    if (streakPointsInTier < 0) {
        streakPointsInTier = TIER_THRESHOLD - 2;
        if (multiplierLevel > 1) {
            multiplierLevel--;
        } else if (multiplierLevel === 1) {
            multiplierLevel = -1;
        } else if (multiplierLevel > -10) {
            multiplierLevel--;
        }
    }

    if (multiplierLevel !== previousLevel) {
        playStreakLevelSound(multiplierLevel, previousLevel);
    }
    updateStreakDimensionUI();
}

/* ==========================================================
   GALAXY CANVAS — INTENSITAS BERUBAH DARI +1 SAMPAI +10
   ========================================================== */
const celestialCanvas = document.getElementById("celestial-canvas");
const celestialCtx = celestialCanvas?.getContext("2d");

let celestialStars = [];
let celestialMeteors = [];
let celestialAnimationId = null;
let celestialCanvasActive = false;
let celestialLevel = 0;
let celestialPointer = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
};

function resizeCelestialCanvas() {
    if (!celestialCanvas || !celestialCtx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    celestialCanvas.width = Math.floor(window.innerWidth * dpr);
    celestialCanvas.height = Math.floor(window.innerHeight * dpr);
    celestialCanvas.style.width = `${window.innerWidth}px`;
    celestialCanvas.style.height = `${window.innerHeight}px`;
    celestialCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    createCelestialParticles();
}

function createCelestialParticles() {
    const starCount = Math.min(
        260,
        55 + celestialLevel * 19,
    );

    celestialStars = Array.from({ length: starCount }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * (0.8 + celestialLevel * 0.11) + 0.2,
        speed: Math.random() * (0.15 + celestialLevel * 0.035),
        alpha: Math.random() * 0.62 + 0.2,
        twinkle: Math.random() * Math.PI * 2,
        hue: 185 + Math.random() * (celestialLevel * 12),
    }));

    const meteorCount =
        celestialLevel >= 10 ? 3 :
        celestialLevel >= 8 ? 2 :
        celestialLevel >= 6 ? 1 : 0;

    celestialMeteors = Array.from(
        { length: meteorCount },
        () => createCelestialMeteor(true),
    );
}

function createCelestialMeteor(randomStart = false) {
    return {
        x: Math.random() * window.innerWidth,
        y: randomStart ? Math.random() * window.innerHeight : -120,
        speed: Math.random() * 4 + 4 + celestialLevel * 0.2,
        length: Math.random() * 75 + 55 + celestialLevel * 3,
        delay: randomStart ? Math.random() * 220 : Math.random() * 260 + 80,
    };
}

function drawCelestialCanvas() {
    if (!celestialCanvasActive || !celestialCtx) return;

    celestialCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    const strength = 0.012 + celestialLevel * 0.0038;
    const cursorShiftX =
        (celestialPointer.x - window.innerWidth / 2) * strength;
    const cursorShiftY =
        (celestialPointer.y - window.innerHeight / 2) * strength;

    celestialStars.forEach((star) => {
        star.x -= cursorShiftX * star.speed;
        star.y -= cursorShiftY * star.speed;
        star.twinkle += 0.018 + celestialLevel * 0.0015;

        if (star.x < -8) star.x = window.innerWidth + 8;
        if (star.x > window.innerWidth + 8) star.x = -8;
        if (star.y < -8) star.y = window.innerHeight + 8;
        if (star.y > window.innerHeight + 8) star.y = -8;

        const glow = Math.max(
            0.12,
            star.alpha + Math.sin(star.twinkle) * (0.08 + celestialLevel * 0.012),
        );
        celestialCtx.beginPath();
        celestialCtx.fillStyle =
            `hsla(${star.hue}, 95%, 88%, ${glow})`;
        celestialCtx.shadowColor =
            `hsla(${star.hue}, 95%, 72%, 0.8)`;
        celestialCtx.shadowBlur = star.size * (2 + celestialLevel * 0.45);
        celestialCtx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        celestialCtx.fill();
    });

    celestialCtx.shadowBlur = 0;

    celestialMeteors.forEach((meteor, index) => {
        if (meteor.delay > 0) {
            meteor.delay--;
            return;
        }

        const gradient = celestialCtx.createLinearGradient(
            meteor.x,
            meteor.y,
            meteor.x + meteor.length,
            meteor.y - meteor.length,
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.95)");
        gradient.addColorStop(0.35, "rgba(103, 232, 249, 0.7)");
        gradient.addColorStop(1, "rgba(192, 132, 252, 0)");

        celestialCtx.beginPath();
        celestialCtx.strokeStyle = gradient;
        celestialCtx.lineWidth = 1.2 + celestialLevel * 0.04;
        celestialCtx.moveTo(meteor.x, meteor.y);
        celestialCtx.lineTo(
            meteor.x + meteor.length,
            meteor.y - meteor.length,
        );
        celestialCtx.stroke();

        meteor.x -= meteor.speed;
        meteor.y += meteor.speed;

        if (
            meteor.y > window.innerHeight + meteor.length ||
            meteor.x < -meteor.length
        ) {
            celestialMeteors[index] = createCelestialMeteor();
        }
    });

    celestialAnimationId = requestAnimationFrame(drawCelestialCanvas);
}

function setCelestialCanvasLevel(level) {
    if (!celestialCanvas || !celestialCtx) return;

    const nextLevel = Math.max(0, Math.min(10, level));
    if (nextLevel === celestialLevel && celestialCanvasActive === (nextLevel > 0)) {
        return;
    }

    celestialLevel = nextLevel;

    if (nextLevel > 0) {
        if (!celestialCanvasActive) {
            celestialCanvasActive = true;
            resizeCelestialCanvas();
            drawCelestialCanvas();
        } else {
            createCelestialParticles();
        }
    } else {
        celestialCanvasActive = false;
        cancelAnimationFrame(celestialAnimationId);
        celestialAnimationId = null;
        celestialCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
}

window.addEventListener("resize", () => {
    if (celestialCanvasActive) resizeCelestialCanvas();
});

window.addEventListener("pointermove", (event) => {
    celestialPointer.x = event.clientX;
    celestialPointer.y = event.clientY;
});

/* ==========================================================
   MEGA CONFETTI — KHUSUS HASIL MENANG
   ========================================================== */
const celebrationCanvas = document.getElementById("celebration-canvas");
const celebrationCtx = celebrationCanvas?.getContext("2d");
let confettiPieces = [];
let confettiAnimationId = null;
let confettiBurstTimers = [];

const confettiColors = [
    "#67e8f9",
    "#38bdf8",
    "#a78bfa",
    "#c084fc",
    "#f472b6",
    "#fbbf24",
    "#ffffff",
];

function resizeCelebrationCanvas() {
    if (!celebrationCanvas || !celebrationCtx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    celebrationCanvas.width = Math.floor(window.innerWidth * dpr);
    celebrationCanvas.height = Math.floor(window.innerHeight * dpr);
    celebrationCanvas.style.width = `${window.innerWidth}px`;
    celebrationCanvas.style.height = `${window.innerHeight}px`;
    celebrationCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function addConfettiBurst(count, originX, originY) {
    for (let i = 0; i < count; i++) {
        const angle = -Math.PI + Math.random() * Math.PI;
        const power = Math.random() * 12 + 8;
        confettiPieces.push({
            x: originX,
            y: originY,
            vx: Math.cos(angle) * power + (Math.random() - 0.5) * 5,
            vy: Math.sin(angle) * power - Math.random() * 5,
            gravity: Math.random() * 0.12 + 0.12,
            drag: Math.random() * 0.012 + 0.982,
            width: Math.random() * 8 + 5,
            height: Math.random() * 5 + 3,
            rotation: Math.random() * Math.PI,
            spin: (Math.random() - 0.5) * 0.35,
            color: confettiColors[
                Math.floor(Math.random() * confettiColors.length)
            ],
            life: Math.random() * 130 + 150,
        });
    }
}

function animateMegaConfetti() {
    if (!celebrationCtx) return;
    celebrationCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    confettiPieces = confettiPieces.filter((piece) => piece.life > 0);
    confettiPieces.forEach((piece) => {
        piece.vx *= piece.drag;
        piece.vy += piece.gravity;
        piece.x += piece.vx;
        piece.y += piece.vy;
        piece.rotation += piece.spin;
        piece.life--;

        celebrationCtx.save();
        celebrationCtx.translate(piece.x, piece.y);
        celebrationCtx.rotate(piece.rotation);
        celebrationCtx.globalAlpha = Math.min(1, piece.life / 45);
        celebrationCtx.fillStyle = piece.color;
        celebrationCtx.fillRect(
            -piece.width / 2,
            -piece.height / 2,
            piece.width,
            piece.height,
        );
        celebrationCtx.restore();
    });

    if (confettiPieces.length > 0) {
        confettiAnimationId = requestAnimationFrame(animateMegaConfetti);
    } else {
        celebrationCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        confettiAnimationId = null;
    }
}

function stopMegaConfetti() {
    confettiBurstTimers.forEach(clearTimeout);
    confettiBurstTimers = [];
    cancelAnimationFrame(confettiAnimationId);
    confettiAnimationId = null;
    confettiPieces = [];
    celebrationCtx?.clearRect(0, 0, window.innerWidth, window.innerHeight);
}

function launchMegaConfetti() {
    if (!celebrationCanvas || !celebrationCtx) return;
    stopMegaConfetti();
    resizeCelebrationCanvas();

    const bursts = [
        { delay: 0, count: 240, x: 0.05, y: 0.82 },
        { delay: 320, count: 220, x: 0.95, y: 0.82 },
        { delay: 650, count: 200, x: 0.5, y: 0.72 },
        { delay: 980, count: 180, x: 0.25, y: 0.35 },
        { delay: 1250, count: 180, x: 0.75, y: 0.35 },
    ];

    bursts.forEach((burst) => {
        const timerId = setTimeout(() => {
            addConfettiBurst(
                burst.count,
                window.innerWidth * burst.x,
                window.innerHeight * burst.y,
            );
            if (!confettiAnimationId) animateMegaConfetti();
        }, burst.delay);
        confettiBurstTimers.push(timerId);
    });
}

window.addEventListener("resize", () => {
    if (confettiPieces.length > 0) resizeCelebrationCanvas();
});

function updateStreakDimensionUI() {
    letterStreakVal.innerText = letterStreak;
    wordStreakVal.innerText = wordStreak;

    const t = i18n[currentLang];

    // Bersihkan dimensi sebelumnya agar animasi tidak menumpuk.
    bodyRoot.className = "";
    setCelestialCanvasLevel(0);
    appContainer.classList.remove("celestial-10x-mode", "backrooms-corrupted");
    comboBar.classList.remove("bar-horror");

    // SISI POSITIF: background dan intensitas berubah pada SETIAP +1.
    if (multiplierLevel > 0) {
        letterStreakIcon.innerText = "🔤";
        wordStreakIcon.innerText = "📖";
        comboMultiplierTag.className =
            `multiplier-pill tier-pos-${multiplierLevel}`;

        bodyRoot.classList.add(`streak-pos-${multiplierLevel}`);
        setCelestialCanvasLevel(multiplierLevel);

        if (multiplierLevel === 10) {
            comboMultiplierTag.innerText = t.celestial10x;
            bodyRoot.classList.add("mode-celestial");
            appContainer.classList.add("celestial-10x-mode");
            comboBar.style.width = "100%";
        } else {
            comboMultiplierTag.innerText =
                `${multiplierLevel}x ${t.multiplier}`;
            const percent = Math.min(
                100,
                (streakPointsInTier / TIER_THRESHOLD) * 100,
            );
            comboBar.style.width = `${percent}%`;
        }
    }
    // 3. SISI NEGATIF BACKROOMS (-1 s/d -10)
    else {
        const horrorLvl = Math.abs(multiplierLevel);
        letterStreakIcon.innerText = "💀";
        wordStreakIcon.innerText = "🩸";
        comboMultiplierTag.className = `multiplier-pill tier-neg-${horrorLvl}`;
        comboMultiplierTag.innerText = `-${horrorLvl}x ${t.backrooms} LVL ${horrorLvl}`;

        // Pasang kelas background Backrooms (setiap 1 level -1, -2, ... -10)
        bodyRoot.classList.add(`backrooms-lvl-${horrorLvl}`);
        appContainer.classList.add("backrooms-corrupted");
        comboBar.classList.add("bar-horror");

        const percent = Math.min(
            100,
            ((TIER_THRESHOLD - streakPointsInTier) / TIER_THRESHOLD) * 100,
        );
        comboBar.style.width = `${percent}%`;
    }
}

function spawnCharSparkle(targetElement) {
    if (!targetElement) return;
    const rect = targetElement.getBoundingClientRect();
    const boxRect = typingBox.getBoundingClientRect();

    const sparkle = document.createElement("span");
    sparkle.className = "char-sparkle";
    sparkle.innerText =
        multiplierLevel > 0 ? `+${multiplierLevel}` : `${multiplierLevel}`;
    if (multiplierLevel < 0) sparkle.style.color = "#ef4444";

    sparkle.style.left = `${rect.left - boxRect.left}px`;
    sparkle.style.top = `${rect.top - boxRect.top - 14}px`;

    floatingContainer.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 600);
}

function showWordBanner(message, isHorror = false) {
    const banner = document.createElement("div");
    banner.className = `floating-word-banner ${isHorror ? "horror-banner" : ""}`;
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
// 11. LOGIKA KETIKAN UTAMA
// ==========================================================
function handleTyping() {
    const characters = textDisplay.querySelectorAll(".char");
    const typedValue = inputField.value.split("");
    const currentTypedChar = typedValue[charIndex];

    if (!isTyping) {
        timer = setInterval(initTimer, 1000);
        isTyping = true;
    }

    // Backspace Ditekan
    if (typedValue.length < charIndex) {
        if (charIndex > 0) {
            charIndex--;
            if (characters[charIndex].classList.contains("incorrect")) {
                mistakes--;
            }
            characters[charIndex].classList.remove("correct", "incorrect");
            playKeySound(false);

            letterStreak = Math.max(0, letterStreak - 1);
            currentWordHadMistake = true;
            deductDimensionPoints(2); // Kurangi poin streak
        }
    }
    // Karakter Baru Diketik
    else if (charIndex < characters.length) {
        const expectedChar = characters[charIndex].getAttribute("data-char");

        if (currentTypedChar === expectedChar) {
            characters[charIndex].classList.add("correct");
            characters[charIndex].classList.remove("incorrect");
            playKeySound(false);

            spawnCharSparkle(characters[charIndex]);

            letterStreak++;
            if (letterStreak > maxLetterStreak) maxLetterStreak = letterStreak;
            addDimensionPoints(1); // Tambah poin positif

            const isSpace = expectedChar === " ";
            const isLastChar = charIndex === characters.length - 1;

            if (isSpace || isLastChar) {
                const wordEndIndex = isLastChar ? charIndex : charIndex - 1;

                if (!currentWordHadMistake) {
                    wordStreak++;
                    if (wordStreak > maxWordStreak) maxWordStreak = wordStreak;

                    playWordChime();
                    highlightCompletedWord(currentWordStartIndex, wordEndIndex);
                    addDimensionPoints(4); // Bonus besar untuk kata sempurna

                    const banners = i18n[currentLang].banners;
                    if (multiplierLevel === 10)
                        showWordBanner(banners.celestial);
                    else if (multiplierLevel >= 6)
                        showWordBanner(`${banners.superCombo} (${wordStreak})`);
                    else showWordBanner(banners.perfectWord);
                } else {
                    wordStreak = Math.max(0, wordStreak - 1);
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

            // Guncangkan Layar Sesuai Tingkat Ketegangan
            const shakeIntensity =
                multiplierLevel < 0
                    ? Math.abs(multiplierLevel)
                    : multiplierLevel;
            triggerDynamicShake(shakeIntensity);

            currentWordHadMistake = true;
            letterStreak = Math.max(0, letterStreak - 3);
            wordStreak = Math.max(0, wordStreak - 1);

            // KURANGI POIN DAN TURUNKAN TIER (MENUJU BACKROOMS JIKA BERLANJUT)
            deductDimensionPoints(4);

            if (multiplierLevel < 0) {
                const banners = i18n[currentLang].banners;
                showWordBanner(
                    `${banners.horrorCurse} LVL ${Math.abs(multiplierLevel)}`,
                    true,
                );
            }
        }

        charIndex++;
    }

    removeActiveCursor();
    if (charIndex < characters.length) {
        characters[charIndex].classList.add("active");
    } else if (charIndex >= characters.length) {
        finishGame();
    }

    updateMetrics();
}

// ==========================================================
// 12. GAME OVER
// ==========================================================
function finishGame() {
    clearInterval(timer);
    inputField.disabled = true;
    removeActiveCursor();

    const finalStats = updateMetrics();
    const isNewRecord = checkAndSaveHighScore(finalStats.wpm);
    const t = i18n[currentLang];

    // Menang jika pemain benar-benar mengetik dan akurasi minimal 80%.
    const isWinner = charIndex > 0 && finalStats.accuracy >= 80;

    let rankObj = t.ranks.beginner;
    if (finalStats.wpm >= 90) rankObj = t.ranks.godlike;
    else if (finalStats.wpm >= 70) rankObj = t.ranks.master;
    else if (finalStats.wpm >= 50) rankObj = t.ranks.pro;
    else if (finalStats.wpm >= 30) rankObj = t.ranks.intermediate;

    let msg = rankObj.msg;
    if (isNewRecord && finalStats.wpm > 0) {
        msg += ` ${t.newRecord}`;
    }

    modalWpm.innerText = finalStats.wpm;
    modalAccuracy.innerText = `${finalStats.accuracy}%`;
    modalCpm.innerText = finalStats.cpm;
    modalLetterStreak.innerText = maxLetterStreak;
    modalWordStreak.innerText = maxWordStreak;
    modalMistakes.innerText = mistakes;
    modalRankTitle.innerText = rankObj.title;
    modalMessage.innerText = msg;

    const sortedErrors = Object.entries(errorKeyMap).sort(
        (a, b) => b[1] - a[1],
    );
    if (sortedErrors.length > 0) {
        weakKeysList.innerHTML = "";
        sortedErrors.slice(0, 4).forEach(([char, count]) => {
            const displayChar = char === " " ? "SPACE" : char.toUpperCase();
            const tag = document.createElement("span");
            tag.className = "weak-key-tag";
            tag.innerText = `${displayChar} (${count}x)`;
            weakKeysList.appendChild(tag);
        });
    } else {
        weakKeysList.innerHTML = t.weakKeysClean;
    }

    resultModal.classList.remove("result-win", "result-fail");
    resultModal.classList.add(
        "show",
        isWinner ? "result-win" : "result-fail",
    );
    rankBadge.innerText = isWinner
        ? currentLang === "id"
            ? "🏆 MENANG!"
            : "🏆 VICTORY!"
        : currentLang === "id"
          ? "💫 COBA LAGI"
          : "💫 TRY AGAIN";

    if (isWinner) {
        playVictorySound();
        launchMegaConfetti();
    } else {
        playFailureSound();
    }
}

// ==========================================================
// 13. RESET GAME
// ==========================================================
function resetGame() {
    clearInterval(timer);
    resultModal.classList.remove("show", "result-win", "result-fail");
    stopMegaConfetti();

    timeLeft = maxTime;
    timeElapsedZen = 0;
    charIndex = 0;
    mistakes = 0;
    isTyping = false;
    timer = null;
    letterStreak = 0;
    maxLetterStreak = 0;
    wordStreak = 0;
    maxWordStreak = 0;
    multiplierLevel = 1;
    streakPointsInTier = 0;
    currentWordHadMistake = false;
    currentWordStartIndex = 0;
    errorKeyMap = {};

    bodyRoot.className = "";
    appContainer.className = "container";
    inputField.disabled = false;
    inputField.value = "";
    floatingContainer.innerHTML = "";

    const t = i18n[currentLang];
    lblTimeStat.innerText = maxTime === 0 ? t.timeElapsed : t.timeLeft;
    timeLeftTag.innerText = maxTime === 0 ? "0s" : `${maxTime}s`;
    wpmTag.innerText = "0";
    cpmTag.innerText = "0";
    accuracyTag.innerText = "100%";
    mistakesTag.innerText = "0";

    updateStreakDimensionUI();
    loadHighScore();
    loadParagraph();
}

// ==========================================================
// 14. EVENT LISTENERS
// ==========================================================
inputField.addEventListener("input", handleTyping);
typingBox.addEventListener("click", () => inputField.focus());

restartBtn.addEventListener("click", resetGame);
modalRestartBtn.addEventListener("click", resetGame);

langBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        langBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const lang = btn.getAttribute("data-lang");
        applyLanguage(lang);
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
applyLanguage("id");
loadHighScore();
loadParagraph();
