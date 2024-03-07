import React from "react";
import './Gallery.css';

// Create a context containing all .jpg files in the photos directory
const imageContext = require.context('../photos', true, /\.jpg$/)

export default function Gallery(){
    const images = imageContext.keys().map((image, index) => {
        // The imageContext function returns the URL of the image
        const imageUrl = imageContext(image);
        // The image path can be used as a unique key, and in the alt attribute
        return <img key={image} src={imageUrl} alt={image} className="image"/>;
    });

    return (
        <div id="container">
            {images}
        </div>
    );
  }
