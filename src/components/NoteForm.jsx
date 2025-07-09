import React, { useState } from 'react';
import PropTypes from 'prop-types';

function NoteForm({ onSubmit, initialData }) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [body, setBody] = useState(initialData?.body || '');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      setError('Judul dan isi catatan wajib diisi!');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      onSubmit({ title: title.trim(), body: body.trim() });
      setLoading(false);
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Judul</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={50}
          required
          placeholder="Judul catatan (maks 50 karakter)"
        />
        <small style={{ color: '#7fbcff' }}>Maksimal 50 karakter.</small>
      </div>
      <div>
        <label>Isi Catatan</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          placeholder="Tulis isi catatan Anda di sini..."
          rows={6}
        />
        <small style={{ color: '#7fbcff' }}>Gunakan untuk ide, tugas, atau apapun!</small>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" disabled={loading}>{loading ? 'Menyimpan...' : 'Simpan'}</button>
    </form>
  );
}

NoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }),
};

export default NoteForm; 