import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import BoyfriendSprite from '../BoyfriendSprite';
import { sound } from '../../utils/audio';
import { personalConfig } from '../../personalization';

/**
 * SCREEN 08: MAKE-IT-UP-TO-YOU COUPONS (BONUS COLLECTIBLE CARDS)
 * =============================================================================
 * ✏️ [PERSONAL NOTE / EDIT HERE]:
 * All coupons, titles, promises, and icons can be customized in
 * `src/personalization.js` under `personalConfig.coupons`!
 * =============================================================================
 */
export default function Screen08Coupons({ onPrev, onRestart }) {
  const { coupons, girlfriendName, boyfriendSignoff } = personalConfig;
  const [redeemed, setRedeemed] = useState({});
  const [flippedCards, setFlippedCards] = useState({});

  const handleFlip = (id) => {
    sound.playCardFlip();
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleRedeem = (e, id) => {
    e.stopPropagation();
    sound.playHeartCollect();
    setRedeemed((prev) => ({
      ...prev,
      [id]: true
    }));

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#FFB5D2', '#FFD166', '#C8F7DC']
    });
  };

  return (
    <div className="game-screen screen-coupons animate-fade-in">
      <div className="screen-badge">
        <span>🎟️</span> BONUS REWARD // COLLECTIBLE CARDS
      </div>

      <div className="parchment-card main-panel coupons-panel">
        <header className="panel-header text-center">
          <div className="gold-stamp">OFFICIAL GUARANTEE</div>
          <h2 className="pixel-title">Make-It-Up-To-You Coupons</h2>
          <p className="pixel-subtitle">
            Click any coupon to flip & inspect its promise. Valid forever with zero expiry.
          </p>
        </header>

        {/* 5 Collectible Cards Grid */}
        <div className="coupons-grid">
          {coupons.map((coupon) => {
            const isFlipped = flippedCards[coupon.id];
            const isClaimed = redeemed[coupon.id];

            return (
              <div
                key={coupon.id}
                className={`coupon-card-wrapper ${isFlipped ? 'flipped' : ''} ${isClaimed ? 'claimed' : ''}`}
                onClick={() => handleFlip(coupon.id)}
              >
                <div className="coupon-card-inner">
                  {/* FRONT: Collectible Ticket Aesthetic */}
                  <div className="coupon-front">
                    <div className="coupon-tag">{coupon.tag}</div>
                    <div className="coupon-icon">{coupon.icon}</div>
                    <div className="coupon-title">{coupon.title}</div>
                    <div className="coupon-flip-hint">↺ TAP TO FLIP</div>
                  </div>

                  {/* BACK: Detailed Promise & Claim Stamp */}
                  <div className="coupon-back">
                    <div className="coupon-back-title">{coupon.title}</div>
                    <p className="coupon-desc">{coupon.description}</p>
                    <div className="coupon-promise">
                      <span className="star-icon">★</span> {coupon.promise}
                    </div>

                    <div className="coupon-action-area">
                      {isClaimed ? (
                        <div className="redeemed-badge animate-scale-up">
                          ✓ REDEEMED BY {girlfriendName.toUpperCase()}
                        </div>
                      ) : (
                        <button
                          className="pixel-mini-btn claim-coupon-btn"
                          onClick={(e) => handleRedeem(e, coupon.id)}
                        >
                          STAMP / REDEEM 💖
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Note & Boyfriend Character */}
        <div className="closing-note-box">
          <BoyfriendSprite
            state="happy"
            size={70}
            speechBubble="I love you Sakshi! 💕"
          />
          <div className="closing-text">
            <p className="closing-signoff">{boyfriendSignoff}</p>
            <p className="closing-hint">
              You can take a screenshot of any redeemed card and send it to him anytime! 📸
            </p>
          </div>
        </div>

        {/* Action Row */}
        <div className="action-row space-between">
          <button className="pixel-button secondary-button" onClick={onPrev}>
            ◀ BACK
          </button>
          <button
            id="replay-mission-btn"
            className="pixel-button primary-button"
            onClick={onRestart}
          >
            ↺ REPLAY MISSION
          </button>
        </div>
      </div>
    </div>
  );
}
