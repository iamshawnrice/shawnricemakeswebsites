import React from 'react';

const Image = props => {
	const imgsrc = `/images/about/${props.imagedata.file}.jpg`;
	const imgalt = props.imagedata.alt;
	const imageSizes = [1440, 700, 400];

	const srcSet = imageSizes.map(size => {
		return `/images/about/${props.imagedata.file}-${size}.jpg ${size}w`;
	});

	return ( 
		<img sizes="(min-width: 1501px) 1440px, (min-width: 768px and max-width: 1499px) 700px, (max-width: 767px) 400px" srcSet={srcSet.join(', ')} src={imgsrc} alt={imgalt}/>
	);
}

export default Image;