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

  render() {
    return (
      <ul className="items">
        {this.state.items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    );
  }
}

export default Items;
