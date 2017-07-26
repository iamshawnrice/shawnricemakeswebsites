import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
	max-width: 720px;
`;

const Image = props => {
	const imgsrc = `/images/portfolio/${props.imagedata.file}`;
	const imgalt = props.imagedata.alt;

	return ( <StyledImage src={imgsrc} alt={imgalt} /> );
}

export default Image;