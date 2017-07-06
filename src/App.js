import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import database from './database';
import Header from './components/header';
import Footer from './components/footer';
import Admin from './components/admin';
import Portfolio from './components/portfolio/portfolio';
import PortfolioItem from './components/portfolio/portfolioitem';

class App extends React.Component {
  componentWillMount() {
    this.ref = database.syncState('portfolio/items', {
      context: this,
      state: 'items'
    });
  }

  state = {
    items: {}
  }

  renderPortfolio() {
    return <Portfolio items={this.state.items} />
  }

  renderPortfolioItem(args) {
    return <PortfolioItem item={this.state.items[args.match.params.id]} />
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />

            <Route path="/admin" component={Admin} />
            <Route path="/portfolio/" exact render={this.renderPortfolio.bind(this)} />
            <Route path="/portfolio/:id" render={this.renderPortfolioItem.bind(this)} />

            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
