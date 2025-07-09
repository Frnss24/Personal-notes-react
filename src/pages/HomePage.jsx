import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getNotes } from '../utils/local-data';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';

function HomePage() {
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  useEffect(() => {
    const handleFocus = () => setNotes(getNotes());
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  const activeNotes = notes.filter((note) => !note.archived);
  const filteredNotes = activeNotes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()));

  return (
    <div>
      <h1>Catatan Aktif</h1>
      <SearchBar keyword={keyword} onChange={setKeyword} />
      <Link to="/notes/new">
        <button style={{ marginBottom: '20px' }}>+ Tambah Catatan</button>
      </Link>
      {filteredNotes.length === 0 ? (
        <p>Tidak ada catatan</p>
      ) : (
        <NoteList notes={filteredNotes} />
      )}
    </div>
  );
}

export default HomePage;
