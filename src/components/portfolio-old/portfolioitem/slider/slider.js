import React from 'react';
import styled from 'styled-components';

import Image from './image';

function setWidth(count) {
	return `${count * 100}%`;
}

function setPosition(index) {
	return `-${index * 100}%`;
}

const SliderContainer = styled.div`
	overflow: hidden;
	width: ${props => props.maxwidth}px;
	margin: 0 auto;
	position: relative;

	img {
		width: ${props => props.maxwidth}px;
	}

	@media (min-width: 1500px) {
		width: 1000px;

		img {
			width: 1000px;
		}
	}

	@media (min-width: 768px) and (max-width: 1499px) {
		width: 700px;

		img {
			width: 700px;
		}
	}

	@media (min-width: 480px) and (max-width: 767px) {
		width: 400px;

		img {
			width: 400px;
		}
	}

	@media (max-width: 479px) {
		width: 300px;

		img {
			width: 300px;
		}
	}
`;

const SliderCarriage = styled.div`
	white-space: nowrap;
	position: relative;
	transition: .3s left ease-out;
	width: ${props => setWidth(props.imagecount)};
	left: ${props => setPosition(props.activeimage)};
`;

const Slider = props =>  {
	const images = props.images;
	const itemID = props.itemID;
	const activeImage = props.activeimage;
	const maxWidth = props.maxwidth;

	return (
		<SliderContainer maxwidth={maxWidth}>
			<SliderCarriage imagecount={images.length} activeimage={activeImage} maxwidth={maxWidth}>
				{
					images.map((image, i) => {
						return ( <Image imagedata={image} index={i} key={i} itemID={itemID} /> );
					})
				}
			</SliderCarriage>
		</SliderContainer>
	);
}

export default Slider;