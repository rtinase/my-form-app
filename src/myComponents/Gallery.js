import React from 'react';
import './Gallery.css';

const springImageContext = require.context('../photos/spring', true, /\.jpg$/);
const summerImageContext = require.context('../photos/summer', true, /\.jpg$/);
const autumnImageContext = require.context('../photos/autumn', true, /\.jpg$/);
const winterImageContext = require.context('../photos/winter', true, /\.jpg$/);

function Gallery({ selectedSeasons, searchQuery }) {
  let imageContexts = {
    spring: springImageContext,
    summer: summerImageContext,
    autumn: autumnImageContext,
    winter: winterImageContext,
  };

  // Check if any season is selected
  const isAnySeasonSelected = Object.values(selectedSeasons).some(value => value);

  const images = Object.keys(imageContexts).flatMap((season) => {
    // Include the images from the season only if it's selected or if no season is selected
    if (!isAnySeasonSelected || selectedSeasons[season]) {
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
        <div key={image.key} className='image-container'>
          <img src={image.src} alt={image.alt} className="image" /> 
          <p className='image-name'>{image.src.substring(image.src.lastIndexOf('/')).split('.')[0].slice(1)}</p> 
        </div>
      ))}
    </div>
  );
}

export default Gallery;