import React from 'react';
import BoyfriendSprite from '../BoyfriendSprite';
import { sound } from '../../utils/audio';
import { personalConfig } from '../../personalization';

/**
 * SCREEN 02: BOYFRIEND DAMAGE REPORT
 * =============================================================================
 * ✏️ [PERSONAL NOTE / EDIT HERE]:
 * Damage report metrics, diagnosis punchline, and status bars can be adjusted
 * in `src/personalization.js` under `personalConfig.damageReport`!
 * =============================================================================
 */
export default function Screen02DamageReport({ onNext, onPrev }) {
  const { damageReport, girlfriendName } = personalConfig;

  const handleNext = () => {
    sound.playChime();
    onNext();
  };

  return (
    <div className="game-screen screen-damage-report animate-fade-in">
      <div className="screen-badge">
        <span>📋</span> {damageReport.subtitle}
      </div>

      <div className="parchment-card main-panel report-card">
        {/* Receipt-style perforated top */}
        <div className="receipt-perforation" />

        <header className="panel-header text-center">
          <div className="report-stamp">CONFIDENTIAL</div>
          <h2 className="pixel-title">{damageReport.title}</h2>
          <p className="pixel-subtitle">Subject: Boyfriend • Evaluator: {girlfriendName}</p>
        </header>

        {/* Boyfriend looking guilty/nervous */}
        <div className="report-character-preview">
          <BoyfriendSprite
            state="bonk"
            size={80}
            speechBubble="I can explain... maybe... 🥺"
          />
        </div>

        {/* =====================================================================
         * ✏️ [PERSONAL NOTE / EDIT HERE]:
         * The status metrics list below is pulled from `personalConfig.damageReport.metrics`.
         * You can add or rename metrics (e.g. inside jokes about late replies, teasing, etc.)
         * ===================================================================== */}
        <div className="damage-metrics-list">
          {damageReport.metrics.map((item, index) => (
            <div key={index} className={`metric-row severity-${item.severity}`}>
              <div className="metric-header">
                <span className="metric-label">{item.label}</span>
                <span className="metric-status-badge">{item.status}</span>
              </div>

              {/* 16-Bit Pixel Progress Bar */}
              <div className="pixel-meter-track">
                <div
                  className="pixel-meter-fill"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>

              {item.note && <div className="metric-note">↳ {item.note}</div>}
            </div>
          ))}
        </div>

        {/* Official Diagnosis Punchline */}
        <div className="diagnosis-box">
          <div className="diagnosis-icon">⚠️</div>
          <div className="diagnosis-text">
            <strong>OFFICIAL VERDICT:</strong>
            <p>{damageReport.diagnosis}</p>
          </div>
        </div>

        {/* Navigation Actions */}
        <div className="action-row space-between">
          <button className="pixel-button secondary-button" onClick={onPrev}>
            ◀ BACK
          </button>
          <button
            id="begin-rehab-btn"
            className="pixel-button primary-button pulse-button"
            onClick={handleNext}
          >
            {damageReport.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
