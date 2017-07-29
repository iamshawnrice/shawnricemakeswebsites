import React from 'react';
import styled from 'styled-components';

import Image from './image';
import SliderControlPrev from './control-prev';
import SliderControlNext from './control-next';


const Sliders = styled.div`
	position: relative;
	max-width: 1920px;
	margin: 0 auto 4rem;
`;

const SliderContainerFull = styled.div`
	overflow: hidden;
	width: 1440px;
	margin: 0 auto;
	position: relative;
`;

const SliderCarriageFull = styled.div`
	white-space: nowrap;
	position: relative;
	width: ${props => props.imagecount * 1440}px;
	left: -${props => props.activeimage * 1440}px;
`;

const SliderContainerMedium = styled.div`
	overflow: hidden;
	width: 768px;
	margin: 3rem auto 0;
`;

const SliderCarriageMedium = styled.div`
	white-space: nowrap;
	position: relative;
	width: ${props => props.imagecount * 768}px;
	left: -${props => props.activeimage * 768}px;
`;

const SliderContainerSmall = styled.div`
	overflow: hidden;
	width: 375px;
	margin: 3rem auto 0;
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
		const mediumImages = this.props.mediumimages;
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

				<SliderContainerMedium>
					<SliderCarriageMedium imagecount={smallImages.length} activeimage={activeImage}>
						{
							mediumImages.map((image, i) => {
								return ( <Image imagedata={image} index={i} key={i} /> );
							})
						}
					</SliderCarriageMedium>
				</SliderContainerMedium>

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
