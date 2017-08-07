import React from 'react';
import styled from 'styled-components';

import PageWrap from '../pagewrap';
import TextBlock from '../textblock';
import History from './history';

const IntroHeader = styled.header`
	text-align: center;
`;

const IntroImage = styled.div`
	display: inline-block;
	border-radius: 50%;
	max-width: 340px;
	overflow: hidden;
	margin-bottom: 4em;
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

				<History />
			</PageWrap>
		);
	}
}

export default Introduction;