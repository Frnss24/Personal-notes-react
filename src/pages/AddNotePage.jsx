import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteForm from '../components/NoteForm';
import { addNote } from '../utils/local-data';
import Snackbar from '../components/Snackbar';

function AddNotePage() {
  const navigate = useNavigate();
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleAddNote = (data) => {
    const newNote = {
      id: +new Date(),
      title: data.title,
      body: data.body,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    addNote(newNote);
    setShowSnackbar(true);
    setTimeout(() => navigate('/'), 1200);
  };

  return (
    <div>
      <h1>Tambah Catatan Baru</h1>
      <NoteForm onSubmit={handleAddNote} />
      <Snackbar message="Catatan berhasil ditambahkan!" show={showSnackbar} onClose={() => setShowSnackbar(false)} />
    </div>
  );
}

export default AddNotePage; 