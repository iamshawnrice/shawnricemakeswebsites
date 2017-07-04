import React from 'react';
import { Link } from 'react-router-dom';

import Devices from './devices';
import Tags from './portfolio-item-tags';
import PortfolioItemDetail from './portfolio-item-detail';

class PortfolioItem extends React.Component {
  renderTags() {
    if (this.props.item.hasOwnProperty('tags') && this.props.item.tags.length > 0) {
      return (<Tags tags={this.props.item.tags} />);
    }
  }

  getClasses() {
    let classes = this.props.index % 2 === 0 ? 'portfolio-item even' : 'portfolio-item odd';

    if (this.props.active) {
      classes += ' is-active';
    }

    return classes;
  }

  showDetail() {
    if (this.props.active) {
      return (<PortfolioItemDetail itemdetails={this.props.item} />);
    }
  }

  render() {
    return (
      <article className={this.getClasses()}>
        <Link to={'/portfolio/' + this.props.item.id} className="portfolio-item-link">
          <header className="portfolio-item-header">
            <div className="portfolio-item-info">
              <h2 className="portfolio-item-title">{this.props.item.title}</h2>

              {this.renderTags()}
            </div>

            <div className="portfolio-item-preview">
              <Devices />
            </div>
          </header>
        </Link>

        {this.showDetail()}

        <div className={'bg-box bg-' + this.props.index}></div>
      </article>
    );
  }
}

export default PortfolioItem;
