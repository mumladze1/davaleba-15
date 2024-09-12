import React, { useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';  // Correct import
import useWindowSize from './hooks/useWindowSize';      // Correct import
import './App.css';

function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const { width } = useWindowSize();

  useEffect(() => {
    // Always use light theme on mobile
    if (width < 768) {
      setTheme('light');
    } else {
      document.body.className = theme;
    }
  }, [theme, width, setTheme]);

  const toggleTheme = () => {
    if (width >= 768) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };

  return (
    <div className="App">
      <h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
      {width >= 768 && <button onClick={toggleTheme}>Toggle Theme</button>}
    </div>
  );
}

export default App;
