import React from 'react';
import './ImageGrid.css';



const ImageGrid = ({ images }) => {


  return (
    <div className="container">
      {images.map((image, index) => (
        <div className="item" key={index}>
          <h4>{image.title}</h4>
          <p>{image.description}</p>
          <img src={image.src} alt={""} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
