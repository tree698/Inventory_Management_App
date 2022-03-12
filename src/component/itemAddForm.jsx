import React, { memo } from 'react';

const ItemAddForm = memo((props) => {
  const inputRef = React.createRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onSubmit(name);
    inputRef.current.value = '';
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Enter your item"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default ItemAddForm;
