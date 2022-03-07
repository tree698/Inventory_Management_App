import React, { Component } from 'react';

class Item extends Component {
  handleIncrement = () => {
    this.setState({ count: (this.state.count += 1) });
  };

  handleDecrement = () => {
    const count = (this.state.count -= 1);
    this.setState({ count: count < 0 ? 0 : count });
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  handleDelete = () => {};

  render() {
    const { name, count } = this.props.item;
    return (
      <li className="habit">
        <span className="item-name">{name}</span>
        <button
          className="item-button item-increase"
          onClick={this.handleIncrement}
        >
          <i className="fa-solid fa-square-plus"></i>
        </button>
        <button
          className="item-button item-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fa-solid fa-square-minus"></i>
        </button>
        <span className="item-count">{count}</span>
        <button className="item-reset" onClick={this.handleReset}>
          Reset
        </button>
        <button className="item-button item-delete" onClick={this.handleDelete}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </li>
    );
  }
}

export default Item;
