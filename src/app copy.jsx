import React, { useState } from 'react';
import Navbar from './component/navbar';
import Items from './component/items';
import ItemAddForm from './component/itemAddForm';
import './app.css';

const App = (props) => {
  const [items, setItems] = useState([]);

  handleIncrement = (item) => {
    const items = this.state.items.map((stateItem) => {
      if (stateItem.id === item.id) {
        return { ...item, count: item.count + 1 };
      }
      return stateItem;
    });
    this.setState({ items });
  };

  return (
    <section className="section">
      <Navbar
        totalCount={this.state.items.filter((item) => item.count > 0).length}
      />
      <Items
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
};

export default App;
