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
			<HistorySection>
				<div>
					<p>Some Time in 2011</p>
					<h3>Junyo</h3>

					<p>I was working as a rental agent for a real estate broker in Brooklyn, when my boss one day decided that I could make websites. Never one to back away from a challenge, I obtained a copy of Dreamweaver and a book on HTML. Within a week we had a perfectly horrible little 4 page site on our hands. Lucky for me, he was satisfied, paid me a few hundred dollars and I was never interested in showing another apartment again. This was what those in the world of  dramatic literature refer to as the ‘Inciting Incident’.</p>
				</div>
			</HistorySection>
		);
	}
}

export default History;