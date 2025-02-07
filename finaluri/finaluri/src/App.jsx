import { useState } from 'react';
import './App.css';
import book from './assets/book.png';
import path3 from './assets/Path 3.png';
import searchIcon from './assets/search.png';
import soundIcon from './assets/Group 4.png';
import emojiIcon from './assets/emoji.png';

function App() {
  const [selectedFont, setSelectedFont] = useState('sans-serif');
  const [showOptions, setShowOptions] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [noResults, setNoResults] = useState(false);
  const [inputError, setInputError] = useState(false);

  const handleFontChange = (fontName, cssFont) => {
    setSelectedFont(fontName);
    document.documentElement.style.setProperty('--global-font', cssFont);
    setShowOptions(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', darkMode ? 'light' : 'dark');
  };

  const handleSearch = async (event) => {
    setSearchQuery(event.target.value);
    setInputError(event.target.value.trim().length === 0);
    
    if (event.target.value.trim().length === 0) {
      setSearchResults(null);
      setNoResults(false);
      return;
    }

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${event.target.value}`);
      if (!response.ok) throw new Error('Word not found');
      const data = await response.json();
      setSearchResults(data);
      setNoResults(false);
    } catch (error) {
      setSearchResults(null);
      setNoResults(true);
      console.error("Error fetching data:", error.message);
    }
  };

  const playSound = (audioUrl) => {
    if (audioUrl) {
      new Audio(audioUrl).play();
    }
  };

  return (
    <>
      <div className="top-container">
        <img src={book} alt="Book" className="top-image" />

        <div className="right-controls">
          <div className="font-selector">
            <span className="selected-font">{selectedFont}</span>
            <button className="font-button" onClick={() => setShowOptions(!showOptions)}>
              <img src={path3} alt="Font Selector" className="path-icon" />
            </button>

            {showOptions && (
              <div className="dropdown">
                <div onClick={() => handleFontChange('Sans Serif', 'sans-serif')}>Sans Serif</div>
                <div onClick={() => handleFontChange('Serif', 'serif')}>Serif</div>
                <div onClick={() => handleFontChange('Mono', 'monospace')}>Mono</div>
              </div>
            )}
          </div>

          <div className="toggle-container" onClick={toggleDarkMode}>
            <div className={`toggle-circle ${darkMode ? 'dark' : ''}`}></div>
          </div>
        </div>
      </div>
      <div className="search-container">
        <input
          type="text"
          className={inputError ? 'search-input error' : 'search-input'}
          placeholder="Search for a word..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <img src={searchIcon} alt="Search" className="search-icon" />
      </div>

      {inputError && <div className="error-message">Oops, can't be empty...</div>}

      <div className="results-container">
        {noResults && (
          <div className="no-results">
            <img src={emojiIcon} alt="No Results" className="emoji-icon" />
            <h2>No Definitions Found</h2>
            <p className="no-results-text">Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
          </div>
        )}

        {searchResults && (
          <div className="search-results">
            <h1 className="word-title">{searchResults[0].word}</h1>
            <p className="phonetic">{searchResults[0].phonetics[0]?.text || ''}</p>
            <img
              src={soundIcon}
              alt="Play Sound"
              className="sound-icon"
              onClick={() => playSound(searchResults[0].phonetics[0]?.audio)}
            />

            {searchResults[0].meanings.map((meaning, index) => (
              <div key={index} className="meaning-section">
                <h2 className="part-of-speech">{meaning.partOfSpeech}</h2>
                <hr className="separator" />
                <h3 className="meaning-title">Meaning</h3>
                <ul className="meaning-list">
                  {meaning.definitions.map((def, i) => (
                    <li key={i}>{def.definition}</li>
                  ))}
                </ul>

                {meaning.synonyms.length > 0 && (
                  <>
                    <h3 className="synonyms-title">Synonyms</h3>
                    <p className="synonyms">{meaning.synonyms.join(', ')}</p>
                  </>
                )}
              </div>
            ))}
            <hr className="separator" />
            <p className="source">Source: https://en.wiktionary.org/wiki/</p>
          </div>
        )}

        {!searchResults && !noResults && (
          <div className="placeholder">Enter a word to search...</div>
        )}
      </div>
    </>
  );
}

export default App;
