import React from 'react';
import styled from 'styled-components';

import Image from './image';
import SliderControlPrev from './control-prev';
import SliderControlNext from './control-next';

const SliderContainer = styled.div`
	overflow: hidden;
`;

const Slider = styled.div`
	position: relative;
	max-width: 720px;
	margin: 0 auto 4rem;
`;


const SliderCarriage = styled.div`
	white-space: nowrap;
	position: relative;
	width: ${props => props.imagecount * 720}px;
	left: -${props => props.activeimage * 720}px;
`;

class PortfolioItemImages extends React.Component {
	render() {
		const images = this.props.images;
		const activeimage = this.props.activeimage;

		const prevSlide = this.props.controlmethods.decreaseImageIndex;
		const nextSlide = this.props.controlmethods.increaseImageIndex;

		return(
			<Slider>
				<SliderControlPrev clickcallback={prevSlide}/>

				<SliderContainer>
					<SliderCarriage imagecount={images.length} activeimage={activeimage}>
						{
							images.map((image, i) => {
								return ( <Image imagedata={image} index={i} key={i} /> );
							})
						}
					</SliderCarriage>
				</SliderContainer>

				<SliderControlNext clickcallback={nextSlide}/>
			</Slider>
		);
	}
}

export default PortfolioItemImages;
