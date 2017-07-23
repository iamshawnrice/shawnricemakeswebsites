import React from 'react';
import Slider from 'react-slick'

const PortfolioItemImages = props => {
    const images = props.images;

    if (images.length > 0) {
        return(
            <Slider>
                {
                    Object.keys(images).map((image, i) => {
                        return (
                            <div>
                                <img src={images[image]} key={i} alt="" />
                            </div>
                        );
                    })
                }
            </Slider>
        );
    }
}

export default PortfolioItemImages;
