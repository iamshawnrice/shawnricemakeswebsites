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
	width: ${props => props.imagecount * 1280}px;
`;

class PortfolioItemImages extends React.Component {
	render() {
		const images = this.props.images;

		return(
			<Slider>
				<SliderControlPrev />

				<SliderContainer>
					<SliderCarriage imagecount={images.length} >
						{
							images.map((image, i) => {
								return ( <Image imagedata={image} index={i} key={i} /> );
							})
						}
					</SliderCarriage>
				</SliderContainer>

				<SliderControlNext />
			</Slider>
		);
	}
}

export default PortfolioItemImages;
