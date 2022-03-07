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
      <ul className="items">
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
      </ul>
    );
  }
}

export default Items;
