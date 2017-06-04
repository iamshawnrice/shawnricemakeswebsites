import React, {Component} from 'react';

import AdminPortfolio from '../admin-portfolio/AdminPortfolio';
import AdminForm from '../admin-form/AdminForm';

import database from '../../database';

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
    const timestamp = Date.now();

    items[`item${timestamp}`] = itemData;

    this.setState({items});
  }

  render() {
    return (
      <div>
        <h1>Admin</h1>

        <AdminForm addItem={this.addItem} />
        <AdminPortfolio items={this.state.items} />
      </div>
    );
  }
}

export default Admin;
