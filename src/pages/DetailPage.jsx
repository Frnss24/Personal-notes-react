import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNotes, archiveNote, unarchiveNote, deleteNote } from '../utils/local-data';
import { showFormattedDate } from '../utils/showFormattedDate';
import Snackbar from '../components/Snackbar';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = getNotes().find((n) => n.id === Number(id));
  const [snackbar, setSnackbar] = useState({ show: false, message: '' });

  if (!note) return <p>Catatan tidak ditemukan.</p>;

  const handleArchive = () => {
    archiveNote(note.id);
    setSnackbar({ show: true, message: 'Catatan diarsipkan!' });
    setTimeout(() => navigate('/'), 1200);
  };
  const handleUnarchive = () => {
    unarchiveNote(note.id);
    setSnackbar({ show: true, message: 'Catatan diaktifkan!' });
    setTimeout(() => navigate('/'), 1200);
  };
  const handleDelete = () => {
    deleteNote(note.id);
    setSnackbar({ show: true, message: 'Catatan dihapus!' });
    setTimeout(() => navigate('/'), 1200);
  };

  return (
    <div>
      <h1>{note.title}</h1>
      <small>{showFormattedDate(note.createdAt)}</small>
      <p>{note.body}</p>
      <div style={{ marginTop: 20 }}>
        {note.archived ? (
          <button onClick={handleUnarchive}>Aktifkan</button>
        ) : (
          <button onClick={handleArchive}>Arsipkan</button>
        )}
        <button onClick={handleDelete} style={{ marginLeft: 10, color: 'red' }}>Hapus</button>
      </div>
      <Snackbar message={snackbar.message} show={snackbar.show} onClose={() => setSnackbar({ ...snackbar, show: false })} />
    </div>
  );
}

export default DetailPage; 