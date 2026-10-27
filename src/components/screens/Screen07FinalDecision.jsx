import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import BoyfriendSprite from '../BoyfriendSprite';
import { sound } from '../../utils/audio';
import { personalConfig } from '../../personalization';

/**
 * SCREEN 07: THE FINAL DECISION
 * =============================================================================
 * ✏️ [PERSONAL NOTE / EDIT HERE]:
 * Question text, happy reaction dialogue, and sincere fallback modal content
 * can be customized in `src/personalization.js` under `personalConfig.finalDecision`!
 * =============================================================================
 */
export default function Screen07FinalDecision({ onNext, onPrev }) {
  const { finalDecision } = personalConfig;
  const { happyResponse, angryButton, sincereFallback } = finalDecision;

  const [decisionState, setDecisionState] = useState('pending'); // 'pending', 'happy', 'sincere'
  const [dodgeCount, setDodgeCount] = useState(0);
  const [dodgePos, setDodgePos] = useState({ x: 0, y: 0 });
  const [dodgeText, setDodgeText] = useState(angryButton.initialText);
  const [smokeEffect, setSmokeEffect] = useState(false);
  const [showSincereModal, setShowSincereModal] = useState(false);

  const containerRef = useRef(null);

  // Handle Happy Decision
  const handleHappy = () => {
    sound.playCelebration();
    setDecisionState('happy');

    // Grand colorful celebration confetti!
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#FFB5D2', '#FF5376', '#FFF0CF', '#C8F7DC', '#FFD166']
    });

    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }, 400);
  };

  // Playful dodging button physics
  const dodgeButton = () => {
    sound.playBonk();
    setSmokeEffect(true);

    const bounds = containerRef.current?.getBoundingClientRect();
    const maxX = bounds ? Math.min(bounds.width * 0.35, 120) : 100;
    const maxY = bounds ? Math.min(bounds.height * 0.3, 70) : 60;

    // Random new offset inside container bounds
    const newX = (Math.random() - 0.5) * maxX * 2;
    const newY = (Math.random() - 0.5) * maxY * 2;

    setDodgePos({ x: newX, y: newY });

    const phrases = angryButton.dodges;
    setDodgeText(phrases[dodgeCount % phrases.length]);
    setDodgeCount((c) => c + 1);

    setTimeout(() => {
      setSmokeEffect(false);
    }, 350);
  };

  const handleOpenSincereModal = () => {
    sound.playChime();
    setShowSincereModal(true);
  };

  const handleCloseSincereModal = () => {
    setShowSincereModal(false);
  };

  const handleProceedToBonus = () => {
    sound.playHeartCollect();
    onNext();
  };

  return (
    <div className="game-screen screen-final-decision animate-fade-in">
      <div className="screen-badge">
        <span>⚖️</span> {finalDecision.title}
      </div>

      <div className="parchment-card main-panel decision-panel" ref={containerRef}>
        <header className="panel-header text-center">
          <h2 className="pixel-title">{finalDecision.title}</h2>
          <p className="pixel-intro-quote">{finalDecision.question}</p>
        </header>

        {/* Character Reaction Stage */}
        <div className="decision-character-row">
          <BoyfriendSprite
            state={
              decisionState === 'happy'
                ? 'happy'
                : dodgeCount > 0
                ? 'bonk'
                : 'idle'
            }
            size={110}
            speechBubble={
              decisionState === 'happy'
                ? "YAAAAAY!! 🥰💖"
                : dodgeCount > 3
                ? "Please show mercy! 😭"
                : "Awaiting your judgment..."
            }
          />
        </div>

        {/* PENDING STATE: Two Interactive Buttons */}
        {decisionState === 'pending' && (
          <div className="decision-buttons-zone">
            {/* Happy Button */}
            <button
              id="happy-btn"
              className="pixel-button happy-btn pulse-button"
              onClick={handleHappy}
            >
              {happyResponse.buttonText}
            </button>

            {/* Playful Dodging Angry Button */}
            <div className="dodging-btn-wrapper">
              {smokeEffect && <div className="pixel-smoke-puff" />}
              <button
                id="angry-btn"
                className="pixel-button angry-btn runaway-button"
                style={{
                  transform: `translate(${dodgePos.x}px, ${dodgePos.y}px)`
                }}
                onMouseEnter={dodgeButton}
                onClick={dodgeButton}
                onTouchStart={dodgeButton}
              >
                {dodgeText}
              </button>
            </div>
          </div>
        )}

        {/* HAPPY STATE: Victory Celebration */}
        {decisionState === 'happy' && (
          <div className="happy-celebration-box animate-scale-up">
            <h3 className="celebration-heading">{happyResponse.heading}</h3>
            <p className="celebration-message">{happyResponse.text}</p>
            <div className="bonus-unlocked-banner">
              {happyResponse.rewardUnlocked}
            </div>

            <button
              id="view-coupons-btn"
              className="pixel-button primary-button pulse-button mt-4"
              onClick={handleProceedToBonus}
            >
              CLAIM YOUR COUPONS ➔
            </button>
          </div>
        )}

        {/* Gentle Fallback Link (Important: Always visible for genuine feelings) */}
        <div className="sincere-fallback-footer">
          <button
            className="sincere-link-button"
            onClick={handleOpenSincereModal}
          >
            {sincereFallback.triggerLinkText}
          </button>
        </div>

        {/* Navigation Action */}
        <div className="action-row space-between">
          <button className="pixel-button secondary-button" onClick={onPrev}>
            ◀ BACK
          </button>
          {decisionState === 'happy' && (
            <button
              className="pixel-button primary-button"
              onClick={handleProceedToBonus}
            >
              BONUS REWARDS ➔
            </button>
          )}
        </div>
      </div>

      {/* Sincere Listening Modal */}
      {showSincereModal && (
        <div className="modal-overlay animate-fade-in" onClick={handleCloseSincereModal}>
          <div className="modal-parchment animate-scale-up" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-heart">💜</span>
              <h3>{sincereFallback.modalTitle}</h3>
            </div>
            <div className="modal-body">
              {sincereFallback.modalBody.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="modal-footer">
              <button
                className="pixel-button primary-button"
                onClick={handleCloseSincereModal}
              >
                {sincereFallback.closeButtonText}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
