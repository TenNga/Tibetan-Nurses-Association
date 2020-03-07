import React from 'react';
import Gallery from 'react-grid-gallery';

const GallerySection = () => {
    const IMAGES =
                [{
                        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
                },
                {
                        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                },

                {
                        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
                },

                {
                        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
                }];

    const renderImage = () => {
        return IMAGES.map(img => <img src={img.thumbnail} />)
    }

    return (
        <div className="gallery-section-container">
            <h1> Gallery Section/Group</h1>
            {renderImage()}
        </div>

    )
}

export default GallerySection;