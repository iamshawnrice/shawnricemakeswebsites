import React from 'react';

import PortfolioItem from './portfolio-item';
import database from '../../database';
import styled from 'styled-components';

import './backgrounds.css';

const Portfolio = styled.section`
  padding-top: 90px;
  padding-bottom: 82px;
`;

class PortfolioIndex extends React.Component {
  componentWillMount() {
    this.ref = database.syncState('portfolio/items', {
      context: this,
      state: 'items'
    });
  }

  isActiveItem(key) {
    return this.props.match.params.id === key;
  }

  state = {
    items: {}
  }

  render() {
    return (
      <Portfolio>
        {
          Object
            .keys(this.state.items)
            .map((key, index) => <PortfolioItem item={this.state.items[key]} index={index} key={key} active={this.isActiveItem(key)}/>)
        }
      </Portfolio>
    );
  }
}

export default PortfolioIndex;
