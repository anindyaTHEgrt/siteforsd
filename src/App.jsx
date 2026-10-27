import React, { useState, useEffect } from 'react';
import PixelSkyBackground from './components/PixelSkyBackground';
import TopNavbar from './components/TopNavbar';
import Screen01Welcome from './components/screens/Screen01Welcome';
import Screen02DamageReport from './components/screens/Screen02DamageReport';
import Screen03ApologyBook from './components/screens/Screen03ApologyBook';
import Screen04ChupaChups from './components/screens/Screen04ChupaChups';
import Screen05Library from './components/screens/Screen05Library';
import Screen06Rehabilitation from './components/screens/Screen06Rehabilitation';
import Screen07FinalDecision from './components/screens/Screen07FinalDecision';
import Screen08Coupons from './components/screens/Screen08Coupons';
import './App.css';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const totalScreens = 8;
  const [showPersonalGuide, setShowPersonalGuide] = useState(false);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' && currentScreen < totalScreens) {
        setCurrentScreen((s) => s + 1);
      } else if (e.key === 'ArrowLeft' && currentScreen > 1) {
        setCurrentScreen((s) => s - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentScreen, totalScreens]);

  // Screen transition handlers
  const handleNext = () => {
    if (currentScreen < totalScreens) {
      setCurrentScreen((s) => s + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentScreen > 1) {
      setCurrentScreen((s) => s - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRestart = () => {
    setCurrentScreen(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="game-viewport">
      {/* 1. Consistent Non-Negotiable Pixel Art Evening Sky Background */}
      <PixelSkyBackground />

      {/* 2. Top Navigation Bar (Progress Dots & BGM Sound Control) */}
      <TopNavbar
        currentScreen={currentScreen}
        totalScreens={totalScreens}
        onSelectScreen={(screen) => setCurrentScreen(screen)}
      />

      {/* 3. Main Foreground Game Stage */}
      <main className="game-stage-container">
        {currentScreen === 1 && <Screen01Welcome onNext={handleNext} />}
        {currentScreen === 2 && <Screen02DamageReport onNext={handleNext} onPrev={handlePrev} />}
        {currentScreen === 3 && <Screen03ApologyBook onNext={handleNext} onPrev={handlePrev} />}
        {currentScreen === 4 && <Screen04ChupaChups onNext={handleNext} onPrev={handlePrev} />}
        {currentScreen === 5 && <Screen05Library onNext={handleNext} onPrev={handlePrev} />}
        {currentScreen === 6 && <Screen06Rehabilitation onNext={handleNext} onPrev={handlePrev} />}
        {currentScreen === 7 && <Screen07FinalDecision onNext={handleNext} onPrev={handlePrev} />}
        {currentScreen === 8 && <Screen08Coupons onPrev={handlePrev} onRestart={handleRestart} />}
      </main>

      {/* 4. Floating Personalization Helper for Boyfriend */}
      <aside className="personalization-helper-badge">
        <button
          className="helper-toggle-btn"
          onClick={() => setShowPersonalGuide(!showPersonalGuide)}
          title="How to personalize this for Sakshi"
        >
          ✏️ Personalize Guide
        </button>

        {showPersonalGuide && (
          <div className="helper-dropdown-card animate-scale-up">
            <div className="helper-header">
              <h4>✏️ How to Personalize</h4>
              <button
                className="close-helper-btn"
                onClick={() => setShowPersonalGuide(false)}
              >
                ✕
              </button>
            </div>
            <p className="helper-text">
              All messages, inside jokes, apologies, coupons, and book notes are in:
            </p>
            <code className="helper-code">src/personalization.js</code>
            <p className="helper-subtext">
              Every customizable spot has <code>// ✏️ [EDIT HERE]</code> comments!
              Open that file in WebStorm to add your own inside jokes or nicknames.
            </p>
          </div>
        )}
      </aside>

      {/* 5. Minimal Retro Footer */}
      <footer className="game-footer">
        <span>Made with 💖 for Sakshi • 16-Bit Pixel Edition</span>
      </footer>
    </div>
  );
}
