import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import BoyfriendSprite from '../BoyfriendSprite';
import { sound } from '../../utils/audio';
import { personalConfig } from '../../personalization';

/**
 * SCREEN 04: THE CHUPA CHUPS OFFERING
 * =============================================================================
 * ✏️ [PERSONAL NOTE / EDIT HERE]:
 * Tribute text, coupon details, and flavor can be customized in
 * `src/personalization.js` under `personalConfig.chupaChups`!
 * =============================================================================
 */
export default function Screen04ChupaChups({ onNext, onPrev }) {
  const { chupaChups } = personalConfig;
  const [isCollected, setIsCollected] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCollect = () => {
    if (isCollected) return;
    setIsCollected(true);
    sound.playHeartCollect();

    // Trigger sweet strawberry confetti burst
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFB5D2', '#FF5376', '#FFF0CF', '#C8F7DC']
    });
  };

  const handleCopyVoucher = () => {
    sound.playChime();
    navigator.clipboard?.writeText(
      `[TRIBUTE CLAIM] ${chupaChups.couponTitle} - Code: ${chupaChups.couponCode} (${chupaChups.couponDescription})`
    );
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleNext = () => {
    sound.playChime();
    onNext();
  };

  return (
    <div className="game-screen screen-chupa-chups animate-fade-in">
      <div className="screen-badge">
        <span>🍭</span> {chupaChups.title}
      </div>

      <div className="parchment-card main-panel chupa-panel">
        <header className="panel-header text-center">
          <h2 className="pixel-title">{chupaChups.title}</h2>
          <p className="pixel-intro-quote">{chupaChups.introText}</p>
        </header>

        {/* Center Stage: Interactive Lollipop */}
        <div className="tribute-interactive-stage">
          {!isCollected ? (
            <div className="lollipop-pedestal" onClick={handleCollect}>
              <div className="tap-hint-pill animate-bounce">
                👆 TAP LOLLIPOP TO COLLECT
              </div>

              <div className="giant-chupa-wrapper">
                <svg
                  viewBox="0 0 48 64"
                  className="giant-chupa-svg floating-item"
                  shapeRendering="crispEdges"
                  width="130"
                  height="160"
                >
                  {/* Outer Sparkles */}
                  <rect x="6" y="8" width="4" height="4" fill="#FFD166" />
                  <rect x="38" y="12" width="4" height="4" fill="#FFD166" />
                  <rect x="8" y="32" width="3" height="3" fill="#FFF0CF" />

                  {/* Stick */}
                  <rect x="22" y="28" width="4" height="34" fill="#FFFFFF" />
                  <rect x="24" y="28" width="2" height="34" fill="#E2E2E2" />

                  {/* Lollipop Wrapper Bulb (Classic Strawberry Red) */}
                  <rect x="14" y="6" width="20" height="24" fill="#FF4365" />
                  <rect x="10" y="10" width="28" height="16" fill="#FF4365" />
                  <rect x="8" y="14" width="32" height="8" fill="#FF4365" />

                  {/* Gold Daisy Rosette Flower Motif (Signature Chupa Chups) */}
                  <rect x="18" y="12" width="12" height="12" fill="#FFD166" />
                  <rect x="16" y="14" width="16" height="8" fill="#FFD166" />

                  {/* Red Center text block */}
                  <rect x="20" y="15" width="8" height="6" fill="#D90429" />
                  <rect x="21" y="16" width="6" height="4" fill="#FFF0CF" />

                  {/* Shine Glare */}
                  <rect x="12" y="10" width="4" height="4" fill="#FFFFFF" opacity="0.8" />
                  <rect x="16" y="8" width="6" height="2" fill="#FFFFFF" opacity="0.8" />
                </svg>
              </div>

              <p className="click-to-claim-caption">
                *Peace tribute ready for inspection*
              </p>
            </div>
          ) : (
            /* Unlocked Tribute State */
            <div className="unlocked-tribute-box animate-scale-up">
              <div className="unlocked-quote-bubble">
                <span className="quote-icon">“</span>
                {chupaChups.unlockedText}
              </div>

              {/* Real World Collectible Coupon Voucher */}
              <div className="real-world-voucher">
                <div className="voucher-ribbon">OFFICIAL TRIBUTE</div>
                <div className="voucher-body">
                  <div className="voucher-title">{chupaChups.couponTitle}</div>
                  <div className="voucher-flavor">{chupaChups.flavor}</div>
                  <div className="voucher-desc">{chupaChups.couponDescription}</div>

                  <div className="voucher-code-box">
                    <span className="code-label">VOUCHER CODE:</span>
                    <span className="code-value">{chupaChups.couponCode}</span>
                  </div>

                  {/* Barcode graphic */}
                  <div className="pixel-barcode" aria-hidden="true">
                    ||| | |||| | || |||| | ||| || |||| |
                  </div>

                  <button
                    className="pixel-mini-btn copy-btn"
                    onClick={handleCopyVoucher}
                  >
                    {copiedCode ? "✓ CLAIM COPIED TO CLIPBOARD!" : "📋 COPY CLAIM VOUCHER"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Companion Boyfriend reaction */}
        <div className="companion-footnote">
          <BoyfriendSprite
            state={isCollected ? "eating" : "idle"}
            size={70}
            speechBubble={isCollected ? "100% genuine tribute! 🍭" : "Please accept peace tribute..."}
          />
        </div>

        {/* Actions */}
        <div className="action-row space-between">
          <button className="pixel-button secondary-button" onClick={onPrev}>
            ◀ BACK
          </button>
          <button
            id="chupa-continue-btn"
            className={`pixel-button primary-button ${isCollected ? 'pulse-button' : ''}`}
            onClick={handleNext}
          >
            {chupaChups.claimButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}
