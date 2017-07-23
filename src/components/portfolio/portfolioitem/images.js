import React from 'react';

const PortfolioItemImages = props => {
    const images = props.images;

    if (images.length > 0) {
        return(
            <div className="images">
                {
                    Object.keys(images).map((image, i) => {
                        return <img src={images[image]} key={i} alt="" />
                    })
                }
            </div>
        );
    }
}

export default PortfolioItemImages;
