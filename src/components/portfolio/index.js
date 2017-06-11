import React from 'react';

import PortfolioItem from './portfolio-item';

import database from '../../database';

import './style.css';
import './backgrounds.css';

class Portfolio extends React.Component {
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
      <section className="portfolio">
        {
          Object
            .keys(this.state.items)
            .map((key, index) => <PortfolioItem item={this.state.items[key]} index={index} key={key} active={this.isActiveItem(key)}/>)
        }
      </section>
    );
  }
}

export default Portfolio;
