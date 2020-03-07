import React from 'react';
import GallerySection from '../Components/GallerySection';

const Gallery = () => {
    return(
        <div className="gallery-container">
            <h1>Gallery Page</h1>
            <GallerySection />
            <GallerySection />
            <GallerySection />
        </div>
        
    )
}

export default Gallery;