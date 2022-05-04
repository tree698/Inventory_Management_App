import React, { Component } from 'react';
import Items from './component/items';
import Navbar from './component/navbar';
import './app.css';
import ItemAddForm from './component/itemAddForm';
import PaginatedItems from './component/paginatedItems';

class App extends Component {
  state = {
    items: [],
  };

  handleIncrement = (item) => {
    const items = this.state.items.map((stateItem) => {
      if (stateItem.id === item.id) {
        return { ...item, count: item.count + 1 };
      }
      return stateItem;
    });
    this.setState({ items });
  };

  handleDecrement = (item) => {
    const items = this.state.items.map((stateItem) => {
      if (stateItem.id === item.id) {
        const count = stateItem.count - 1;
        return { ...stateItem, count: count < 0 ? 0 : count };
      }
      return stateItem;
    });
    this.setState({ items });
  };

  handleReset = (item) => {
    const items = this.state.items.map((stateItem) => {
      if (stateItem.id === item.id) {
        return { ...item, count: 0 };
      }
      return stateItem;
    });
    this.setState({ items });
  };

  handleDelete = (item) => {
    const items = this.state.items.filter(
      (stateItem) => stateItem.id !== item.id
    );
    this.setState({ items });
  };

  handleSubmit = (name) => {
    const item = [...this.state.items, { id: Date.now(), name, count: 0 }];
    this.setState({ items: item });
  };

  handleResetAll = () => {
    const items = this.state.items.map((item) => {
      if (item.count !== 0) {
        return { ...item, count: 0 };
      }
      return item;
    });
    this.setState({ items });
  };

  render() {
    return (
      <section className="section">
        <Navbar
          totalCount={this.state.items.filter((item) => item.count > 0).length}
        />
        {/* <Items
          items={this.state.items}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
        /> */}
        <PaginatedItems
          itemsPerPage={4}
          items={this.state.items}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
        />
        <ItemAddForm onSubmit={this.handleSubmit} />
        <button className="reset-button" onClick={this.handleResetAll}>
          Reset All
        </button>
      </section>
    );
  }
}

export default App;
