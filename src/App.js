import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Admin from './components/admin';
import Portfolio from './components/portfolio';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/admin" component={Admin} />
          <Route exact path="/" component={Portfolio} />
        </div>
      </Router>
    );
  }
}

export default App;
