import React from 'react';
import styled from 'styled-components';

const PortfolioItemSection = styled.section`
  padding-top: 90px;
  padding-bottom: 82px;
`;

class PortfolioItem extends React.Component {
  constructor(props) {
    super();

    this.itemData = props.item;
  }

  render() {
    return(
      <PortfolioItemSection>
        <h1>Hello fron the PortfolioItem component</h1>
        <p>My id is {this.itemData.id}</p>
      </PortfolioItemSection>
    );
  }
}

export default PortfolioItem;
