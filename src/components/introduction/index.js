import React from 'react';
import styled from 'styled-components';

import PageWrap from '../pagewrap';
import TextBlock from '../textblock';
import History from './history';

const IntroHeader = styled.header`
	text-align: center;

	@media (max-width: ${props => props.theme.bpSmall}) {
		padding-top: 2rem;
	}
`;

const IntroImage = styled.div`
	display: inline-block;
	border-radius: 50%;
	width: 60%;
	width: 340px;
	height: 340px;
	overflow: hidden;
	margin-bottom: 4em;
	border: 1px solid ${props => props.theme.white};

	@media (max-width: ${props => props.theme.bpSmall}) {
		margin-top: 2rem;

		width: 310px;
		height: 310px;
	}
`;

class Introduction extends React.Component {
	render() {
		return (
			<PageWrap>
				<IntroHeader>
					<IntroImage>
						<img src="/images/introduction/headshot-740.jpg" alt="Shawn Rice" />
					</IntroImage>

					<h2>{this.props.data.introcopy.heading}</h2>

					<TextBlock textcontent={this.props.data.introcopy.introduction} />
				</IntroHeader>

				<History milestones={this.props.data.milestones} />
			</PageWrap>
		);
	}
}

export default Introduction;