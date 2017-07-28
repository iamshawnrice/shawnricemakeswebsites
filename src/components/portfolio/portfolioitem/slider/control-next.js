import React from 'react';
import styled from 'styled-components';

const ControlNext = styled.a`
	position: absolute;
	transform: translateY(-50%);
	top: 50%;
	right: -1rem;
	color: ${props => props.theme.white}
	text-align: right;
    font-size: 2.4rem;
	cursor: pointer;
	
	&::selection {
		background-color: transparent;
	}
`;

const SliderControlNext = (props) => {	
	const nextSlide = props.clickcallback;

  return <ControlNext onClick={() => { nextSlide() }}>Next</ControlNext>;
}

export default SliderControlNext;