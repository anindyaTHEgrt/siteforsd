import React, { useState, useEffect } from 'react';
import BoyfriendSprite from '../BoyfriendSprite';
import { sound } from '../../utils/audio';
import { personalConfig } from '../../personalization';

/**
 * SCREEN 03: THE APOLOGY BOOK
 * =============================================================================
 * ✏️ [PERSONAL NOTE / EDIT HERE]:
 * The entire sincere apology letter text is defined in `src/personalization.js`
 * under `personalConfig.apologyLetter`!
 * 
 * You can customize the recipient name, paragraphs, tone, and sign-off there.
 * =============================================================================
 */
export default function Screen03ApologyBook({ onNext, onPrev }) {
  const { apologyLetter } = personalConfig;
  const paragraphs = apologyLetter.paragraphs;

  // Typewriter / Line-by-line reveal state
  const [visibleCount, setVisibleCount] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    if (visibleCount >= paragraphs.length) return;

    const timer = setTimeout(() => {
      setVisibleCount((prev) => prev + 1);
      sound.playTypeTick();
    }, 2800); // 2.8s per line reveal for pleasant comfortable reading

    return () => clearTimeout(timer);
  }, [visibleCount, isAutoPlaying, paragraphs.length]);

  const handleSkip = () => {
    sound.playCardFlip();
    setVisibleCount(paragraphs.length);
    setIsAutoPlaying(false);
  };

  const handleToggleAuto = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const handleNext = () => {
    sound.playHeartCollect();
    onNext();
  };

  const isComplete = visibleCount >= paragraphs.length;

  return (
    <div className="game-screen screen-apology-book animate-fade-in">
      <div className="screen-badge">
        <span>📖</span> {apologyLetter.title}
      </div>

      <div className="parchment-card main-panel book-panel">
        {/* Book Ribbon & Title Header */}
        <header className="book-header">
          <div className="book-bookmark">🔖</div>
          <h2 className="pixel-title text-center">{apologyLetter.title}</h2>
          <div className="reading-controls">
            {!isComplete && (
              <>
                <button
                  className="pixel-mini-btn"
                  onClick={handleToggleAuto}
                  title={isAutoPlaying ? "Pause reveal" : "Resume reveal"}
                >
                  {isAutoPlaying ? "⏸ PAUSE" : "▶ PLAY"}
                </button>
                <button
                  className="pixel-mini-btn skip-btn"
                  onClick={handleSkip}
                  title="Read full letter immediately"
                >
                  ⏭ REVEAL ALL
                </button>
              </>
            )}
          </div>
        </header>

        {/* Companion sprite listening quietly */}
        <div className="book-companion-row">
          <BoyfriendSprite
            state={isComplete ? "apologise" : "idle"}
            size={70}
            speechBubble={isComplete ? "I mean every single word 🥺" : "Reading with you..."}
          />
        </div>

        {/* Parchment Book Scroll Body */}
        {/* =====================================================================
         * ✏️ [PERSONAL NOTE / EDIT HERE]:
         * The letter text below renders paragraph-by-paragraph from `personalConfig.apologyLetter`.
         * ===================================================================== */}
        <div className="book-page-content" tabIndex={0}>
          <div className="letter-salutation">{apologyLetter.recipient}</div>

          <div className="letter-paragraphs">
            {paragraphs.slice(0, visibleCount).map((para, idx) => (
              <p key={idx} className="letter-paragraph animate-fade-up">
                {para}
              </p>
            ))}
          </div>

          {/* Signoff shown when all lines revealed */}
          {isComplete && (
            <div className="letter-signoff animate-fade-up">
              {apologyLetter.signoff.split('\n').map((line, i) => (
                <div key={i} className="signoff-line">{line}</div>
              ))}
            </div>
          )}

          {/* Typewriter pulsing indicator while still writing */}
          {!isComplete && (
            <div className="typewriter-indicator">
              <span className="dot">.</span>
              <span className="dot">.</span>
              <span className="dot">.</span>
            </div>
          )}
        </div>

        {/* Navigation Action Buttons */}
        <div className="action-row space-between">
          <button className="pixel-button secondary-button" onClick={onPrev}>
            ◀ BACK
          </button>

          <button
            id="apology-continue-btn"
            className="pixel-button primary-button pulse-button"
            onClick={handleNext}
          >
            {apologyLetter.continueButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}
