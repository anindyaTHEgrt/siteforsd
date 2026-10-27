import React, { useState } from 'react';
import BoyfriendSprite from '../BoyfriendSprite';
import { sound } from '../../utils/audio';
import { personalConfig } from '../../personalization';

/**
 * SCREEN 06: BOYFRIEND REHABILITATION CENTRE
 * =============================================================================
 * ✏️ [PERSONAL NOTE / EDIT HERE]:
 * Dialogue reactions for BONK, HUG, BEG, and FEED LOLLIPOP can be customized in
 * `src/personalization.js` under `personalConfig.rehabilitation.actions`!
 * =============================================================================
 */
export default function Screen06Rehabilitation({ onNext, onPrev }) {
  const { rehabilitation } = personalConfig;
  const { actions } = rehabilitation;

  // Rehabilitation state
  const [characterState, setCharacterState] = useState('idle');
  const [bubbleText, setBubbleText] = useState("Standing by for disciplinary orders... 🫡");
  const [bonkCount, setBonkCount] = useState(0);
  const [hugCount, setHugCount] = useState(0);
  const [hammerActive, setHammerActive] = useState(false);

  // Trigger Bonk Action
  const handleBonk = () => {
    sound.playBonk();
    setHammerActive(true);
    setCharacterState('bonk');
    setBonkCount((c) => c + 1);

    const quotes = actions.bonk.dialogue;
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setBubbleText(randomQuote);

    setTimeout(() => {
      setHammerActive(false);
    }, 400);
  };

  // Trigger Hug Action
  const handleHug = () => {
    sound.playHeartCollect();
    setCharacterState('blush');
    setHugCount((c) => c + 1);

    const quotes = actions.hug.dialogue;
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setBubbleText(randomQuote);
  };

  // Trigger Beg / Apologise Action
  const handleApologise = () => {
    sound.playChime();
    setCharacterState('apologise');

    const quotes = actions.apologise.dialogue;
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setBubbleText(randomQuote);
  };

  // Trigger Feed Lollipop Action
  const handleFeed = () => {
    sound.playHeartCollect();
    setCharacterState('eating');

    const quotes = actions.feed.dialogue;
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setBubbleText(randomQuote);
  };

  const handleNext = () => {
    sound.playChime();
    onNext();
  };

  return (
    <div className="game-screen screen-rehab animate-fade-in">
      <div className="screen-badge">
        <span>🩺</span> {rehabilitation.title}
      </div>

      <div className="parchment-card main-panel rehab-panel">
        <header className="panel-header text-center">
          <h2 className="pixel-title">{rehabilitation.title}</h2>
          <p className="pixel-subtitle">{rehabilitation.instruction}</p>
        </header>

        {/* Rehab Center Stage */}
        <div className="rehab-stage-container">
          {/* Animated Foam Hammer overlay */}
          {hammerActive && (
            <div className="foam-hammer-anim">
              <svg viewBox="0 0 48 48" width="64" height="64" shapeRendering="crispEdges">
                {/* Hammer head */}
                <rect x="18" y="4" width="22" height="14" fill="#FF5376" />
                <rect x="16" y="6" width="26" height="10" fill="#FF5376" />
                <rect x="20" y="8" width="18" height="6" fill="#FFF0CF" />
                {/* Wooden handle */}
                <rect x="10" y="16" width="12" height="6" fill="#C68B59" />
                <rect x="4" y="20" width="10" height="6" fill="#A26740" />
              </svg>
            </div>
          )}

          {/* Interactive Boyfriend Sprite */}
          <div className="stage-sprite-wrapper">
            <BoyfriendSprite
              state={characterState}
              size={120}
              speechBubble={bubbleText}
            />
          </div>

          {/* Activity counters */}
          <div className="rehab-counters-row">
            <span className="counter-badge">🔨 Bonks: {bonkCount}</span>
            <span className="counter-badge">🤗 Hugs: {hugCount}</span>
          </div>
        </div>

        {/* 4 Interactive Disciplinary / Affection Buttons */}
        <div className="rehab-buttons-grid">
          <button
            className="pixel-button action-btn-bonk"
            onClick={handleBonk}
            title={actions.bonk.description}
          >
            {actions.bonk.label}
          </button>

          <button
            className="pixel-button action-btn-hug"
            onClick={handleHug}
            title={actions.hug.description}
          >
            {actions.hug.label}
          </button>

          <button
            className="pixel-button action-btn-beg"
            onClick={handleApologise}
            title={actions.apologise.description}
          >
            {actions.apologise.label}
          </button>

          <button
            className="pixel-button action-btn-feed"
            onClick={handleFeed}
            title={actions.feed.description}
          >
            {actions.feed.label}
          </button>
        </div>

        {/* Action Row */}
        <div className="action-row space-between">
          <button className="pixel-button secondary-button" onClick={onPrev}>
            ◀ BACK
          </button>
          <button
            id="rehab-continue-btn"
            className="pixel-button primary-button pulse-button"
            onClick={handleNext}
          >
            {rehabilitation.continueButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}
