import React from 'react';
import './Gallery.css';

const springImageContext = require.context('../photos/spring', true, /\.jpg$/);
const summerImageContext = require.context('../photos/summer', true, /\.jpg$/);
const autumnImageContext = require.context('../photos/autumn', true, /\.jpg$/);
const winterImageContext = require.context('../photos/winter', true, /\.jpg$/);

function Gallery({ selectedSeasons, searchQuery }) {
  let imageContexts = {
    spring: selectedSeasons.spring ? springImageContext : null,
    summer: selectedSeasons.summer ? summerImageContext : null,
    autumn: selectedSeasons.autumn ? autumnImageContext : null,
    winter: selectedSeasons.winter ? winterImageContext : null,
  };

  const images = Object.keys(selectedSeasons).flatMap((season) => {
    if (imageContexts[season]) {
      return imageContexts[season].keys().map((image) => {
        const imageUrl = imageContexts[season](image);
        return { key: image, src: imageUrl, alt: image };
      });
    }
    return [];
  });

  // Filter images based on search query
  const filteredImages = images.filter((image) => image.key.includes(searchQuery));

  return (
    <div className="container">
      {filteredImages.map((image) => (
        <img key={image.key} src={image.src} alt={image.alt} className="image" />
      ))}
    </div>
  );
}

export default Gallery;