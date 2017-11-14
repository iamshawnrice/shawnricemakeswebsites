import React from 'react';
import styled from 'styled-components';

const TextBlockDiv = styled.div`
	width: auto;
	max-width: ${props => props.theme.paragraphMaxWidth};
	margin: 8rem auto 2rem;
	font-family: ${props => props.theme.sans};
	text-align: center;
	padding: 6rem 4rem;
	position: relative;

	p {
		font-size: 2.4rem;
		line-height: 2;
		letter-spacing: 0.1rem;
	}

	a {
		text-decoration: none;
		color: ${props => props.theme.blue};

		&:hover {
			color: ${props => props.theme.orange};
		}
	}

	@media (max-width: ${props => props.theme.bpSmall}) {
		width: 100%;
		margin: 3rem auto 0;
		padding: 3rem 2rem 2rem;
		text-align: left;

		p {
			line-height: 1.5;
			font-size: 2rem;
		}
	}

	&:before {
		content: '';
		display: block;
		top: 0;
		left: 2rem;
		right: 2rem;
		background-color: ${props => props.theme.white};
		height: 1px;
		position: absolute;
	}

	&:after {
		content: '';
		display: block;
		bottom: 0;
		left: 2rem;
		right: 2rem;
		background-color: ${props => props.theme.white};
		height: 1px;
		position: absolute;
	}
`;

const TextBlock = props => {
	function createTextContent(text) {
		return { __html: text };
	}

	return (
		<TextBlockDiv>
			<p dangerouslySetInnerHTML={createTextContent(props.textcontent)} />
		</TextBlockDiv>
	);
};

export default TextBlock;
