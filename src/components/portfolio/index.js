import React from 'react';

import PortfolioItem from './portfolio-item';
import styled from 'styled-components';

const Portfolio = styled.section`
  padding-top: 90px;
  padding-bottom: 82px;
`;

class PortfolioIndex extends React.Component {
  render() {
    return (
      <Portfolio>
        {
          Object
            .keys(this.props.items)
            .map((key, index) => <PortfolioItem item={this.props.items[key]} index={index} key={key} />)
        }
      </Portfolio>
    );
  }
}

export default PortfolioIndex;
