import React from 'react';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className="gallery">
      {images.map((image) => (
        <li key={image.id} className="gallery-item">
          <img
            src={image.webformatURL}
            alt={image.id}
            onClick={() => onImageClick(image.largeImageURL)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
