import React from 'react';
import styled from 'styled-components';

const ControlPrev = styled.a`
	position: absolute;
	transform: translateY(-50%);
	top: 50%;
	left: -6rem;
	color: ${props => props.theme.white}
	text-align: right;
	font-size: 2.4rem;
	cursor: pointer;
`;

class SliderControlPrev extends React.Component {
	prevSlide() {
        console.log('Prev Slide');
	}
	
    render() {
        return <ControlPrev onClick={() => this.prevSlide()}>Prev</ControlPrev>
    }
}

export default SliderControlPrev;