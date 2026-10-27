/**
 * Web Audio API Chiptune Synthesizer & Sound Effects
 * 100% client-side, zero external assets required, retro 8-bit aesthetic
 */

class SoundManager {
  constructor() {
    this.ctx = null;
    this.isMuted = true; // Off by default as required ("never rely on autoplay")
    this.bgmPlaying = false;
    this.bgmTimer = null;
    this.step = 0;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleSound() {
    this.init();
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopBgm();
    } else {
      this.startBgm();
      this.playChime();
    }
    return !this.isMuted;
  }

  playTone(freq, type = 'square', duration = 0.15, gainVal = 0.1, decay = 0.1) {
    if (this.isMuted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // AudioContext could be pending user interaction
    }
  }

  // Sound Effect: Sweet high chime / button click
  playChime() {
    if (this.isMuted) return;
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'triangle', 0.18, 0.15);
      }, idx * 60);
    });
  }

  // Sound Effect: Foam Hammer Bonk
  playBonk() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    // Squeak + thump
    this.playTone(320, 'square', 0.08, 0.25);
    setTimeout(() => {
      this.playTone(180, 'sine', 0.15, 0.3);
    }, 40);
  }

  // Sound Effect: Heart Collect / Lollipop Get
  playHeartCollect() {
    if (this.isMuted) return;
    this.init();
    const notes = [440, 554.37, 659.25, 880, 1108.73];
    notes.forEach((freq, i) => {
      setTimeout(() => {
        this.playTone(freq, 'square', 0.12, 0.12);
      }, i * 50);
    });
  }

  // Sound Effect: Card Flip / Book Open
  playCardFlip() {
    if (this.isMuted) return;
    this.init();
    this.playTone(400, 'triangle', 0.06, 0.12);
    setTimeout(() => {
      this.playTone(600, 'triangle', 0.08, 0.15);
    }, 40);
  }

  // Sound Effect: Tiny typewriter tick
  playTypeTick() {
    if (this.isMuted) return;
    this.init();
    this.playTone(700 + Math.random() * 200, 'triangle', 0.03, 0.04);
  }

  // Sound Effect: Victory Celebration Fanfare
  playCelebration() {
    if (this.isMuted) return;
    this.init();
    const melody = [
      { f: 523.25, d: 120 }, // C5
      { f: 659.25, d: 120 }, // E5
      { f: 783.99, d: 120 }, // G5
      { f: 1046.5, d: 240 }, // C6
      { f: 880.0, d: 140 },  // A5
      { f: 1046.5, d: 450 }  // C6
    ];
    let time = 0;
    melody.forEach((note) => {
      setTimeout(() => {
        this.playTone(note.f, 'square', note.d / 1000, 0.2);
      }, time);
      time += note.d + 30;
    });
  }

  // Gentle 8-bit sweet background melodic loop
  startBgm() {
    if (this.bgmPlaying || this.isMuted) return;
    this.bgmPlaying = true;
    this.step = 0;

    // Sweet nostalgic pentatonic lullaby sequence
    const notes = [
      329.63, 392.00, 440.00, 523.25,
      440.00, 392.00, 329.63, 293.66,
      329.63, 392.00, 523.25, 659.25,
      523.25, 440.00, 392.00, 329.63
    ];

    const playStep = () => {
      if (!this.bgmPlaying || this.isMuted) return;
      const freq = notes[this.step % notes.length];
      this.playTone(freq, 'triangle', 0.28, 0.07);
      
      // Gentle bass pulse every 4 notes
      if (this.step % 4 === 0) {
        this.playTone(freq / 2, 'sine', 0.35, 0.08);
      }

      this.step++;
      this.bgmTimer = setTimeout(playStep, 340);
    };

    playStep();
  }

  stopBgm() {
    this.bgmPlaying = false;
    if (this.bgmTimer) {
      clearTimeout(this.bgmTimer);
      this.bgmTimer = null;
    }
  }
}

export const sound = new SoundManager();
