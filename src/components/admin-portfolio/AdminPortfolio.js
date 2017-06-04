import React, {Component} from 'react';
import AdminPortfolioItem from '../admin-portfolio-item/AdminPortfolioItem';

class AdminPortfolio extends Component {
  render() {
    return (
      <div>
        <h2>This is the Admin Portfolio Component</h2>

        <div className="portfolio-items">
          {
            Object
              .keys(this.props.items)
              .map(key => <AdminPortfolioItem id={key} key={key}/>)
          }
        </div>
      </div>
    );
  }
}

export default AdminPortfolio;
