import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
	padding-top: 90px;
	padding-bottom: 82px;
`;

const AboutImage = styled.div`
	margin: 2rem auto;
	max-width: 830px;
	padding: 5.5rem;
	border-top: 1px solid ${props => props.theme.white};
	border-bottom: 1px solid ${props => props.theme.white};
`;

const About = props => {
	return (
		<AboutSection>
			<AboutImage>
				<h1>Hello from the about page</h1>
			</AboutImage>
		</AboutSection>
	)
}

export default About;