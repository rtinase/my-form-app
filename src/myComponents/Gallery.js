import React from "react";
import './Gallery.css';

// Create a context containing all .jpg files in the photos directory
const springImageContext = require.context('../photos/spring', true, /\.jpg$/);
const summerImageContext = require.context('../photos/summer', true, /\.jpg$/);
const autumnImageContext = require.context('../photos/autumn', true, /\.jpg$/);
const winterImageContext = require.context('../photos/winter', true, /\.jpg$/);

export default function Gallery({ season }) {
    let imageContext;
    switch (season) {
        case 'spring':
            imageContext = springImageContext;
            break;
        case 'summer':
            imageContext = summerImageContext;
            break;
        case 'autumn':
            imageContext = autumnImageContext;
            break;
        case 'winter':
            imageContext = winterImageContext;
            break;
        default:
            imageContext = springImageContext;
    }
    const images = imageContext.keys().map((image, index) => {
        const imageUrl = imageContext(image);
        return <img key={image} src={imageUrl} alt={image} className="image" />;
    });

    return <div className="container">{images}</div>;
}



