import React from 'react';

const Image = props => {
	const imgsrc = `/images/portfolio/${props.imagedata.file}`;
	const imgalt = props.imagedata.alt;

	return ( <img src={imgsrc} alt={imgalt} /> );
}

export default Image;