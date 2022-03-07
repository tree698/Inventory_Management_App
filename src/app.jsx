import React, { Component } from 'react';
import Items from './component/items';
import Navbar from './component/navbar';
import './app.css';
import ItemAddForm from './component/itemAddForm';

class App extends Component {
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

  handleSubmit = (name) => {
    const inventory = [...this.state.items, { id: Date.now(), name, count: 0 }];
    this.setState({ items: inventory });
  };

  handleClick = () => {
    const items = this.state.items.map((item) => {
      item.count = 0;
      return item;
    });
    this.setState({ items });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.items.filter((item) => item.count > 0).length}
        />
        <ItemAddForm onSubmit={this.handleSubmit} />
        <Items
          items={this.state.items}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
        />
        <button className="reset-button" onClick={this.handleClick}>
          Reset All
        </button>
      </>
    );
  }
}

export default App;
