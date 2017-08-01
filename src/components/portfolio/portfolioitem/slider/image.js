import React from 'react';

const Image = props => {
	const itemID = props.itemID;
	const imgsrc = `/images/portfolio/${itemID}/${props.imagedata.file}.jpg`;
	const imgalt = props.imagedata.alt;
	const imageSizes = [1440, 1000, 700, 400, 300];

	const srcSet = imageSizes.map(size => {
		return `/images/portfolio/${itemID}/${props.imagedata.file}-${size}.jpg ${size}w`;
	});

	return ( 
		<img sizes="(min-width: 1501px) 1440px, (min-width: 768px and max-width: 1499px) 700px, (min-width: 480px and max-width: 767px) 400px, (max-width: 479px) 300px" srcSet={srcSet.join(', ')} src={imgsrc} alt={imgalt}/>
	);
}

export default Image;