import React from 'react';
import styled from 'styled-components';

import PortfolioItemHeader from './header';
import PortfolioItemDescription from './description';
import Slider from './slider';

import backgrounds from '../../../styleguides/backgrounds';

const PortfolioItemSection = styled.section`
	padding-top: 90px;
	padding-bottom: 82px;
	position: relative;
	min-height: calc(100vh);

	> * {
		position: relative;
		z-index: 2;
	}
`;

const BGBox = styled.div`
	background-image: url("${props => backgrounds[props.background]}");
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 1;
	opacity: .1;
	background-attachment: fixed;
`;

class PortfolioItem extends React.Component {
	constructor(props) {
		super(props);

		this.itemData = props.item;
	}

	componentWillReceiveProps(props) {
		this.itemData = props.item;
	}

	renderPortfolioImages() {
		if (this.itemData.hasOwnProperty('images')) {
			return <Slider images={this.itemData.images} itemID={this.itemData.id} />;
		}
	}

	renderPortfolioDescription() {
		if (this.itemData.hasOwnProperty('description')) {
			return <PortfolioItemDescription itemtext={this.itemData.description} />
		}
	}

	renderPortfolioItem() {
		const item = this.itemData;

		return (
			<PortfolioItemSection>
				<BGBox background={item.background} />
				<PortfolioItemHeader itemdata={item} />
				{this.renderPortfolioDescription()}
				{this.renderPortfolioImages()}
			</PortfolioItemSection>
		);
	}

	renderLoader() {
		return <p>Loading...</p>;
	}

	render() {
		let hasItemData = this.itemData;

		return (
			<div>
				{hasItemData ? (
					this.renderPortfolioItem()
				) : (
					this.renderLoader()
				)}
			</div>
		);
	}
}

export default PortfolioItem;
