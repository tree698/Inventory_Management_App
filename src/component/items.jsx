import React, { Component } from 'react';
import Item from './item';

class Items extends Component {
  handleIncrement = (item) => {
    this.props.onIncrement(item);
  };

  handleDecrement = (item) => {
    this.props.onDecrement(item);
  };

  handleReset = (item) => {
    this.props.onReset(item);
  };

  handleDelete = (item) => {
    this.props.onDelete(item);
  };

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Inc/Dec</th>
            <th>Balance</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {this.props.items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
          />
        ))}
      </table>
    );
  }
}

export default Items;
