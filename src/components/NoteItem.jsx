// src/components/NoteItem.jsx
import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/showFormattedDate';
import { archiveNote, unarchiveNote, deleteNote } from '../utils/local-data';

function NoteItem({ id, title, body, createdAt, archived }) {
  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.style.opacity = 0;
      ref.current.style.transform = 'translateY(20px)';
      setTimeout(() => {
        ref.current.style.transition = 'opacity 0.5s, transform 0.5s';
        ref.current.style.opacity = 1;
        ref.current.style.transform = 'translateY(0)';
      }, 50);
    }
  }, []);

  const handleArchive = () => {
    archiveNote(id);
    navigate(0); // reload page
  };
  const handleUnarchive = () => {
    unarchiveNote(id);
    navigate(0);
  };
  const handleDelete = () => {
    deleteNote(id);
    navigate(0);
  };

  return (
    <div ref={ref} className="note-item" style={{ border: '1px solid #ccc', padding: 16, marginBottom: 12 }}>
      <h3>
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <small>{showFormattedDate(createdAt)}</small>
      <p>{body.slice(0, 100)}...</p>
      <div style={{ marginTop: 10 }}>
        {archived ? (
          <button onClick={handleUnarchive}>Aktifkan</button>
        ) : (
          <button onClick={handleArchive}>Arsipkan</button>
        )}
        <button onClick={handleDelete} style={{ marginLeft: 10, color: 'red' }}>Hapus</button>
      </div>
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default NoteItem;
