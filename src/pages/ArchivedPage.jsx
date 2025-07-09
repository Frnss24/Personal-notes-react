import React, { useState } from 'react';
import { getNotes } from '../utils/local-data';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';

function ArchivedPage() {
  const [notes] = useState(getNotes());
  const [keyword, setKeyword] = useState('');
  const archivedNotes = notes.filter((note) => note.archived);
  const filteredNotes = archivedNotes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()));

  return (
    <div>
      <h1>Catatan Arsip</h1>
      <SearchBar keyword={keyword} onChange={setKeyword} />
      {filteredNotes.length === 0 ? (
        <p>Tidak ada catatan arsip</p>
      ) : (
        <NoteList notes={filteredNotes} />
      )}
    </div>
  );
}

export default ArchivedPage; 