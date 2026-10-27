import React, { useMemo } from 'react';

/**
 * PixelSkyBackground
 * =============================================================================
 * Non-negotiable visual rule from the concept brief:
 * "Use one consistent pixel-art background throughout the entire website.
 * Keep the same dreamy purple-pink evening sky, crescent moon, stars and distant
 * landscape on every screen."
 * =============================================================================
 */
export default function PixelSkyBackground() {
  // Generate consistent twinkling stars
  const stars = useMemo(() => {
    return Array.from({ length: 48 }).map((_, i) => ({
      id: i,
      x: (i * 17 + 7) % 98,
      y: (i * 23 + 11) % 65,
      size: (i % 3 === 0) ? 4 : (i % 2 === 0 ? 3 : 2),
      delay: (i * 0.3) % 4,
      duration: 1.5 + ((i % 5) * 0.4),
      color: i % 4 === 0 ? '#FFB5D2' : (i % 6 === 0 ? '#C8F7DC' : '#FFF0CF')
    }));
  }, []);

  return (
    <div className="pixel-sky-container" aria-hidden="true">
      {/* Dynamic Twilight Sky Gradient */}
      <div className="pixel-sky-gradient" />

      {/* Floating Retro Pixel Clouds */}
      <div className="pixel-cloud cloud-1" />
      <div className="pixel-cloud cloud-2" />
      <div className="pixel-cloud cloud-3" />

      {/* Glowing 16-Bit Pixel Crescent Moon */}
      <div className="pixel-moon-wrapper">
        <svg
          className="pixel-moon"
          viewBox="0 0 24 24"
          width="64"
          height="64"
          shapeRendering="crispEdges"
        >
          {/* Outer glow */}
          <rect x="7" y="1" width="10" height="22" fill="#FFF0CF" opacity="0.15" />
          <rect x="3" y="5" width="18" height="14" fill="#FFF0CF" opacity="0.15" />
          
          {/* Moon body */}
          <rect x="9" y="3" width="6" height="2" fill="#FFF0CF" />
          <rect x="6" y="5" width="12" height="2" fill="#FFF0CF" />
          <rect x="4" y="7" width="14" height="2" fill="#FFF0CF" />
          <rect x="4" y="9" width="12" height="6" fill="#FFF0CF" />
          <rect x="4" y="15" width="14" height="2" fill="#FFF0CF" />
          <rect x="6" y="17" width="12" height="2" fill="#FFF0CF" />
          <rect x="9" y="19" width="6" height="2" fill="#FFF0CF" />

          {/* Crescent cutout in midnight plum */}
          <rect x="11" y="4" width="7" height="2" fill="#211D3D" />
          <rect x="12" y="6" width="7" height="2" fill="#211D3D" />
          <rect x="11" y="8" width="7" height="8" fill="#211D3D" />
          <rect x="12" y="16" width="7" height="2" fill="#211D3D" />
          <rect x="11" y="18" width="7" height="2" fill="#211D3D" />

          {/* Soft pink rim highlight */}
          <rect x="5" y="7" width="2" height="10" fill="#FFB5D2" opacity="0.6" />
        </svg>
      </div>

      {/* Twinkling Pixel Stars */}
      <div className="pixel-stars-layer">
        {stars.map((star) => (
          <span
            key={star.id}
            className="pixel-star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`
            }}
          />
        ))}
      </div>

      {/* Distant Mountain Silhouettes & Horizon */}
      <div className="pixel-horizon-layer">
        <svg
          viewBox="0 0 1200 240"
          preserveAspectRatio="none"
          className="pixel-mountain-svg"
          shapeRendering="crispEdges"
        >
          {/* Back distant ridge (plum pink) */}
          <polygon
            points="0,170 120,130 220,160 360,110 480,150 620,90 740,140 890,100 1020,150 1140,120 1200,160 1200,240 0,240"
            fill="#3F2559"
            opacity="0.85"
          />
          {/* Mid mountain ridge (deep purple) */}
          <polygon
            points="0,190 160,150 280,180 430,135 560,175 700,130 830,170 980,140 1100,185 1200,170 1200,240 0,240"
            fill="#2A1B44"
          />
          {/* Foreground pixel pines & hills (midnight plum) */}
          <polygon
            points="0,210 60,200 140,215 220,195 310,212 400,198 520,216 630,196 750,214 860,202 980,218 1080,204 1200,212 1200,240 0,240"
            fill="#211D3D"
          />
        </svg>
      </div>

      {/* Floating Gentle Pixel Hearts */}
      <div className="floating-ambient-hearts">
        <span className="ambient-heart h1">💖</span>
        <span className="ambient-heart h2">✨</span>
        <span className="ambient-heart h3">🌸</span>
        <span className="ambient-heart h4">💖</span>
        <span className="ambient-heart h5">✨</span>
      </div>
    </div>
  );
}
