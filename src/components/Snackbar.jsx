import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function Snackbar({ message, show, onClose, duration = 2000 }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  return (
    <div className={`snackbar${show ? ' show' : ''}`}>{message}</div>
  );
}

Snackbar.propTypes = {
  message: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  duration: PropTypes.number,
};

export default Snackbar; 