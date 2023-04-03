import React from 'react';
import styled from 'styled-components';

const ControlPrev = styled.a`
	top: 50%;
	transform: translate(-150%, -50%);
	color: ${props => props.theme.white}
	text-align: right;
	font-size: 2.4rem;
	cursor: pointer;
	position absolute;
	transition: .3s all ease-out;

	&:hover {
		color: ${props => props.theme.blue}
	}

	&::selection {
		background-color: transparent;
	}
`;

const SliderControlPrev = (props) => {
	const prevSlide = props.clickcallback;

  return <ControlPrev onClick={() => { prevSlide() }}>Prev</ControlPrev>;
}

export default SliderControlPrev;