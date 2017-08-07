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
    line-height: 1.6;
	}

	@media (max-width: ${props => props.theme.bpSmall}) {
		width: 100%;
		margin: 3rem auto 0;
		padding: 3rem 4rem 2rem;
	}

	&:before {
		content: "";
		display: block;
		top: 0;
		left: 2rem;
		right: 2rem;
		background-color: ${props => props.theme.white};
		height: 1px;
		position: absolute;
	}

	&:after {
		content: "";
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
	return (
		<TextBlockDiv>
			<p>{props.textcontent}</p>
		</TextBlockDiv>
	);
};

export default TextBlock;
