import React from 'react';
import styled from 'styled-components';

import Image from './image';

function setWidth(count, width) {
	return `${count * width}px`;
}

function setPosition(index, width) {
	return `-${index * width}px`;
}

const SliderContainer = styled.div`
	overflow: hidden;
	width: ${props => props.maxwidth}px;
	margin: 0 auto;
	position: relative;
`;

const SliderCarriage = styled.div`
	white-space: nowrap;
	position: relative;
	width: ${props => setWidth(props.imagecount, props.maxwidth)};
	left: ${props => setPosition(props.activeimage, props.maxwidth)};
`;

const Slider = props =>  {
	const images = props.images;
	const activeImage = props.activeimage;
	const maxWidth = props.maxwidth;

	return (
		<SliderContainer maxwidth={maxWidth}>
			<SliderCarriage imagecount={images.length} activeimage={activeImage} maxwidth={maxWidth}>
				{
					images.map((image, i) => {
						return ( <Image imagedata={image} index={i} key={i} /> );
					})
				}
			</SliderCarriage>
		</SliderContainer>
	);
}

export default Slider;