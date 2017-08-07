import React from 'react';
import styled from 'styled-components';

const MilestoneArticle = styled.article`
	text-align: center;
	border: 1px solid ${props => props.theme.gray50};
	background-color: ${props => props.theme.black};
	border-radius: .5rem;
	padding: 12em 2em 4em;
	position: relative;
	z-index: 2;
	margin-bottom: 20rem;

	h2 {
		margin-bottom: 1em;
	}

	p {
		font-family: ${props => props.theme.sans};
		font-size: 2rem;
		line-height: 2;
		
		&.datestamp {
			font-family: ${props => props.theme.serif};
			font-size: 2rem;
			opacity: .75;
			line-height: 2;
		}
	}

	&:last-child {
		margin-bottom: 0;
	}
`;

const MilestoneIcon = styled.div`
	position: absolute;
	width: 18rem;
	height: 18rem;
	border-radius: 50%;
	border: 1px solid ${props => props.theme.gray50};
	background-color: ${props => props.theme.black};
	z-index: 3;
	left: 50%;
	top: 0;
	transform: translate(-50%, -50%);

	img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		max-width: 80%;
	}
`;

const Milestone = props => {
	return(
		<MilestoneArticle>
			<MilestoneIcon>
				<img src="/images/history/dp-3d-logo.png" alt="DPPAD"/>
			</MilestoneIcon>

			<p className="datestamp">{props.item.date}</p>

			<h2>{props.item.title}</h2>

			<p>{props.item.description}</p>
		</MilestoneArticle>
	);
}

export default Milestone;