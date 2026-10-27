import React, { useState } from 'react';
import BoyfriendSprite from '../BoyfriendSprite';
import { sound } from '../../utils/audio';
import { personalConfig } from '../../personalization';

/**
 * SCREEN 05: SAKSHI'S LITTLE LIBRARY
 * =============================================================================
 * ✏️ [PERSONAL NOTE / EDIT HERE]:
 * Book titles, chapters, funny annotations, and personal memories can be customized
 * in `src/personalization.js` under `personalConfig.library`!
 * =============================================================================
 */
export default function Screen05Library({ onNext, onPrev }) {
  const { library, girlfriendName } = personalConfig;
  const [selectedBook, setSelectedBook] = useState(library.books[0]);

  const handleSelectBook = (book) => {
    sound.playCardFlip();
    setSelectedBook(book);
  };

  const handleNext = () => {
    sound.playChime();
    onNext();
  };

  return (
    <div className="game-screen screen-library animate-fade-in">
      <div className="screen-badge">
        <span>📚</span> {library.title}
      </div>

      <div className="parchment-card main-panel library-panel">
        <header className="panel-header text-center">
          <h2 className="pixel-title">{library.title}</h2>
          <p className="pixel-subtitle">{library.subtitle}</p>
        </header>

        {/* =====================================================================
         * ✏️ [PERSONAL NOTE / EDIT HERE]:
         * The 3 interactive books below:
         * 1) "101 Ways to Annoy Your Boyfriend"
         * 2) "How to Apologise Properly"
         * 3) "The Story of Us"
         * ===================================================================== */}
        <div className="bookshelf-display">
          <div className="books-row">
            {library.books.map((book) => {
              const isSelected = selectedBook?.id === book.id;
              return (
                <button
                  key={book.id}
                  className={`book-spine-item ${isSelected ? 'active-book' : ''}`}
                  onClick={() => handleSelectBook(book)}
                  style={{ '--book-accent': book.color }}
                >
                  <div className="spine-ribbon">VOL. {book.id.slice(-1)}</div>
                  <div className="spine-title">{book.title}</div>
                  <div className="spine-bookmark">🔖</div>
                </button>
              );
            })}
          </div>
          <div className="bookshelf-wood-plank" />
        </div>

        {/* Selected Book Viewer / Opened Pages */}
        {selectedBook && (
          <div className="open-book-modal animate-scale-up" style={{ borderColor: selectedBook.color }}>
            <div className="open-book-header" style={{ backgroundColor: selectedBook.color }}>
              <div className="open-book-title">{selectedBook.title}</div>
              <div className="open-book-author">{selectedBook.author}</div>
            </div>

            <div className="open-book-body">
              <div className="book-preview-tagline">“{selectedBook.preview}”</div>

              <div className="book-pages-list">
                {selectedBook.pages.map((entry, index) => (
                  <div key={index} className="book-entry-item">
                    <span className="entry-bullet">★</span>
                    <span className="entry-text">{entry}</span>
                  </div>
                ))}
              </div>

              {/* Special interactive photo / memory frame for 'The Story of Us' */}
              {selectedBook.id === 'book-3' && (
                <div className="memory-polaroid-frame">
                  {/* =============================================================
                   * ✏️ [PERSONAL NOTE / EDIT HERE]:
                   * You can place your own photo in `public/our-photo.jpg`
                   * and replace this image source if you have a favorite picture together!
                   * ============================================================= */}
                  <div className="polaroid-photo">
                    <div className="pixel-art-couple-illustration">
                      <BoyfriendSprite state="blush" size={54} />
                      <div className="memory-heart">💖</div>
                      <div className="memory-sweetheart-icon">🌸</div>
                    </div>
                  </div>
                  <div className="polaroid-caption">Forever Sakshi & Boyfriend ✨</div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="action-row space-between">
          <button className="pixel-button secondary-button" onClick={onPrev}>
            ◀ BACK
          </button>
          <button
            id="library-continue-btn"
            className="pixel-button primary-button pulse-button"
            onClick={handleNext}
          >
            {library.continueButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}
