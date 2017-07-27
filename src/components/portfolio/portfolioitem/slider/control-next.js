import React from 'react';
import styled from 'styled-components';

const ControlNext = styled.a`
	position: absolute;
	transform: translateY(-50%);
	top: 50%;
	right: -6rem;
	color: ${props => props.theme.white}
	text-align: right;
    font-size: 2.4rem;
    cursor: pointer;
`;

class SliderControlNext extends React.Component {
    render() {
        return <ControlNext>Next</ControlNext>
    }
}

export default SliderControlNext;