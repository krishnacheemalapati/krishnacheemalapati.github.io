import React from 'react';

const Project = ({ logoSrc, title, type, modal, onOpenModal, gridArea }) => {
  const handleImageLoad = (e) => {
    const img = e.target;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0);
    
    // Get color from top row
    const imageData = ctx.getImageData(0, 0, canvas.width, 1);
    const data = imageData.data;
    const r = data[0], g = data[1], b = data[2];
    const color = `rgb(${r}, ${g}, ${b})`;
    
    img.parentElement.style.backgroundColor = color;
  };

  return (
    <div className="bgrid folio-item" data-area={gridArea}>
      <div className="item-wrap">
        <img src={logoSrc} alt={title} onLoad={handleImageLoad} />
        <a href="#" className="overlay" onClick={(e) => { e.preventDefault(); onOpenModal(modal); }}>
          <div className="folio-item-table">
            <div className="folio-item-cell">
              <h3 className="folio-title">{title}</h3>
              <span className="folio-types">
                {type}
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;
