import React from 'react';

class PortfolioItemDetail extends React.Component {
  render() {
    return (
      <div className="portfolio-item-details">
        <div><p>{this.props.itemdetails.description}</p></div>
      </div>
    );
  }
}

export default PortfolioItemDetail;
