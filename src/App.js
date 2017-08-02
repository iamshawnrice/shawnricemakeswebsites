import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import data from './data';
import utils from './utils';

import Header from './components/header';
import Footer from './components/footer';
import Portfolio from './components/portfolio/portfolio';
import PortfolioItem from './components/portfolio/portfolioitem';

class App extends React.Component {
  state = {
		items: data.portfolio.items,
		isMobile: utils.isMobile()
  }

  renderPortfolio() {
    return <Portfolio items={this.state.items} />;
  }

  renderPortfolioItem(args) {
    return <PortfolioItem item={this.state.items[args.match.params.id]} />;
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Header ismobile={this.state.isMobile}/>

            <Route path="/portfolio/" exact render={this.renderPortfolio.bind(this)} />
            <Route path="/portfolio/:id" render={this.renderPortfolioItem.bind(this)} />

            <Footer ismobile={this.state.isMobile}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
