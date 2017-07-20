import React from 'react';

import { fbStorage } from '../../../database';

class PortfolioItemImages extends React.Component {
    constructor(props) {
        super(props);

        this.fbStorageRef = fbStorage.ref('/portfolio/sample-item-1/');

        this.state = {
            hasImages: false
        }
    }

    renderImage() {
        return <img src={this.imageURL} alt="heather" />
    }

    render() {
        const self = this;

        const hasImageData = this.state.hasImages,
              imageURL = this.imageURL;

        this.fbStorageRef.child('iamheatherrice.com.jpg').getDownloadURL().then((response) => {
            const prevState = self.state;

            self.setState((prevState, props) => {
                return {
                    hasImages: true
                }
            });

            self.imageURL = response;
        });

        return(
            <div>
                { hasImageData ? (
                    this.renderImage()
                ) : (<p>No images</p>) }
            </div>
        );
    }
}

export default PortfolioItemImages;
