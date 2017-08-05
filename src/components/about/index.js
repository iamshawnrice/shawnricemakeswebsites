import React from 'react';
import styled from 'styled-components';

import Image from './image';
import PageWrap from '../pagewrap';
import TextBlock from '../textblock';

const AboutImage = styled.div`
	margin: 2rem auto 0;
	max-width: 830px;
	padding: 5.5rem 5.5rem 0;
	text-align: center;

	@media (max-width: ${props => props.theme.bpSmall}) {
		padding: 3rem;
	}
`;

const About = props => {
	return (
		<PageWrap>
			<AboutImage>
				<Image imagedata={props.data.image} />
				<TextBlock textcontent={props.data.copy} />
			</AboutImage>
		</PageWrap>
	)
}

export default About;