import React from 'react';

import utils from '../../utils';

class PortfolioItem extends React.Component {
  renderTags() {
    if (this.props.item.hasOwnProperty('tags') && this.props.item.tags.length > 0) {
      return (<p className="portfolio-item-tags">{this.props.item.tags}</p>);
    }
  }

  getClasses() {
    return this.props.index % 2 === 0 ? 'portfolio-item even' : 'portfolio-item odd';
  }

  render() {
    return (
      <article className={this.getClasses()}>
        <header className="portfolio-item-header">
          <h2 className="portfolio-item-title">{this.props.item.title}</h2>

          {this.renderTags()}
        </header>

        <div className="portfolio-item-preview">
          <img src="./images/devices.svg" alt="devices" />
        </div>
        
        <div className={'bg-box bg-' + utils.randomNumber(1, 25)}></div>
      </article>
    );
  }
}

export default PortfolioItem;