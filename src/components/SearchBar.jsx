import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ keyword, onChange }) {
  return (
    <input
      type="text"
      placeholder="Cari judul catatan..."
      value={keyword}
      onChange={(e) => onChange(e.target.value)}
      style={{ marginBottom: '20px', width: '100%', padding: '12px', fontSize: '1rem', borderRadius: '10px', border: '1.5px solid #3a7bd5' }}
    />
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar; 