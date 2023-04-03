import React from 'react';
import styled from 'styled-components';

const ControlNext = styled.a`
	position: absolute;
	top: 50%;
	right: 0;
	transform: translate(150%, -50%);
	color: ${props => props.theme.white}
	text-align: right;
	font-size: 2.4rem;
	cursor: pointer;
	position: absolute;
	transition: .3s all ease-out;

	&:hover {
		color: ${props => props.theme.blue}
	}
	
	&::selection {
		background-color: transparent;
	}
`;

const SliderControlNext = (props) => {	
	const nextSlide = props.clickcallback;

  return <ControlNext onClick={() => { nextSlide() }}>Next</ControlNext>;
}

export default SliderControlNext;