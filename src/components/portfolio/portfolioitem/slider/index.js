import React from 'react';

import PortfolioItemImages from './images';

class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.imageData = props.images;

        this.state = {
            imageIndex: 0
        }

        this.controlmethods = {
            decreaseImageIndex: this.decreaseImageIndex,
            increaseImageIndex: this.increaseImageIndex
        }
    }

    decreaseImageIndex() {
        if (this.state.imageIndex > 0) {
            this.setState((prevState) => {
                const newindex = prevState.imageIndex -=1;

                console.log('Prev Slide');

                return { imageIndex: newindex };
            });
        }
    }

    increaseImageIndex() {
        if (this.state.imageIndex < this.imageData.length - 1) {
            this.setState((prevState) => {
                const newindex = prevState.imageIndex += 1;

                console.log('Next Slide');

                return { imageIndex: newindex };
            });
        }
    }

    render() {
        return (
            <PortfolioItemImages 
                images={this.imageData} 
                activeimage={this.state.imageIndex} 
                controlmethods={this.controlmethods} 
            />
        );
    }
}

export default Slider;