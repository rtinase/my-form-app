import React from 'react';
import './Gallery.css';

// Create a context containing all .jpg files in the photos directory
const springImageContext = require.context('../photos/spring', true, /\.jpg$/);
const summerImageContext = require.context('../photos/summer', true, /\.jpg$/);
const autumnImageContext = require.context('../photos/autumn', true, /\.jpg$/);
const winterImageContext = require.context('../photos/winter', true, /\.jpg$/);

function Gallery({ selectedSeasons }) {
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
        return <img key={image} src={imageUrl} alt={image} className="image" />;
      });
    }
    return [];
  });

  return <div className="container">{images}</div>;
}

export default Gallery;