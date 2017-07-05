import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import database from './database';
import Header from './components/header';
import Footer from './components/footer';
import Admin from './components/admin';
import PortfolioIndex from './components/portfolio';

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
    return <PortfolioIndex items={this.state.items} />
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />

            <Route path="/admin" component={Admin} />
            <Route path="/portfolio/" render={this.renderPortfolio.bind(this)} />

            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
