import React from 'react';
import styled from 'styled-components';

import PortfolioItemHeader from './header';
import PortfolioItemDescription from './description';
import PortfolioItemImages from './images';

import backgrounds from '../../../styleguides/backgrounds';

const PortfolioItemSection = styled.section`
  padding-top: 90px;
  padding-bottom: 82px;
  position: relative;

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

  renderPortfolioItem() {
    return (
      <PortfolioItemSection>
        <BGBox background={this.itemData.background} />
        <PortfolioItemHeader itemdata={this.itemData} />
        <PortfolioItemDescription />
        <PortfolioItemImages />
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
