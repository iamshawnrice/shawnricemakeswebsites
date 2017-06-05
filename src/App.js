import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/header';
import Admin from './components/admin';
import Portfolio from './components/portfolio';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Route path="/admin" component={Admin} />
            <Route exact path="/" component={Portfolio} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
