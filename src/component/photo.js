// PhotoModal.js
import React from 'react';

function PhotoModal({ image, closeModal }) {
  return (
    <div className="photo-modal">
      <div className="modal-content">
        <img src={image.src} alt={image.title} />
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default PhotoModal;
