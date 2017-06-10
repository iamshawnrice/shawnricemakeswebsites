import React, {Component} from 'react';

import AdminPortfolio from './portfolio';
import AdminForm from './form';

import database from '../../database';

import './style.css';

class Admin extends Component {
  constructor() {
    super();

    this.addItem = this.addItem.bind(this);
  }

  componentWillMount() {
    this.ref = database.syncState('portfolio/items', {
      context: this,
      state: 'items'
    });
  }

  state = {
    items: {}
  }

  componentWillUnmount() {
    database.removeBinding(this.ref);
  }

  addItem(itemData) {
    const items = this.state.items;

    items[itemData.id] = itemData;

    this.setState({items});
  }

  render() {
    return (
      <div id="admin">
        <h1>Admin</h1>

        <AdminForm addItem={this.addItem} />
        <AdminPortfolio items={this.state.items} />
      </div>
    );
  }
}

export default Admin;
