import React, { useState } from 'react';
import { sound } from '../utils/audio';

export default function TopNavbar({ currentScreen, totalScreens, onSelectScreen }) {
  const [isMuted, setIsMuted] = useState(sound.isMuted);

  const handleToggleSound = () => {
    const isPlaying = sound.toggleSound();
    setIsMuted(!isPlaying);
  };

  const screenNames = [
    "Welcome",
    "Damage Report",
    "Apology Book",
    "Chupa Chups",
    "Library",
    "Rehab Centre",
    "Final Decision",
    "Coupons"
  ];

  return (
    <nav className="top-game-navbar">
      {/* Left: Mission Brand */}
      <div className="nav-brand">
        <span className="heart-dot animate-pulse">💖</span>
        <span className="nav-brand-text">OPERATION: MAKE SAKSHI SMILE</span>
      </div>

      {/* Center: Stage Progress Tracker (1 - 8) */}
      <div className="nav-progress-dots" role="tablist" aria-label="Game stage navigation">
        {screenNames.map((name, index) => {
          const screenNumber = index + 1;
          const isActive = currentScreen === screenNumber;
          const isPassed = currentScreen > screenNumber;

          return (
            <button
              key={screenNumber}
              role="tab"
              aria-selected={isActive}
              className={`nav-dot-btn ${isActive ? 'active' : ''} ${isPassed ? 'passed' : ''}`}
              onClick={() => {
                sound.playChime();
                onSelectScreen(screenNumber);
              }}
              title={`Stage ${screenNumber}: ${name}`}
            >
              <span className="dot-index">{screenNumber}</span>
              <span className="dot-tooltip">{name}</span>
            </button>
          );
        })}
      </div>

      {/* Right: Audio Control (Obvious Mute / Play) */}
      <div className="nav-controls">
        <button
          className={`retro-sound-btn ${!isMuted ? 'sound-on' : 'sound-off'}`}
          onClick={handleToggleSound}
          title={isMuted ? "Click to enable 8-bit chiptune BGM & effects" : "Mute audio"}
          aria-label={isMuted ? "Turn sound on" : "Mute sound"}
        >
          <span className="sound-icon">{isMuted ? "🔇" : "🔊"}</span>
          <span className="sound-label">{isMuted ? "BGM OFF" : "BGM ON"}</span>
        </button>
      </div>
    </nav>
  );
}
