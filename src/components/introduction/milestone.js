import React from 'react';
import styled from 'styled-components';


const Milestone = props => {
	return(
		<div>
			<p>{props.item.date}</p>
			<h3>{props.item.title}</h3>

			<p>{props.item.description}</p>
		</div>
	);
}

export default Milestone;