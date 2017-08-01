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
