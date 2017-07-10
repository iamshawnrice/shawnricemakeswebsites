import React from 'react';
import styled from 'styled-components';

import PortfolioItemHeader from './header';

const PortfolioItemSection = styled.section`
  padding-top: 90px;
  padding-bottom: 82px;
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
        <PortfolioItemHeader itemdata={this.itemData} />
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
