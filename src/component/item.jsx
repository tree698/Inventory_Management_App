import React, { PureComponent } from 'react';

class Item extends PureComponent {
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
      <tbody>
        <tr>
          <td>{name}</td>
          <td>
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
          </td>
          <td>{count}</td>
          <td>
            <button className="item-reset" onClick={this.handleReset}>
              Reset
            </button>
          </td>
          <td>
            <button
              className="item-button item-delete"
              onClick={this.handleDelete}
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default Item;
