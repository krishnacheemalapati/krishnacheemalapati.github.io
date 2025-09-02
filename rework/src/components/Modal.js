import React, { useEffect } from 'react';

const Modal = ({ show, onClose, children }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
    }

    return () => {
      document.body.style.overflowY = '';
    };
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div className="mfp-bg mfp-fade mfp-ready" onClick={onClose}>
      <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready" tabIndex="-1" style={{ overflow: 'hidden auto' }}>
        <div className="mfp-container mfp-inline-holder">
          <div className="mfp-content">
            <div className="popup-modal" onClick={(e) => e.stopPropagation()}>
              {children}
              <button title="Close (Esc)" type="button" className="mfp-close" onClick={onClose}>×</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
