import React from 'react';
import styled from 'styled-components';

import SliderControlPrev from './control-prev';
import SliderControlNext from './control-next';

import Slider from './slider';


const Sliders = styled.div`
	position: relative;
	max-width: 1920px;
	margin: 0 auto 4rem;
`;

class PortfolioItemImages extends React.Component {
	render() {
		const fullImages = this.props.fullimages;
		const mediumImages = this.props.mediumimages;
		const smallImages = this.props.smallimages;
		const activeImage = this.props.activeimage;

		const prevSlide = this.props.controlmethods.decreaseImageIndex;
		const nextSlide = this.props.controlmethods.increaseImageIndex;

		return(
			<Sliders>
				<SliderControlPrev clickcallback={prevSlide}/>

				<Slider
					images={fullImages}
					imagecount={fullImages.length}
					activeimage={activeImage}
					maxwidth={1440}
				/>

				<Slider
					images={mediumImages}
					imagecount={mediumImages.length}
					activeimage={activeImage}
					maxwidth={768}
				/>

				<Slider
					images={smallImages}
					imagecount={smallImages.length}
					activeimage={activeImage}
					maxwidth={375}
				/>

				<SliderControlNext clickcallback={nextSlide}/>
			</Sliders>
		);
	}
}

export default PortfolioItemImages;
