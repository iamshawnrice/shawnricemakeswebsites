import React from 'react';
import styled from 'styled-components';

const HistorySection = styled.section`
	padding: 5rem 0;
	position: relative;

	&:after {
		content: "";
		display: block;
		width: 2px;
		background-color: ${props => props.theme.blue};
		position: absolute;
		top: 0;
		bottom: 0;
		left: calc(50% - 1px);
	}
`;

class History extends React.Component {
	render() {
		return (
			<HistorySection />
		);
	}
}

export default History;