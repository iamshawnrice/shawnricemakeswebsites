import React from 'react';
import styled from 'styled-components';

import SliderControlPrev from './control-prev';
import SliderControlNext from './control-next';

import Slider from './slider';


const Sliders = styled.div`
	position: relative;
	max-width: 1440px;
	margin: 0 auto 4rem;

	@media (min-width: 1500px) {
		width: 1000px;
	}

	@media (min-width: 768px) and (max-width: 1499px) {
		width: 700px;
	}

	@media (min-width: 480px) and (max-width: 767px) {
		width: 400px;
	}

	@media (max-width: 479px) {
		width: 300px;
	}
`;

const PortfolioItemImages = props => {
	const images = props.images;
	const itemID = props.itemID;
	const activeImage = props.activeimage;

	const prevSlide = props.controlmethods.decreaseImageIndex;
	const nextSlide = props.controlmethods.increaseImageIndex;

	return(
		<Sliders>
			<SliderControlPrev clickcallback={prevSlide}/>

			<Slider
				images={images}
				imagecount={images.length}
				activeimage={activeImage}
				itemID={itemID}
				maxwidth={1440}
			/>

			<SliderControlNext clickcallback={nextSlide}/>
		</Sliders>
	);
}

export default PortfolioItemImages;
