import React from 'react';

import Portfolio from './portfolio';
import PortfolioItem from './portfolioitem';

const PortfolioPage = () => <Portfolio />;
const PortfolioItemPage = () => <PortfolioItem />;

class PortfolioIndex extends React.Component {
  constructor(props) {
    super();

    this.pageContent = props.match.params.hasOwnProperty('id') ? PortfolioItemPage : PortfolioPage
  }

  render() {
    return this.pageContent;
  }
}

export default PortfolioIndex;
