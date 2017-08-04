import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Devices from './devices';
import Tags from './portfolio-item-tags';
import PortfolioItemDetail from './portfolio-item-detail';
import backgrounds from '../../styleguides/backgrounds';

const PortfolioItemArticle = styled.article`
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  padding: 3.2rem 2.4rem;
  position: relative;
	border-bottom: 1px solid ${props => props.theme.white};
`;

const PortfolioItemLink = styled(Link)`
  display: flex;
  flex: 1 1 auto;
  color: ${props => props.theme.white};
	text-decoration: none;
	position: relative;
	z-index: 2;

	@media (max-width: ${props => props.theme.bpSmall}) {
		flex-direction: column;
	}
`;

const PortfolioItemInfo = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  text-align: right;

  .even & {
    order: 2;
  }

	@media (max-width: ${props => props.theme.bpSmall}) {
		order: 2;
		text-align: center;

		.even & {
			order: 2;
		}
	}
`;

const PortfolioItemTitle = styled.h2`
  font-size: 5rem;
`;

const PortfolioItemPreview = styled.div`
  flex: 1 1 auto;
  text-align: right;
  position: relative;
  z-index: 2;

  .even & {
    order: 1;
    text-align: left;
	}

	@media (max-width: ${props => props.theme.bpSmall}) {
		order: 1;
		margin-bottom: 2em;
		text-align: center;

		.even & {
			text-align: center;
		}
	}
`;

const BgBox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  opacity: .1;
  background-attachment: fixed;
  background-image: url("${props => backgrounds[props.background]}");
`;

class PortfolioItem extends React.Component {
  renderTags() {
    if (this.props.item.hasOwnProperty('tags') && this.props.item.tags.length > 0) {
      return (<Tags tags={this.props.item.tags} />);
    }
  }

  getClasses() {
    let classes = this.props.index % 2 === 0 ? 'portfolio-item even' : 'portfolio-item odd';

    return classes;
  }

  showDetail() {
    if (this.props.active) {
      return (<PortfolioItemDetail itemdetails={this.props.item} />);
    }
  }

  render() {
    return (
      <PortfolioItemArticle className={this.getClasses()}>
        <PortfolioItemLink to={'/portfolio/' + this.props.item.id}>
					<PortfolioItemInfo>
						<PortfolioItemTitle>{this.props.item.title}</PortfolioItemTitle>

						{this.renderTags()}
					</PortfolioItemInfo>

					<PortfolioItemPreview>
						<Devices />
					</PortfolioItemPreview>
        </PortfolioItemLink>

        {this.showDetail()}

        <BgBox background={this.props.item.background}></BgBox>
      </PortfolioItemArticle>
    );
  }
}

export default PortfolioItem;
