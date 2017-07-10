import React from 'react';
import styled from 'styled-components';

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
        <h1>Hello fron the PortfolioItem component</h1>

        <p>My id is {this.itemData.id}</p>
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
