import React, {Component} from 'react';
import AdminPortfolioItem from './portfolio-item';

class AdminPortfolio extends Component {
  render() {
    return (
      <div>
        <h2>This is the Admin Portfolio Component</h2>

        <div className="portfolio-items">
          {
            Object
              .keys(this.props.items)
              .map(key => <AdminPortfolioItem item={this.props.items[key]} key={key}/>)
          }
        </div>
      </div>
    );
  }
}

export default AdminPortfolio;
