import React from 'react';

import PortfolioItem from './portfolio-item';
import styled from 'styled-components';

const PortfolioSection = styled.section`
  padding-top: 90px;
  padding-bottom: 82px;
`;

class Portfolio extends React.Component {
  render() {
    return (
      <PortfolioSection>
        {
          Object
            .keys(this.props.items)
            .map((key, index) => <PortfolioItem item={this.props.items[key]} index={index} key={key} />)
        }
      </PortfolioSection>
    );
  }
}

export default Portfolio;
