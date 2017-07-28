import React from 'react';
import styled from 'styled-components';

import Image from './image';
import SliderControlPrev from './control-prev';
import SliderControlNext from './control-next';


const Sliders = styled.div`
	position: relative;
	max-width: 1024px;
	margin: 0 auto 4rem;
`;

const SliderContainerFull = styled.div`
	overflow: hidden;
	width: 720px;
	margin: 0 auto;
	position: relative;
`;

const SliderCarriageFull = styled.div`
	white-space: nowrap;
	position: relative;
	width: ${props => props.imagecount * 720}px;
	left: -${props => props.activeimage * 720}px;
`;

const SliderContainerSmall = styled.div`
	overflow: hidden;
	width: 375px;
	margin: 3rem auto 0;
	transform: scale(.5);
	position: absolute;
	top: -70px;
	left: 0;
`;

const SliderCarriageSmall = styled.div`
	white-space: nowrap;
	position: relative;
	width: ${props => props.imagecount * 375}px;
	left: -${props => props.activeimage * 375}px;
`;

class PortfolioItemImages extends React.Component {
	render() {
		const fullImages = this.props.fullimages;
		const smallImages = this.props.smallimages;
		const activeImage = this.props.activeimage;

		const prevSlide = this.props.controlmethods.decreaseImageIndex;
		const nextSlide = this.props.controlmethods.increaseImageIndex;

		return(
			<Sliders>
				<SliderControlPrev clickcallback={prevSlide}/>

				<SliderContainerFull>
					<SliderCarriageFull imagecount={fullImages.length} activeimage={activeImage}>
						{
							fullImages.map((image, i) => {
								return ( <Image imagedata={image} index={i} key={i} /> );
							})
						}
					</SliderCarriageFull>
				</SliderContainerFull>

				<SliderContainerSmall>
					<SliderCarriageSmall imagecount={smallImages.length} activeimage={activeImage}>
						{
							smallImages.map((image, i) => {
								return ( <Image imagedata={image} index={i} key={i} /> );
							})
						}
					</SliderCarriageSmall>
				</SliderContainerSmall>

				<SliderControlNext clickcallback={nextSlide}/>
			</Sliders>
		);
	}
}

export default PortfolioItemImages;
