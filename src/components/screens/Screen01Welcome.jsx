import React from 'react';
import BoyfriendSprite from '../BoyfriendSprite';
import { sound } from '../../utils/audio';
import { personalConfig } from '../../personalization';

/**
 * SCREEN 01: WELCOME — A VERY IMPORTANT MISSION
 * =============================================================================
 * ✏️ [PERSONAL NOTE / EDIT HERE]:
 * Dialogue, titles, and mission text can be customized in `src/personalization.js`
 * under `personalConfig.welcome` and `personalConfig.girlfriendName`!
 * =============================================================================
 */
export default function Screen01Welcome({ onNext }) {
  const { welcome, girlfriendName } = personalConfig;

  const handleStart = () => {
    sound.playChime();
    onNext();
  };

  return (
    <div className="game-screen screen-welcome animate-fade-in">
      {/* Top Mission Brief Badge */}
      <div className="screen-badge">
        <span className="badge-blink">●</span> {welcome.badge}
      </div>

      <div className="parchment-card main-panel">
        {/* Header Title with 16-bit Pixel Border */}
        <header className="panel-header">
          <h1 className="pixel-title">{welcome.title} <span className="pixel-cursor">■</span></h1>
          <p className="pixel-subtitle">{welcome.subtitle}</p>
        </header>

        {/* Character & Interactive Lollipop Stage */}
        <div className="welcome-stage">
          {/* Animated Waving Pixel Boyfriend */}
          <BoyfriendSprite
            state="wave"
            size={110}
            speechBubble={`Hey ${girlfriendName}! 💕`}
          />

          {/* Spinning Pixel Chupa Chups Lollipop */}
          <div className="spinning-lollipop-container" title="Peace tribute incoming...">
            <div className="spinning-lollipop">
              <svg viewBox="0 0 32 32" width="64" height="64" shapeRendering="crispEdges">
                {/* Stick */}
                <rect x="15" y="16" width="2" height="15" fill="#FFFFFF" />
                <rect x="16" y="16" width="1" height="15" fill="#DDD" />
                {/* Candy bulb */}
                <circle cx="16" cy="11" r="9" fill="#FF5376" />
                <circle cx="16" cy="11" r="6" fill="#FFF0CF" />
                <circle cx="16" cy="11" r="3" fill="#FF85B2" />
                {/* Swirl shine */}
                <rect x="11" y="7" width="2" height="2" fill="#FFFFFF" />
                <rect x="19" y="13" width="2" height="2" fill="#FFFFFF" />
              </svg>
            </div>
            <span className="lollipop-shadow" />
          </div>
        </div>

        {/* Dialogue Box (From Concept Brief) */}
        {/* =========================================================================
         * ✏️ [PERSONAL NOTE / EDIT HERE]:
         * The dialogue below loads from `personalConfig.welcome.dialogue`.
         * You can also edit the lines right here if you want quick changes!
         * ========================================================================= */}
        <div className="dialogue-box">
          <div className="dialogue-avatar">🎮</div>
          <div className="dialogue-content">
            {welcome.dialogue.map((line, idx) => (
              <p key={idx} className="dialogue-line">{line}</p>
            ))}
          </div>
        </div>

        {/* Action Button: START MISSION */}
        <div className="action-row">
          <button
            id="start-mission-btn"
            className="pixel-button primary-button pulse-button"
            onClick={handleStart}
          >
            {welcome.startButtonText}
          </button>
        </div>

        {/* Bottom Hint */}
        <p className="hint-caption">{welcome.hintText}</p>
      </div>
    </div>
  );
}
