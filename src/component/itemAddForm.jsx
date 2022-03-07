import React, { Component } from 'react';

class ItemAddForm extends Component {
  inputRef = React.createRef();

  handleSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onSubmit(name);
    this.inputRef.current.value = '';
  };
  render() {
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Enter your inventory"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default ItemAddForm;
