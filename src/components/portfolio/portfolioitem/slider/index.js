import React from 'react';

import PortfolioItemImages from './images';

class Slider extends React.Component {
	constructor(props) {
		super(props);
		
		this.imageData = props.images;

		this.state = {
			imageIndex: 0
		}
	}

	decreaseImageIndex() {
		if (this.state.imageIndex > 0) {
			this.setState((prevState) => {
				const newindex = prevState.imageIndex -=1;

				return { imageIndex: newindex };
			});
		}
	}

	increaseImageIndex() {
		if (this.state.imageIndex < this.imageData.full.length - 1) {
			this.setState((prevState) => {
				const newindex = prevState.imageIndex += 1;

				return { imageIndex: newindex };
			});
		}
	}

	render() {
		const showPrevImage = () => {
			this.decreaseImageIndex.call(this);
		}

		const showNextImage = () => {
			this.increaseImageIndex.call(this)
		}

		const controlMethods = {
			decreaseImageIndex: showPrevImage,
			increaseImageIndex: showNextImage
			}

			return (
				<PortfolioItemImages 
					fullimages={this.imageData.full} 
					mediumimages={this.imageData.medium}
					smallimages={this.imageData.small}
					activeimage={this.state.imageIndex} 
					controlmethods={controlMethods} 
				/>
			);
    }
}

export default Slider;