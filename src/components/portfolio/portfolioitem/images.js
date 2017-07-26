import React from 'react';
import styled from 'styled-components';

import Image from './image';

const Slider = styled.div`
	overflow: hidden;
	position: relative;
	max-width: 720px;
	margin: 0 auto;
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
				<SliderCarriage imagecount={images.length} >
					{
						images.map((image, i) => {
							return ( <Image imagedata={image} index={i} key={i} /> );
						})
					}
				</SliderCarriage>
			</Slider>
		);
	}
}

export default PortfolioItemImages;
