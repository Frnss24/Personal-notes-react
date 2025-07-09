// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddNotePage from './pages/AddNotePage';
import DetailPage from './pages/DetailPage';
import ArchivedPage from './pages/ArchivedPage';
import NotFound from './pages/NotFound';
import './styles/futuristic.css';

function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('DARK_MODE') === 'true';
  });

  useEffect(() => {
    if (dark) {
      document.body.style.background = 'linear-gradient(120deg, #181a1b 0%, #232526 100%)';
      document.body.style.color = '#f3f3f3';
    } else {
      document.body.style.background = 'linear-gradient(120deg, #232526 0%, #414345 100%)';
      document.body.style.color = '#f3f3f3';
    }
    localStorage.setItem('DARK_MODE', dark);
  }, [dark]);

  return (
    <Router>
      <nav style={{ marginBottom: 24 }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/notes/new">Tambah Catatan</Link> |{' '}
        <Link to="/archived">Arsip</Link>
        <button className="dark-toggle" onClick={() => setDark((d) => !d)}>
          {dark ? '🌙 Dark' : '☀️ Light'}
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notes/new" element={<AddNotePage />} />
        <Route path="/notes/:id" element={<DetailPage />} />
        <Route path="/archived" element={<ArchivedPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;