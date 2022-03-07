import React, { Component } from 'react';

class Item extends Component {
  handleIncrement = () => {
    this.props.onIncrement(this.props.item);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.item);
  };

  handleReset = () => {
    this.props.onReset(this.props.item);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.item);
  };

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
