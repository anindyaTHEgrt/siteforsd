import React from 'react';

/**
 * BoyfriendSprite
 * =============================================================================
 * One reusable 16-bit pixel-art boyfriend character sprite with expressive states:
 * - 'wave': waving hand with retro sparkle
 * - 'idle': gentle breathing animation
 * - 'blush': rosy cheeks, bashful smile
 * - 'bonk': dizzy spiral eyes, sweat drop, band-aid
 * - 'apologise': dramatic teary eyes, bowed posture
 * - 'eating': munching Chupa Chups with heart eyes
 * - 'happy': celebratory arms raised with jumping animation
 * =============================================================================
 */
export default function BoyfriendSprite({
  state = 'idle',
  size = 120,
  className = '',
  speechBubble = null,
  onClick = null
}) {
  return (
    <div
      className={`pixel-boyfriend-container state-${state} ${className}`}
      style={{ width: `${size}px`, height: `${size * 1.25}px` }}
      onClick={onClick}
      role="img"
      aria-label={`Pixel boyfriend in ${state} expression`}
    >
      {/* Optional Speech Bubble above head */}
      {speechBubble && (
        <div className="boyfriend-speech-bubble pixel-speech">
          <span>{speechBubble}</span>
          <div className="speech-pointer" />
        </div>
      )}

      {/* Retro Pixel Art Character (SVG crispEdges) */}
      <svg
        viewBox="0 0 32 40"
        className="boyfriend-svg"
        shapeRendering="crispEdges"
        width="100%"
        height="100%"
      >
        {/* Shadow */}
        <ellipse cx="16" cy="38" rx="10" ry="2" fill="#211D3D" opacity="0.35" />

        {/* Hair Back / Base */}
        <rect x="9" y="3" width="14" height="12" fill="#3D2645" />
        <rect x="7" y="5" width="18" height="8" fill="#3D2645" />

        {/* Fluffy Anime Bangs & Hair Highlights */}
        <rect x="8" y="2" width="6" height="3" fill="#5E3A6E" />
        <rect x="15" y="2" width="7" height="3" fill="#5E3A6E" />
        <rect x="8" y="5" width="3" height="4" fill="#5E3A6E" />
        <rect x="21" y="5" width="3" height="4" fill="#3D2645" />
        <rect x="11" y="6" width="3" height="3" fill="#3D2645" />

        {/* Face / Skin (#FFF0CF warm parchment / skin) */}
        <rect x="10" y="7" width="12" height="11" fill="#FFE5B4" />
        <rect x="9" y="9" width="14" height="8" fill="#FFE5B4" />
        {/* Ears */}
        <rect x="8" y="11" width="1" height="3" fill="#F4D09F" />
        <rect x="23" y="11" width="1" height="3" fill="#F4D09F" />

        {/* Neck */}
        <rect x="14" y="18" width="4" height="2" fill="#F4D09F" />

        {/* Hoodie / Clothes (#FFB5D2 pink with plum trim) */}
        <rect x="9" y="20" width="14" height="12" fill="#FFB5D2" />
        <rect x="10" y="19" width="12" height="2" fill="#FF85B2" />
        <rect x="13" y="21" width="6" height="5" fill="#FFF0CF" /> {/* Hoodie strings */}
        <rect x="15" y="22" width="2" height="8" fill="#FF85B2" />

        {/* Pants (Midnight Plum #211D3D) */}
        <rect x="10" y="32" width="12" height="5" fill="#211D3D" />
        <rect x="15" y="33" width="2" height="4" fill="#151226" />

        {/* Shoes */}
        <rect x="9" y="37" width="5" height="2" fill="#FFF0CF" />
        <rect x="18" y="37" width="5" height="2" fill="#FFF0CF" />
        <rect x="9" y="38" width="5" height="1" fill="#FF85B2" />
        <rect x="18" y="38" width="5" height="1" fill="#FF85B2" />

        {/* ================= EXPRESSION VARIANTS ================= */}
        {state === 'idle' && (
          <g className="expr-idle">
            {/* Eyes */}
            <rect x="11" y="11" width="2" height="3" fill="#211D3D" />
            <rect x="19" y="11" width="2" height="3" fill="#211D3D" />
            {/* Eye highlights */}
            <rect x="11" y="11" width="1" height="1" fill="#FFFFFF" />
            <rect x="19" y="11" width="1" height="1" fill="#FFFFFF" />
            {/* Smile */}
            <rect x="14" y="15" width="4" height="1" fill="#D9658B" />
            <rect x="15" y="16" width="2" height="1" fill="#D9658B" />
            {/* Gentle blush */}
            <rect x="10" y="14" width="2" height="1" fill="#FF8FA3" opacity="0.6" />
            <rect x="20" y="14" width="2" height="1" fill="#FF8FA3" opacity="0.6" />
          </g>
        )}

        {state === 'wave' && (
          <g className="expr-wave">
            {/* Happy squint eyes */}
            <rect x="11" y="12" width="3" height="1" fill="#211D3D" />
            <rect x="12" y="11" width="2" height="1" fill="#211D3D" />
            <rect x="18" y="12" width="3" height="1" fill="#211D3D" />
            <rect x="18" y="11" width="2" height="1" fill="#211D3D" />
            {/* Cheerful grin */}
            <rect x="14" y="14" width="4" height="2" fill="#D9658B" />
            <rect x="15" y="15" width="2" height="1" fill="#FFF0CF" />
            {/* Cute rosy cheeks */}
            <rect x="10" y="13" width="3" height="2" fill="#FF6B8B" opacity="0.7" />
            <rect x="19" y="13" width="3" height="2" fill="#FF6B8B" opacity="0.7" />
            {/* Waving Arm & Hand */}
            <rect x="23" y="15" width="3" height="5" fill="#FFB5D2" className="waving-arm" />
            <rect x="24" y="13" width="3" height="3" fill="#FFE5B4" className="waving-hand" />
            {/* Sparkle */}
            <rect x="27" y="11" width="2" height="2" fill="#FFF0CF" />
            <rect x="28" y="10" width="1" height="4" fill="#FFD166" />
          </g>
        )}

        {state === 'blush' && (
          <g className="expr-blush">
            {/* Heart / Shy squint eyes */}
            <rect x="11" y="12" width="3" height="1" fill="#211D3D" />
            <rect x="18" y="12" width="3" height="1" fill="#211D3D" />
            {/* Intense blushing cheeks */}
            <rect x="10" y="13" width="4" height="2" fill="#FF5376" />
            <rect x="18" y="13" width="4" height="2" fill="#FF5376" />
            {/* Shy shy mouth */}
            <rect x="15" y="15" width="2" height="1" fill="#D9658B" />
            {/* Tiny floating blush heart */}
            <rect x="24" y="8" width="3" height="3" fill="#FF6B8B" />
            <rect x="25" y="7" width="1" height="1" fill="#FF6B8B" />
          </g>
        )}

        {state === 'bonk' && (
          <g className="expr-bonk">
            {/* Dizzy spiral eyes (X_X) */}
            <rect x="11" y="11" width="1" height="3" fill="#211D3D" />
            <rect x="13" y="11" width="1" height="3" fill="#211D3D" />
            <rect x="12" y="12" width="1" height="1" fill="#211D3D" />

            <rect x="18" y="11" width="1" height="3" fill="#211D3D" />
            <rect x="20" y="11" width="1" height="3" fill="#211D3D" />
            <rect x="19" y="12" width="1" height="1" fill="#211D3D" />

            {/* Wobbly mouth */}
            <rect x="13" y="15" width="2" height="1" fill="#211D3D" />
            <rect x="15" y="16" width="2" height="1" fill="#211D3D" />
            <rect x="17" y="15" width="2" height="1" fill="#211D3D" />

            {/* Little band-aid on forehead */}
            <rect x="13" y="8" width="6" height="2" fill="#FFF0CF" />
            <rect x="15" y="8" width="2" height="2" fill="#FF85B2" />

            {/* Dizzy stars above head */}
            <rect x="8" y="0" width="2" height="2" fill="#FFD166" />
            <rect x="22" y="1" width="2" height="2" fill="#FFD166" />
          </g>
        )}

        {state === 'apologise' && (
          <g className="expr-apologise">
            {/* Pleading puppy eyes with anime tears */}
            <rect x="11" y="11" width="3" height="3" fill="#211D3D" />
            <rect x="11" y="11" width="1" height="1" fill="#FFFFFF" />
            <rect x="18" y="11" width="3" height="3" fill="#211D3D" />
            <rect x="18" y="11" width="1" height="1" fill="#FFFFFF" />

            {/* Teardrops */}
            <rect x="9" y="13" width="2" height="3" fill="#80D9FF" />
            <rect x="21" y="13" width="2" height="3" fill="#80D9FF" />

            {/* Sad downturned mouth */}
            <rect x="15" y="16" width="2" height="1" fill="#211D3D" />
            <rect x="14" y="17" width="4" height="1" fill="#211D3D" />

            {/* Sweat drop on brow */}
            <rect x="7" y="6" width="2" height="3" fill="#80D9FF" />
          </g>
        )}

        {state === 'eating' && (
          <g className="expr-eating">
            {/* Heart eyes */}
            <rect x="11" y="11" width="3" height="2" fill="#FF6B8B" />
            <rect x="12" y="13" width="1" height="1" fill="#FF6B8B" />
            <rect x="18" y="11" width="3" height="2" fill="#FF6B8B" />
            <rect x="19" y="13" width="1" height="1" fill="#FF6B8B" />

            {/* Munching mouth */}
            <circle cx="16" cy="15" r="2" fill="#D9658B" />

            {/* Chupa Chups lollipop in hand */}
            <circle cx="21" cy="16" r="3" fill="#FF5376" />
            <circle cx="21" cy="16" r="1.5" fill="#FFF0CF" />
            <rect x="20" y="18" width="1" height="5" fill="#FFFFFF" />
          </g>
        )}

        {state === 'happy' && (
          <g className="expr-happy">
            {/* Joyful closed eyes ^^ */}
            <rect x="11" y="12" width="3" height="1" fill="#211D3D" />
            <rect x="12" y="11" width="1" height="1" fill="#211D3D" />
            <rect x="18" y="12" width="3" height="1" fill="#211D3D" />
            <rect x="19" y="11" width="1" height="1" fill="#211D3D" />

            {/* Huge wide smile */}
            <rect x="14" y="14" width="4" height="2" fill="#D9658B" />
            <rect x="15" y="15" width="2" height="1" fill="#FFFFFF" />

            {/* Cheerful blush */}
            <rect x="9" y="13" width="3" height="2" fill="#FF6B8B" />
            <rect x="20" y="13" width="3" height="2" fill="#FF6B8B" />

            {/* Raised celebration hands */}
            <rect x="6" y="17" width="3" height="4" fill="#FFB5D2" />
            <rect x="6" y="15" width="3" height="3" fill="#FFE5B4" />
            <rect x="23" y="17" width="3" height="4" fill="#FFB5D2" />
            <rect x="23" y="15" width="3" height="3" fill="#FFE5B4" />
          </g>
        )}
      </svg>
    </div>
  );
}
