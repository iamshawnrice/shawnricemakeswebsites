import React from 'react';
import styled from 'styled-components';

const ControlPrev = styled.a`
	position: absolute;
	transform: translateY(-50%);
	top: 50%;
	left: -1rem;
	color: ${props => props.theme.white}
	text-align: right;
	font-size: 2.4rem;
	cursor: pointer;

	&::selection {
		background-color: transparent;
	}
`;

const SliderControlPrev = (props) => {
	const prevSlide = props.clickcallback;

  return <ControlPrev onClick={() => { prevSlide() }}>Prev</ControlPrev>;
}

export default SliderControlPrev;