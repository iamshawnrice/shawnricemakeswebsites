import React from 'react';
import SVGInline from 'react-svg-inline';
import styled from 'styled-components';

import Nav from '../nav';

const SiteFooter = styled.footer`
	display: flex;
	justify-content: space-between;
	font-size: 3rem;
	padding: 2rem;
	align-items: flex-start;
	position: fixed;
	bottom: 0;
	right: 0;
	left: 0;
	background-color: ${props => props.theme.black};
	z-index: 3;
	
	@media (max-width: 767px) {
		position: relative;
		flex-direction: column;
		align-items: stretch;
		text-align: center;
	}
`;

const SiteFooterSocial = styled.ul`
	flex: 0 0 auto;
	list-style: none;

	li {
		display: inline-block;
		margin-right: .5em;
		width: 3.6rem;

		&:last-of-type {
			margin-right: 0;
		}

		@media (max-width: 767px) {
			width: 2.8rem;
			margin-right: 1em;
		}
	}
`;

const Footer = props => {
	function renderNav() {
		if (!props.ismobile) {
			return <Nav />
		}
	};

	return (
		<SiteFooter>
			{renderNav()}

			<SiteFooterSocial>
				<li>
					<a href="https://twitter.com/iamshawnrice">
						<SVGInline svg={
							'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="36px" height="36px" viewBox="0 0 72 72" enable-background="new 0 0 72 72" xml:space="preserve"><path fill="#EDEAE2" d="M22.014,56.89c26.416,0,40.862-21.885,40.862-40.862c0-0.622-0.013-1.241-0.04-1.856C65.64,12.144,68.077,9.614,70,6.734c-2.573,1.144-5.343,1.914-8.248,2.261c2.966-1.778,5.242-4.591,6.315-7.944c-2.774,1.645-5.848,2.841-9.119,3.486C56.327,1.746,52.597,0,48.465,0c-7.931,0-14.362,6.432-14.362,14.36c0,1.127,0.126,2.223,0.372,3.274C22.539,17.034,11.954,11.319,4.871,2.629C3.638,4.751,2.926,7.217,2.926,9.848c0,4.982,2.536,9.381,6.391,11.955c-2.356-0.073-4.57-0.72-6.504-1.796c-0.002,0.06-0.002,0.119-0.002,0.183c0,6.956,4.95,12.762,11.522,14.079c-1.207,0.329-2.477,0.505-3.787,0.505c-0.924,0-1.824-0.091-2.699-0.259c1.829,5.707,7.13,9.859,13.416,9.975c-4.916,3.854-11.107,6.147-17.837,6.147c-1.158,0-2.301-0.065-3.425-0.198C6.356,54.512,13.903,56.889,22.014,56.89"/></svg>'
						} />
					</a>
				</li>

				<li>
					<a href="https://github.com/iamshawnrice">
						<SVGInline svg={
							'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="36px" height="36px" viewBox="0 0 72 72" enable-background="new 0 0 72 72" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" fill="#EDEAE2" d="M35.998,1.864C16.672,1.864,1,17.534,1,36.865c0,15.464,10.027,28.582,23.937,33.211c1.75,0.319,2.389-0.76,2.389-1.687c0-0.831-0.031-3.034-0.047-5.955c-9.736,2.115-11.791-4.691-11.791-4.691c-1.591-4.042-3.886-5.12-3.886-5.12c-3.178-2.17,0.24-2.128,0.24-2.128c3.512,0.248,5.361,3.609,5.361,3.609c3.122,5.347,8.191,3.802,10.186,2.908c0.317-2.263,1.222-3.806,2.222-4.68c-7.772-0.885-15.943-3.886-15.943-17.297c0-3.823,1.364-6.946,3.603-9.393c-0.36-0.885-1.561-4.444,0.343-9.263c0,0,2.938-0.941,9.625,3.588c2.792-0.776,5.786-1.165,8.762-1.178c2.972,0.014,5.965,0.402,8.763,1.178c6.683-4.529,9.615-3.588,9.615-3.588c1.909,4.818,0.708,8.377,0.349,9.263c2.24,2.447,3.597,5.57,3.597,9.393c0,13.446-8.184,16.404-15.981,17.268c1.258,1.083,2.376,3.22,2.376,6.483c0,4.68-0.042,8.452-0.042,9.603c0,0.936,0.63,2.022,2.407,1.683C60.982,65.436,71,52.324,71,36.865C71,17.534,55.329,1.864,35.998,1.864z"/></svg>'
						} />
					</a>
				</li>

				<li>
					<a href="https://www.linkedin.com/in/iamshawnrice/">
						<SVGInline svg={
							'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="36px"height="36px" viewBox="0 0 72 72" enable-background="new 0 0 72 72" xml:space="preserve"><path id="path14" inkscape:connector-curvature="0" fill="#EDEAE2" d="M1.221,6.015C1.221,3.246,3.523,1,6.362,1H65.64c2.839,0,5.14,2.246,5.14,5.015v59.972c0,2.769-2.301,5.014-5.14,5.014H6.362c-2.838,0-5.141-2.245-5.141-5.014V6.015z"/><path id="path28" inkscape:connector-curvature="0" fill="#464541" d="M22.306,59.598V27.989H11.8v31.609H22.306z M17.054,23.673c3.663,0,5.944-2.427,5.944-5.46c-0.068-3.102-2.281-5.461-5.875-5.461s-5.943,2.36-5.943,5.461c0,3.034,2.28,5.46,5.806,5.46H17.054L17.054,23.673z"/><path id="path30" inkscape:connector-curvature="0" fill="#464541" d="M28.12,59.598h10.506V41.946c0-0.944,0.068-1.89,0.346-2.564c0.759-1.888,2.488-3.842,5.39-3.842c3.802,0,5.323,2.897,5.323,7.147v16.91h10.505V41.473c0-9.708-5.183-14.226-12.096-14.226c-5.666,0-8.155,3.168-9.538,5.326h0.07v-4.583H28.12C28.259,30.955,28.12,59.598,28.12,59.598L28.12,59.598z"/></svg>'
						} />
					</a>
				</li>
			</SiteFooterSocial>
		</SiteFooter>
	);
};

export default Footer;
