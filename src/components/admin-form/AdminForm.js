import React from 'react';

class AdminForm extends React.Component {
  addItem(e) {
    e.preventDefault();

    const newItem = {
      title: this.title.value
    }

    this.props.addItem(newItem);
    this.itemForm.reset();
  }

  render() {
    return (
      <div>
        <h2>This is the Admin Form Component</h2>

        <form ref={(input) => this.itemForm = input} onSubmit={(e) => this.addItem(e)}>
          <label htmlFor="title">Title</label><br />
          <input type="text" id="title" ref={(input) => this.title = input} /><br />

          <button type="submit">Add Item</button>
        </form>
      </div>
    );
  }
}

export default AdminForm;
