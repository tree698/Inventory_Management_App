import React, { Component } from 'react';
import Item from './item';

class Items extends Component {
  state = {
    items: [
      { id: 1, name: 'desk', count: 2 },
      { id: 2, name: 'chair', count: 1 },
      { id: 3, name: 'pencile', count: 2 },
    ],
  };

  handleIncrement = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index].count += 1;
    this.setState({ items });
  };

  handleDecrement = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    const count = (items[index].count -= 1);
    items[index].count = count < 0 ? 0 : count;
    this.setState({ items });
  };

  handleReset = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index].count = 0;
    this.setState({ items });
  };

  handleDelete = (item) => {
    const items = this.state.items.filter(
      (stateItem) => stateItem.id !== item.id
    );
    this.setState({ items });
  };

  render() {
    return (
      <ul className="items">
        {this.state.items.map((item) => (
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
