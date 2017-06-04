import React from 'react';

class AdminPortfolioItem extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.item.title}</h3>

        <dl>
          <dt>ID</dt>
          <dd>{this.props.item.id}</dd>
        </dl>
      </div>
    );
  }
}

export default AdminPortfolioItem;
