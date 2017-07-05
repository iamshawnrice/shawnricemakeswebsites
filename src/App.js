import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Admin from './components/admin';
import PortfolioIndex from './components/portfolio';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />

            <Route path="/admin" component={Admin} />
            <Route path="/portfolio/" component={PortfolioIndex} />

            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
