import React from 'react';
import styled from 'styled-components';

const MilestoneArticle = styled.article`
	text-align: center;
	border: 1px solid ${props => props.theme.gray50};
	background-color: ${props => props.theme.black};
	border-radius: .5rem;
	padding: ${props => props.hasicon ? '12em 4em 2em' : '4em 2em'};
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

	a {
		color: ${props => props.theme.blue};
		text-decoration: none;

		&:hover {
			color: ${props => props.theme.orange};
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
	overflow: hidden;

	img {
		max-width: 100%;
		border-radius: 50%;
	}
`;

const Milestone = props => {
	function renderMileStoneIcon() {
		if (props.item.hasOwnProperty('image')) {
			return (
				<MilestoneIcon>
					<img src={props.item.image.file} alt={props.item.image.alt} />
				</MilestoneIcon>
			);
		}
	}

	function renderDescription(text) {
		return { __html: text };
	}

	return(
		<MilestoneArticle hasicon={props.item.hasOwnProperty('image')}>
			{renderMileStoneIcon()}

			<p className="datestamp">{props.item.date}</p>

			<h2>{props.item.title}</h2>

			<p dangerouslySetInnerHTML={renderDescription(props.item.description)}></p>
		</MilestoneArticle>
	);
}

export default Milestone;