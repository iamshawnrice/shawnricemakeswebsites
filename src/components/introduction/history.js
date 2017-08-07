import React from 'react';
import styled from 'styled-components';

import Milestone from './milestone';

const HistorySection = styled.section`
	padding: 5rem 2rem 0;
	position: relative;
	margin: 10rem auto;
	max-width: ${props => props.theme.paragraphMaxWidth};

	&:after {
		content: "";
		display: block;
		width: 1px;
		background-color: ${props => props.theme.gray50};
		position: absolute;
		top: 0;
		bottom: 0;
		left: calc(50% - 1px);
		z-index: 1;
	}
`;

const History = props => {
	const milestones = props.milestones;

	return (
		<HistorySection>
			{
				milestones.map((milestone, index) => <Milestone item={milestone} index={index} key={index} />)
			}
		</HistorySection>
	);
}

export default History;