import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Nav from '../nav';

const Header = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background-color: ${props => props.theme.black};
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	padding: 2rem;
	z-index: 3;

	@media (max-width: ${props => props.theme.bpSmall}) {
		position: relative;
		flex-direction: column;
		align-items: stretch;
		text-align: center;
		border-bottom: 1px solid ${props => props.theme.white};

		ul {
			font-size: 2.4rem;
			padding-top: 1em;
		}
	}
`;

const HeaderTitle = styled.h1`
	flex: 0 0 auto;
	font-size: 5rem;
`;

const HeaderTitleLink = styled(Link)`
	color: ${props => props.theme.white};
	text-decoration: none;

	&:hover {
		color: ${props => props.theme.white};
		text-decoration: none;
	}
`;

const HeaderSubTitle = styled.p`
	font-size: 3rem;

	@media (max-width: ${props => props.theme.bpSmall}) {
		font-size: 2.4rem;
	}
`;

const SiteHeader = props => {
	function renderNav() {
		if (props.ismobile) {
			return <Nav />
		}
	};

	return (
		<Header>
			<HeaderTitle>
				<HeaderTitleLink to='/'>Shawn Rice</HeaderTitleLink>
			</HeaderTitle>

			<HeaderSubTitle>web developer</HeaderSubTitle>

			{renderNav()}
		</Header>
	);
}

export default SiteHeader;
