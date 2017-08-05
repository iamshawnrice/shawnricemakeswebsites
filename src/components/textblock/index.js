import React from 'react';
import styled from 'styled-components';

const TextBlockDiv = styled.div`
  max-width: ${props => props.theme.paragraphMaxWidth};
  width: 92%;
  margin: 8rem auto 2rem;
  border-top: 1px solid ${props => props.theme.white};
  border-bottom: 1px solid ${props => props.theme.white};
  font-family: ${props => props.theme.sans};
  text-align: center;
  padding: 6rem 0;

  p {
    font-size: 2.4rem;
    line-height: 1.6;
	}

	@media (max-width: ${props => props.theme.bpSmall}) {
		width: 100%;
		margin: 3rem auto 0;
		padding: 3rem 0 2rem;;
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
