import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SiteNav = styled.ul`
	flex: 0 0 auto;
	list-style: none;

	li {
		display: inline-block;
		margin-right: 1em;

		&:last-of-type {
			margin-right: 0;
		}
	}

	a {
		text-decoration: none;
		transition: color .3s linear;
		color: ${props => props.theme.white};

		&:hover {
			color: ${props => props.theme.blue}
		}

		&.active {
			color: ${props => props.theme.orange}
		}
	}
`;

const Nav = props => {
	return (
		<SiteNav>
			<li><NavLink to="/portfolio">portfolio</NavLink></li>
			<li><NavLink to="/about">about</NavLink></li>
			<li><a href="mailto:iamshawnrice@gmail.com">contact</a></li>
		</SiteNav>
	);
}

export default Nav;