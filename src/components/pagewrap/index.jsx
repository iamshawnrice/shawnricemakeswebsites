import React from 'react';
import styled from 'styled-components';

const PageWrap = styled.section`
	padding-top: 90px;
	padding-bottom: 82px;
	position: relative;

	> * {
		position: relative;
		z-index: 2;
	}

	@media (max-width: ${props => props.theme.bpSmall}) {
		padding: 0;
	}
`;

export default PageWrap;
